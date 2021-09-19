var firebaseConfig = {
    apiKey: "AIzaSyCt5z845pF4EOQbZnGWwF6O0Ks4QX9Uows",
    authDomain: "kwetter-876b4.firebaseapp.com",
    databaseURL: "https://kwetter-876b4-default-rtdb.firebaseio.com",
    projectId: "kwetter-876b4",
    storageBucket: "kwetter-876b4.appspot.com",
    messagingSenderId: "618289900088",
    appId: "1:618289900088:web:d1ae81de5636b7217354cd",
    measurementId: "G-HCSERV1YQ6"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        key : "My Name is Adriel"
    });
}