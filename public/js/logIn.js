'use strick';

function signUp() {
    window.location.replace("signup.html");
}
/* Modal */
const modal = document.getElementById("logInModal");
const closeModalButton = document.getElementById("close-modal-button");

function logIn() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
}
function closeModal() {
    modal.style.display = "block";
}
/* Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/
/* DIALOG Component
const body = document.body;
const openDialogBtn = document.getElementById("open-dialog");
const closeDialogBtn = document.getElementById("close-dialog");
const dialog = document.getElementById("my-dialog");
const dialogP = document.querySelector("#dialogMsg");
console.log("login.js load.");

function logIn() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    if(id=="") {
        openDialog("아이디를 입력해주세요.");
    }else if(password=="") {
        openDialog("비밀번호를 입력해주세요.");
    }    
}

function openDialog(msg) {
    console.log(msg);    
    dialogP.innerHtml = msg;
    dialog.showModal();    
    body.style.opacity = "0.2";
}

function closeDialog() {
    dialog.close();
    body.style.opacity = "1";
}
*/