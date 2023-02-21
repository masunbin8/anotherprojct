'use strick';

const id = document.getElementById("id").value;
const password = document.getElementById("password").value;

//Dialog
const body = document.body;
const openDialogBtn = document.getElementById("open-dialog");
const closeDialogBtn = document.getElementById("close-dialog");
const dialog = document.getElementById("my-dialog");


function logIn() {    
    console.log(id);
    console.log(password);
    
}
function signUp() {
    window.location.replace("signup.html");
}

function closeDialog() {
    dialog.close();
    body.style.opacity = "1";
}


/*
    if (id == "" && password == "") {        
        openDialogBtn.addEventListener("click", () => {
            dialog.showModal();
            body.style.opacity = "0.2";
        });
    } */   