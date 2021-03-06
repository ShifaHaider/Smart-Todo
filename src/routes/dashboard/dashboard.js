var db = firebase.firestore();
var user = localStorage.getItem('userName');
var div = document.getElementById('div');
var list = document.getElementById('list');
var ref = db.collection('users').doc(user);
var todoRef = ref.collection('todos');
ref.get().then(function (user1) {
    user = user1.data();
    var p = document.createElement('p');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var h2 = document.createElement('h2');
    var i = document.createElement('i');
    p.innerHTML = 'Name : ' + user.name;
    p.style.color = '#1f30ff ';
    p1.innerHTML = 'UserName : ' + user.userName;
    p1.style.color = 'red';
    p2.innerHTML = 'Email : ' + user.email;
    p2.style.color = 'purple';
    p3.innerHTML = 'PhoneNumber : ' + user.phoneNumber;
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
var editNewTodo;
var todoForEdit;

function add() {
    var inp = document.getElementById('inp');
    todoRef.add({
        todo: inp.value,
        time: Date.now()
    });

    console.log(inp.value);
    inp.value = '';
}
loadTodos();
function loadTodos() {
    todoRef.onSnapshot(function (todoCollection) {
        console.log(todoCollection);
        todoCollection.docChanges.forEach(function (docTodo) {
            var data = docTodo.doc.data();
            data.id = docTodo.doc.id;
            console.log(docTodo);
            if (docTodo.type == 'added') {
                var button = document.createElement('button');
                var secButton = document.createElement('button');
                button.setAttribute('onclick', 'deleteTodo(this)');
                secButton.addEventListener('click', function(){
                    document.getElementById('inp').value = data.todo;
                    todoForEdit = data;
                    editNewTodo = li;
                    console.log(editNewTodo);
                });
                button.innerHTML = 'Delete';
                secButton.innerHTML = 'Edit';
                var b = document.createElement('b');
                b.innerHTML = data.todo + ' ' + new Date(data.time).toLocaleString();
                var li = document.createElement('li');
                li.appendChild(b);
                li.appendChild(button);
                li.appendChild(secButton);
                list.appendChild(li);
            }
        })
    })
}
function deleteTodo(e) {
    list.removeChild(e.parentNode);
    todoRef.doc(e.getAttribute('id')).delete()
}
function doEdit() {
    var inp = document.getElementById('inp');
    var obj = {
        todo : inp.value,
        time : Date.now()
    };
    editNewTodo.firstChild.innerHTML = obj.todo + new Date(obj.time).toLocaleString();

    todoRef.doc(todoForEdit.id).update(obj)
}
console.log(db);