
//ADD YOUR FIREBASE LINKS HERE\
const firebaseConfig = {
      apiKey: "AIzaSyCxTgNTJE9_-OVRPinJssYpHc-b_3v6OA0",
      authDomain: "Chatty-62fbb.firebaseapp.com",
      databaseURL: "https://Chatty-62fbb-default-rtdb.firebaseio.com",
      projectId: "Chatty-62fbb",
      storageBucket: "Chatty-62fbb.appspot.com",
      messagingSenderId: "402719601239",
      appId: "1:402719601239:web:40a962d2f1110288e12912",
      measurementId: "G-1MPBWVDTYD"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name - "+Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });  
      });
}
getData();

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="Chatty_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Chatty_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
