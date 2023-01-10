let homeEl = document.querySelector(".home");
let guestEl = document.querySelector(".guest");
let homeNumEl = document.querySelector(".homeNum");
let guestNumEl = document.querySelector(".guestNum");

let counter = 0;

function addOneNum() {
    counter += 1;
    homeNumEl.innerText = counter;
}
function addTwoNum() {
    counter += 2;
    homeNumEl.innerText = counter;
}
function addThreeNum() {
    counter += 3;
    homeNumEl.innerText = counter;
}


let count = 0;
function addOne() {
    count += 1;
    guestNumEl.innerText = count;
}
function addTwo() {
    count += 2;
    guestNumEl.innerText = count;
}
function addThree() {
    count += 3;
    guestNumEl.innerText = count;
}

function reset() {
    homeNumEl.innerText = 0;
    counter = 0;
    guestNumEl.innerText = 0;
    count = 0;
}


