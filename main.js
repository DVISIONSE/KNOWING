// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL0mrK0skOh0G8_hRXdY59ICUJHe_54C8",
    authDomain: "mensager-94c25.firebaseapp.com",
    projectId: "mensager-94c25",
    storageBucket: "mensager-94c25.appspot.com",
    messagingSenderId: "921263926126",
    appId: "1:921263926126:web:3f5648cdb3c5a6f0b1ef7f"
  };
  firebase.initializeApp(firebaseConfig)
const db = firebase.database();
const username =document.getElementById("username");
document.getElementById("chat").addEventListener("submit", postChat);
window.scrollTo( 0, 1000 );
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("message");
  const chatUSR =document.getElementById("username");
  const username = chatUSR.value;
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + "<strong>"+ messages.usr + "</strong>" + " : " + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
  var scroll=document.getElementById("messages-scroll");
  scroll.scrollTop=scroll.scrollHeight;
});