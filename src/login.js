const loginForm = document.getElementById("login-form");
const loginId = loginForm.querySelector("#login-id");
const loginControl = document.getElementById("loginControl");
const sayHello = loginControl.querySelector("span");
const logoutBtn = loginControl.querySelector("button");

const ISLOGIN_CLASS = "isLogined";
const LOGINID_STR = "loginId";

function handleLogin(event) {
    event.preventDefault();
    doLogin(loginId.value);
}

function doLogin(id) {
    loginForm.classList.add(ISLOGIN_CLASS);
    sayHelloMessage(id);
    localStorage.setItem(LOGINID_STR, id);
}

function handleLogout(event) {
    event.preventDefault();
    loginId.value = "";
    loginForm.classList.remove(ISLOGIN_CLASS);
    loginControl.classList.add(ISLOGIN_CLASS);
    localStorage.removeItem(LOGINID_STR);
}

function sayHelloMessage(id) {
    sayHello.innerText = `Hi ${id}`;
    loginControl.classList.remove(ISLOGIN_CLASS);
}

function checkLogin() {
    const id = localStorage.getItem(LOGINID_STR);
    if (id) {
        doLogin(id);
        return id;
    }
    return false;
}

checkLogin();

loginForm.addEventListener("submit", handleLogin);
logoutBtn.addEventListener("click", handleLogout);