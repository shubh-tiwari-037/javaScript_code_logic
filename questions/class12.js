// async function greet(){
//     throw "week connection hai";
//     return "hello world";
// };

// greet()
// .then((result)=> {
//     console.log("promise was resolved");
//     console.log("result was:,", result);
// })
// .catch((err)=>{
//     console.log("result was rejected with err:,", err);
// });
//---------------------------------------------------------2
// h1=document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;

//             if(num >3){
//                 reject("promise was reject");
//             }
//             h1.style.color=color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed")
//         },delay);
//     });
// }

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("pink",1000);
//     await changeColor("skyblue",1000);

//     let a=5;
//     console.log(a);
//     console.log("new number=",a+3);
// }

// demo();
//--------------------------------------------------3 handling
// h1=document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;

//             if(num >3){
//                 reject("promise was reject");
//             }
//             h1.style.color=color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed")
//         },delay);
//     });
// }

// async function demo(){
//     try{
//         await changeColor("red",1000);
//         await changeColor("green",1000);
//         await changeColor("pink",1000);
//         await changeColor("skyblue",1000);
    
//     }

//     catch(err){
//          console.log("error caought");
//          console.log("err");
//     }
//     let a=5;
//     console.log(a);
//     console.log("new number=",a+3);
//     }

//     demo();
//---------------------------------------------------------7 accesing json data

let student={
    name: "shubham",
    marke: 95,
};

// console me JSON.STRINGIFY(STUDENT); LIKHANA H


// let jsonRes=`{"message":"Welcome to the Potter DB: API! Check out the docs for more information: https://docs.potterdb.com"}`

// let validRes= JSON.parse(jsonRes);
// console.log(validRes.fact.);