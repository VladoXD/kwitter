var firebaseConfig = { 
      apiKey: "AIzaSyAE7IKZumj7-LejHy0At2OuT7QLaqIMGqA", 
      authDomain: "clase93-eb49a.firebaseapp.com", 
      databaseURL:"https://clase93-eb49a-default-rtdb.firebaseio.com/", 
      projectId: "clase93-eb49a", 
      storageBucket: "clase93-eb49a.appspot.com", 
      messagingSenderId: "690349831847", 
      appId: "1:690349831847:web:8f5a60939bc3a1fc94cd82" };
      
      
firebase.initializeApp(firebaseConfig);



  username = localStorage.getItem("username");
  document.getElementById("username").innerHTML = "¡Hola " + username + "!";
    



function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData(){
      firebase.database().ref("/").on('value', function(snapshot){
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                    document.getElementById("output").innerHTML += row;
            });
      });

}

getData();

function redirectToRoomName(name) {
       console.log(name);
        localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
 }


 function logout() {
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name"); window.location.replace("index.html");
      }