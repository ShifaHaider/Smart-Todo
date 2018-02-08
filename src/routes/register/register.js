var db = firebase.firestore();
function saveData(){
    var name = document.getElementById('name');
    var userName = document.getElementById('userName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var phone = document.getElementById('phone');
    var saveData1 = {
        name: document.getElementById('name').value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        phoneNumber: phone.value
    };

    var ref = db.collection('users').doc(saveData1.userName);

    ref.get().then(function(doc){
        if(doc.exists){
            alert('UserName is not available');
        }
        else{
            ref.set(saveData1);
            name.value = '';
            userName.value = '';
            email.value = '';
            password.value = '';
            phone.value = '';
        }
    });

}