window.onload = function () {
    let index = 0;//标记当前图片索引
    const imgs = document.getElementsByClassName("carousel-img");
    const left = document.getElementsByClassName("carousel-left");
    const right = document.getElementsByClassName("carousel-right");
    let time_img;

    function time_fun() {
        time_img = setInterval(function () {
            if (index === imgs.length - 1) {
                index = 0;
            } else {
                index++;
            }
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].style.opacity = "0";
            }
            imgs[index].style.opacity = "1";
        }, 2000);
    }
    time_fun();
    left[0].onclick = function () {
        clearInterval(time_img);
        if(index===0){
            index = imgs.length-1;
        }
        else {
            index--;
        }
        for(var j = 0;j < imgs.length;j++){
            imgs[j].style.opacity = "0";
        }
        imgs[index].style.opacity = "1";
        time_fun();
    };
    right[0].onclick = function () {
        clearInterval(time_img);
        if(index===imgs.length-1){
            index = 0;
        }
        else {
            index++;
        }
        for(var j = 0;j < imgs.length;j++){
            imgs[j].style.opacity = "0";
        }
        imgs[index].style.opacity = "1";
        time_fun();
    };
    const li = document.getElementsByClassName("carousel-li");
    for(let i = 0; i < li.length; i++){
        li[i].onclick = function () {
            clearInterval(time_img);
            for(var j = 0;j < imgs.length;j++){
                imgs[j].style.opacity = "0";
            }
            imgs[i].style.opacity = "1";
            time_fun();
        }
    }
};

