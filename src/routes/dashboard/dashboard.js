var db = firebase.firestore();
var user =localStorage.getItem('userName');
var div = document.getElementById('div');
var  ref = db.collection('users').doc(user);
ref.get().then(function(user1){
    user =  user1.data();
    var p = document.createElement('p');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var  h2 = document.createElement('h2');
    var i = document.createElement('i');
    p.innerHTML ='Name : ' + user.name;
    p.style.color =  '#1f30ff ';
    p1.innerHTML ='UserName : '+ user.userName;
    p1.style.color = 'red';
    p2.innerHTML ='Email : ' + user.email;
    p2.style.color = 'purple';
    p3.innerHTML ='PhoneNumber : ' + user.phoneNumber;
    p3.style.color = 'green';
    i.innerHTML = 'Welcome ' + user.userName + '!';
    h2.appendChild(i);
    h2.style.color = '#ff335f';
 h2.style.textshadow = '2px #ff335f';
    h2.style.listStyleImage = 'a.jpg';
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    div.style.width = '220px';
    div.style.border = '2px solid white';
    div.style.padding = '20px';
    div.style.borderRadius = '3px';
    console.log(div);

});


function add(){
    var inp = document.getElementById('inp');
    console.log(inp.value);
    inp.value = '';

}
console.log(db);