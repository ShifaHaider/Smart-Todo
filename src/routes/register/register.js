var db = firebase.firestore();
function saveData(){
    var saveData1 = {
        name: document.getElementById('name').value,
        userName: document.getElementById('userName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phoneNumber: document.getElementById('phone').value
    };
    db.collection('users').doc(saveData1.userName).set(saveData1)
    
}