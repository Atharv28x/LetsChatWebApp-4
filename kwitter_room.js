var firebaseConfig = {
  apiKey: "AIzaSyCufAo5YxarOGKT3OT9hgCj4jjnkrbz-Es",
  authDomain: "letschatwebapp-7dfc7.firebaseapp.com",
  databaseURL: "https://letschatwebapp-7dfc7-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-7dfc7",
  storageBucket: "letschatwebapp-7dfc7.appspot.com",
  messagingSenderId: "337393819401",
  appId: "1:337393819401:web:5df8c1165d3233af907dd8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
  {
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name`"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName()
{
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}