"use strict";

window.addEventListener("DOMContentLoaded", start);

const text = document.querySelector(".typewritten").textContent;
let n = 0;

function start() {
    console.log("start");
    console.log(text);

    document.querySelector(".typewritten").textContent = "";

    nextLetter();
}

function nextLetter() {
    console.log("nextLetter");


    if (text.charAt(n-1) === " ") {
        document.querySelector("#typespace").play();
    } else {
        let randomSound = Math.floor(Math.random() * 2 + 1);
        document.querySelector("#typekey"+randomSound).play();
    }
    
    document.querySelector(".typewritten").textContent = text.substring(0,n);
    n++;
    
    if (n <= text.length) {
        let randomTimer = Math.floor(Math.random() * (7 - 4) + 4);
        setTimeout(nextLetter, randomTimer * 100);
    } else {
        document.querySelector("#typelast").play();
    }
}