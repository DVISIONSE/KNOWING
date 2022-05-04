// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBm_kXkFvl4-WBTzQocDbcYmnIZfVohUU",
  authDomain: "test-f7ed0.firebaseapp.com",
  projectId: "test-f7ed0",
  storageBucket: "test-f7ed0.appspot.com",
  messagingSenderId: "587018470480",
  appId: "1:587018470480:web:1ad60247cd711f2ef0fd55"
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
