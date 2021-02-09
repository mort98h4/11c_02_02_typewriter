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
    
    document.querySelector(".typewritten").textContent = text.substring(0,n);
    n++;
    // console.log(text.length);
    if (n <= text.length) {
        setTimeout(nextLetter, 500);
    }
}