let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

let btn = ["red", "yellow", "green", "blue"];

let gameColor = [];
let userColor = [];
let game = true;
let level = 0;
let bestLevel = 0;

document.addEventListener("keypress", function (){
    if(game){
        game = false;
        chooseBtn();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash");
    }, 300);
}

function chooseBtn() {
    userColor = [];
    level++;
    h3.innerHTML = `Level ->  <h2>${level}</h2> & your Best Level  was ->  <h2>${ bestLevel = Math.max(bestLevel, level)}</h2>`;
    let random = Math.floor(Math.random() * 4);
    let ranColor = btn[random];
    gameColor.push(ranColor);
    let ranClass = document.querySelector(`.${ranColor}`);
    btnFlash(ranClass); 
}
 
let allBtn = document.querySelectorAll(".sub");
for(btns of allBtn){
    btns.addEventListener("click", userClick);
}

function userClick() {
    let btns = this;
    btnFlash(btns);
    uc = btns.getAttribute("name");
    userColor.push(uc);   
    checkAns(userColor.length-1);
}

function checkAns(index){
    if(userColor[index] === gameColor[index]){
        if(userColor.length == gameColor.length){
            setTimeout(chooseBtn, 1000);
        }
    }else{
        h3.innerHTML = `Level ->  <h2>${level}</h2> & your Best Level  was ->  <h2>${bestLevel}</h2> <br> Game Over !!!  Press any key to start ???`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "rgb(49, 49, 49)";
        },250);
        reset();
    }
}

function reset(){
    gameColor = [];
    userColor = [];
    game = true;
    level = 0;
}

