'use strick';

const id = document.getElementById("id").value;
const password = document.getElementById("password").value;

function getLoginData() {    
    if (id == "") {        
        return alert("아이디를 입력해 주세요.");
    }
    if (password == "") {
        return alert("비밀번호를 입력해 주세요.");        
    }
    console.log("ID: " + id);
    console.log("Password: " + password);
}
function signUp() {
    window.location.replace("signup.html");
}