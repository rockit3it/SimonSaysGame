let gamesq = [];
let usrseq = [];
let startedgame = false;
let level = 0;
let rdmclass = ["yellow","red","green","blue"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
if(startedgame == false){
    startedgame = true;
    levelup();
}
});
function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},200);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
    }

function levelup(){
    usrseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let rdmidx = Math.floor(Math.random() * 4);
    let value = rdmclass[rdmidx];
    let btnselect = document.querySelector(`.${value}`);
    gamesq.push(value);
    btnflash(btnselect);
    console.log(gamesq);
}
function check(idx){
    if(usrseq[idx] == gamesq[idx]){
        if(usrseq.length == gamesq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText = `game is over your score was ${level}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
    
}

function buttonPress(){
    let btn = this;
    let usrbtn = btn.getAttribute("id");
    usrseq.push(usrbtn);
    userflash(btn);
    check(usrseq.length-1);
}

let btn = document.querySelectorAll(".btn");

for(btns of btn){
    btns.addEventListener("click",buttonPress);
}
function reset(){
    startedgame = false;
    level = 0;
    usrseq = [];
    gamesq = [];
}