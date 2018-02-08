var db = firebase.firestore();
function doLogin() {
    var logU = document.getElementById('logUser');
    var logPass = document.getElementById('logPassword');

    var ref = db.collection('users').doc(logU.value);
    ref.get().then(function (user) {
        if (user.exists) {
            if (user.data().password == logPass.value) {
                localStorage.setItem('userName' , logU.value);
                location.assign('../dashboard/dashboard.html')
            }
            else {
                alert('Wrong Password')
            }
        }
        else {
            alert('userName not available')
        }
    });
}