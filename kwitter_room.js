var  firebaseConfig = {
    apiKey: "AIzaSyA6F7LOvBTuvtFCmD4T_JqrQHo4gxq_4WI",
    authDomain: "letschat-web-app-bd010.firebaseapp.com",
    databaseURL: "https://letschat-web-app-bd010-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-bd010",
    storageBucket: "letschat-web-app-bd010.appspot.com",
    messagingSenderId: "130144468643",
    appId: "1:130144468643:web:7654856d03d0e308208916"
  };
  
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
