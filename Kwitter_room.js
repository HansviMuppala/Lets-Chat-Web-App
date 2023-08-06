const firebaseConfig = {
  apiKey: "AIzaSyCFnMsgGOOjL84EI4ddjcn8XXzVu3SJYLs",
  authDomain: "lets-chat-web-app-1dc3a.firebaseapp.com",
  projectId: "lets-chat-web-app-1dc3a",
  storageBucket: "lets-chat-web-app-1dc3a.appspot.com",
  messagingSenderId: "1028616689086",
  appId: "1:1028616689086:web:d8561801645122cc1395ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
