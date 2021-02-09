"use strict";

window.addEventListener("DOMContentLoaded", start);

const text = document.querySelector(".typewritten").textContent;

function start() {
    console.log("start");
    console.log(text);

    document.querySelector("h1").textContent = "";

    nextLetter();
}

function nextLetter() {
    console.log("nextLetter");
}