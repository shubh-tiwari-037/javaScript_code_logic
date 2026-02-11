// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function(){
//     console.log("button was clicked");
// };
//--------------------------------------------------------------
// function  sayhello(){
//     alert("hello");
// };
// btn.onclick=sayhello
//--------------------------------------------------------------
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayhello;
// }
// function  sayhello(){
//         alert("hello");
//      };
//--------------------------------------------------------------
// let btns=document.querySelector("button");
// // btn.addEventListener("click",function(){
// // console.log("button clicked");
// // });

// // for(btn of btns){
//     btns.addEventListener("click",sayname);


// function sayname(){
//     alert("apna college");
// }
//--------------------------------------------------activity Q4
// let btn =document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();

//     btn.style.backgroundColor=randomColor;
//     h3.innerText=randomColor;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("color updated");
// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }

//--------------------------------------------------EVENT LISTENER FOR ELEMENT
// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");
// });

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter" ,function(){
//   console.log("mouse inside div");
// });

//-------------------------------------------- 6 this in event listener

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let p=document.querySelector("p");
// let h3=document.querySelector("h3");

// function changeColor(){
//   console.dir(this.innerText);
 
//   this.style.backgroundColor="pink";
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

//-------------------------------------------- 7 keyboard event listener

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){

//   // console.log("code=",event.code);
//  if(event.code=="keyU"){
//   console.log("character moves up");
//  } else if(event.code=="keyD"){
//   console.log("character moves down");
//  }else if(event.code=="keyL"){
//   console.log("character moves left");
//  }else if(event.code=="keyR"){
//   console.log("character moves right");
//  }
// });

//-------------------------------------------- 8
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
  event.preventDefault();
  alert("form submited");
});