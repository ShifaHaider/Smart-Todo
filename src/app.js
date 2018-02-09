
function logOut(){
    location.assign('../dashboard/dashboard.html');
}

function add(){
var inp = document.getElementById('inp');
console.log(inp.value);
inp.value = '';
}
var div = document.getElementById('d');
var p = document.createElement('p');
var p1 = document.createElement('p');
var p2 = document.createElement('p');
var p3 = document.createElement('p');
p.innerHTML ='Name : ' + 'Shifa';
p.style.color = '#1f30ff ';
p1.innerHTML ='UseName : '+ 'ShifaHaider';
p1.style.color = 'red';
p2.innerHTML ='Email : ' + 'shifa.haider@gamil.com';
p2.style.color = 'purple';
p3.innerHTML ='phoneNumber : ' + '03456657432';
p3.style.color = 'green';
div.appendChild(p);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

console.log(div);
