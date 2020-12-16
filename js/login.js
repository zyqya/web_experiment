window.onload = function(){
    let storage = window.localStorage;
    let btn=document.getElementById("btn1");
    btn.onclick = function(){
        let username = document.getElementById("username").value;
        storage.setItem("username",username);
    }
};