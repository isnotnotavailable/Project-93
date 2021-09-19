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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML ="Welcome " + user_name +"!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : 
      "adding rome name"

});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
