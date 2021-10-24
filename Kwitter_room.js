var firebaseConfig = {
    apiKey: "AIzaSyAh5ut2Vo0WXhtzjmkT2kgTgg6pz5LwqOs",
    authDomain: "kwitter-81e2f.firebaseapp.com",
    databaseURL: "https://kwitter-81e2f-default-rtdb.firebaseio.com",
    projectId: "kwitter-81e2f",
    storageBucket: "kwitter-81e2f.appspot.com",
    messagingSenderId: "23206564276",
    appId: "1:23206564276:web:04f65bffdec33a4ec9a2e1",
    measurementId: "G-HV66RM2M66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="chat.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
