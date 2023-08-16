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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
  }