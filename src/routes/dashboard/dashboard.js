var db = firebase.firestore();
var user =localStorage.getItem('userName');
var div = document.getElementById('div');
var  ref = db.collection('users').doc(user);
ref.get().then(function(user1){
    var user = user1.data();
    var p = document.createElement('p');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    p.innerHTML ='Name : '+ user.name;
    p1.innerHTML ='UseName : '+  user.userName;
    p2.innerHTML ='Email : ' + user.email;
    p3.innerHTML ='phoneNumber : ' + user.phoneNumber;
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);


});

console.log(db);
