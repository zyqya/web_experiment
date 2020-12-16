window.onload = function () {
    var submit = document.getElementById("submit");
    document.getElementById("telephone").onblur=checkTelephone;
    document.getElementById("password1").onblur=checkPassword1;
    document.getElementById("password2").onblur=checkPassword2;
    document.getElementById("email").onblur=checkEmail;
    document.getElementById("username").onblur=checkUsername;
    var check = document.getElementById("check");
    var serveList = document.getElementById("serveList");
    submit.onclick = function () {
        var flag;
        if(check.checked===false){
            serveList.hidden=false;
            serveList.style.color="red";
            flag=false;
        }else if(check.checked===true){
            serveList.hidden=true;
            serveList.style.color="";
            flag=true;
        }
        return flag&&checkTelephone() & checkPassword1() & checkPassword2() & checkEmail() & checkUsername();
    }
};
//校验电话
function checkTelephone(){
    var telephone = document.getElementById("telephone");
    var tele = telephone.value;
    console.log(tele);
    var selectPlace = document.getElementById("selectPlace");
    var place = selectPlace.options[selectPlace.selectedIndex].value;
    //大陆
    var reg1 =  /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
    //香港
    var reg2 = /^([5689])\\d{7}$/;
    //澳门
    var reg3 = /^[0][9]\d{8}$/;
    //台湾
    var reg4 = /^(886)?09\d{8}$/;
    var td = document.getElementById("td_3_1");
    if(place==="Inland"){
        var flag = reg1.test(tele);
        checkTele(flag,td,tele);
        return flag;
    }
    if(place==="HangKang"){
        var flag = reg2.test(tele);
        checkTele(flag,td,tele);
        return flag;
    }
    if(place==="Macao"){
        var flag = reg3.test(tele);
        checkTele(flag,td,tele);
        return flag;
    }
    if(place==="Taiwan"){
        var flag = reg4.test(tele);
        checkTele(flag,td,tele);
        return flag;
    }
}
function checkTele(flag,td,tele){
    if(tele===""){
        td.innerHTML = "电话号码不能为空";
        td.style.color = "red";
        document.getElementById("telephone").style.borderColor="red";
    }
    else if(tele.length!==11){
        td.innerHTML = "号码输入错误";
        td.style.color = "red";
        document.getElementById("telephone").style.borderColor="red";
    } else if(!flag){
        td.innerHTML = "请检查号码与地点是否匹配";
        td.style.color = "red";
        document.getElementById("telephone").style.borderColor="red";
    }else{
        td.innerHTML = "填写正确";
        td.style.color = "green";
        document.getElementById("telephone").style.borderColor="";
    }
}
//校验密码
function checkPassword1(){
    var password1 = document.getElementById("password1");
    var pwd1 = password1.value;
    var password2 = document.getElementById("password2");
    var pwd2 = password2.value;
    var td1 = password1.parentElement.parentElement.lastElementChild;
    var td2 = password2.parentElement.parentElement.lastElementChild;
    var reg = /^[a-z0-9_-]{6,18}$/;
    var flag;
    if(pwd1==="") {
        td1.innerHTML = "请输入密码";
        td1.style.color = "red";
        password1.style.borderColor="red";
        password2.disabled ="disabled";
        return false;
    }else if(pwd1!==""){
        flag = reg.test(pwd1);
        if(flag){
            td1.innerHTML = "密码填写正确";
            td1.style.color = "green";
            password1.style.borderColor="";
            password2.disabled ="";
            return true;
        }else{
            td1.innerHTML = "密码应为数字或字母或_或-的6-18位组合";
            td1.style.color = "red";
            password1.style.borderColor="red";
            password2.disabled ="disabled";
            return false;
        }
    }
}
function checkPassword2(){
    var password1 = document.getElementById("password1");
    var pwd1 = password1.value;
    var password2 = document.getElementById("password2");
    var pwd2 = password2.value;
    var td1 = password1.parentElement.parentElement.lastElementChild;
    var td2 = password2.parentElement.parentElement.lastElementChild;
    var reg = /^[a-z0-9_-]{6,18}$/;
    var flag;
    if(pwd1===""){
        password2.disabled ="disabled";
        return false;
    }
    if(pwd1!==""){
        if(pwd2===""){
            td2.innerHTML = "请输入密码";
            td2.style.color = "red";
            password2.style.borderColor="red";
            return false;
        }
        if(pwd1!==pwd2){
            password2.value="";
            td2.innerHTML = "密码不匹配，请重新输入";
            td2.style.color = "red";
            password2.style.borderColor="red";
            return false;
        }else{
            td2.innerHTML = "密码填写正确";
            td2.style.color = "green";
            password2.style.borderColor="";
            return true;
        }
    }
    return true;
}
//校验姓名
function checkUsername() {
    var username = document.getElementById("username");
    var td = username.parentElement.parentElement.lastElementChild;
    if(username.value===""){
        td.innerHTML = "请输入您的真实姓名";
        td.style.color = "red";
        username.style.borderColor="red";
        return false;
    }else{
        return true;
    }
}
//校验邮箱
function checkEmail() {
    var email = document.getElementById("email");
    reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var td = email.parentElement.parentElement.lastElementChild;
    var flag;
    if(email.value===""){
        td.innerHTML = "请输入邮箱";
        td.style.color = "red";
        email.style.borderColor="red";
        return false;
    }else if(email.value!==""){
        flag = reg.test(email.value);
        if(flag){
            td.innerHTML = "填写正确";
            td.style.color = "green";
            email.style.borderColor="";
            return true;
        }else{
            td.innerHTML = "邮箱书写错误";
            td.style.color = "red";
            email.style.borderColor="red";
            return false;
        }
    }
}
//校验服务条款
function checkCheck() {
    var check = document.getElementById("check");
    var inputs = document.getElementsByTagName("input");
    if(check.checked === "false"){
        for(var i = 0;i < inputs.length;i++){
            inputs[i].disabled = "disabled";
        }
    }
}















