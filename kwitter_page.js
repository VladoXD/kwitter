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
room_name = localStorage.getItem("room_name");



function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" +  name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row = name_with_tag + message_with_tag +like_button + span_with_tag;
  document.getElementById("output").innerHTML += row;



//Termina código
      } });  }); }
getData();




function updatelike(message_id){
console.log("boton me gusta pulsado - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes) + 1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({like: update_likes});
}


function logout() {
       localStorage.removeItem("user_name");
        localStorage.removeItem("room_name"); window.location.replace("index.html");
       }