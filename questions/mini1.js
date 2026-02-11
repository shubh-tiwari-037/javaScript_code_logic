// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelector("li");

// div .addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul .addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li .addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
    
// };
//--------------------------------------------Q2

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value ;

//     let delBtn=document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";

// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="button"){
//         let listItem=event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
// });

//orrrrrrrrrrrrrrrrrr
// let delBtns=document.querySelectorAll("click", function(event){
//     for(delBtn of delBtns){
//         delBtn.addEventListener("click",function(){
//             let para=this.parentElement;
//             console.log(para);
//             para.remove();
//         });
//     }
// });



//--------------------------------------------Q3 simon say game

let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started = true;
        levelUp ();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
btn.classList.remove("userflash");
    },250);
}

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//   btn.classList.remove("userflash");
//     },250);
// }

 function levelUp(){
    // userSeq=[];
    level ++;
    h2.innerText=`level:${level}`;
   
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
 };

 function btnPress (){
    console.log(this);
    let btn= this;
    userFlash(btn);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }