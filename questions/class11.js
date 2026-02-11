// function hello(){
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
//-------------------------------------------------2

// function one(){
//     return 1;
// };
// function two(){
//     return one() + one();
// };
// function three(){
//     let ans=one()+ two();
//     console.log(ans);
// };

// three();

//-------------------------------------------------4
// setTimeout( function(){
//     console.log("apna college");

// },2000);
// console .log("hello");

//-------------------------------------------------5 call back hell
//  let h1 =document.querySelector("h1");
//  setTimeout( ()=>{
//     h1.style.color="red";
//  },2000);

// function changeColor(color){
//     h1.style.color=color;
// }
// setTimeout(changeColor("red"),1000);
// setTimeout(changeColor("blue"),2000);
// setTimeout(changeColor("green"),3000);

// function changeColor(color,delay){
//     setTimeout( ()=>{
//         h1.style.color=color;
//     },delay);
// }
// changeColor("green",1000);
// changeColor("red",2000);
// changeColor("yellow",3000);

// let h1 =document.querySelector("h1");
// function changeColor( color,delay,nextColorChange){
//     setTimeout( ()=>{
//                 h1.style.color=color;
//                 if(nextColorChange)nextColorChange();
//             },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("pink",1000,()=>{
//         changeColor("lightGreen",1000,()=>{
//             changeColor("orange",1000);
//         });
//     });
// });

//-------------------------------------------------6 promises

// function saveToDb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1
//     if(internetSpeed>4){
//         console.log("data was saved");
//     } else{
//         console.log("data was  not saved");
//     }
// };
// let data=prompt("enter data");
//  saveToDb(data);

// function saveToDb(data ,success,failure){
//         let internetSpeed=Math.floor(Math.random()*10)+1
//         if(internetSpeed>4){
//            success();
//         } else{
//             failure();
//         }
//     };
//  saveToDb("apna college",
   
//         ()=>{
//             console.log("sucess : youe data was saved");
//         saveToDb( 
//             "hello world",
//         ()=>{
//             console.log("sucess 2: youe data2 was saved");

//         },
//         ()=>{
//             console.log("faliur  2: week connection");
//         }
//     );
// },
//   ()=>{
//     console.log("faliur  : week connection dat wa snot saved");
//   }
//     );

//-------------------------------------------------7 promises resolve & reject

// function saveToDb(data ){
     
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//            resolve("sucess:data was saved",internetSpeed);
//         } else{
//             reject("failure:weeak connection",internetSpeed);
//         }
//     });
// }  

// console.log(saveToDb("apna college"));

//-------------------------------------------------8 then and catch

// let request= saveToDb("apna gav");
// request
// .then(()=>{
//     console.log("promise was resolve");
//     console.log(request);
// })

// .catch(()=>{
//     console.log("promise was reject");
//     console.log(request);
// });

//------------------------------------------------------9 promise chaning

// function saveToDb(data ){
     
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//            resolve("sucess:data was saved",internetSpeed);
//         } else{
//             reject("failure:weeak connection",internetSpeed);
//         }
//     });
// }  

// saveToDb("apna college")
// .then(()=>{
//     console.log("data 1 saves",);
//     // return saveToDb("hello shubham");
//   console.log(saveToDb("hello shubham"));
// })
// .then(()=>{
//     console.log("data 2 saves",);
//     return saveToDb("shradha");
// })
// .then(()=>{
//     console.log("data 3 was saved",);
// })
// .catch(()=>{
//     console.log("promise wase rejected",);
// });
    //------------------------------------10 Errors in promise

//     function saveToDb(data ){
     
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//            resolve("sucess:data was saved",internetSpeed);
//         } else{
//             reject("failure:weeak connection",internetSpeed);
//         }
//     });
// }  

//     saveToDb("apna college")
//     .then((result)=>{
//         console.log("data 1 saves",);
//         console.log("result to promise",result)
//         return saveToDb("hello shubham");
     
//     })
//     .then((result)=>{
//         console.log("data 2 saves",);
//         console.log("result to promise",result)
//         return saveToDb("shradha");
//     })
//     .then((result)=>{
//         console.log("data 3 was saved",);
//         console.log("result to promise",result)
//     })
//     .catch((err)=>{
//         console.log("promise wase rejected",);
//         console.log("result to promise",err);
//     });

//----------------------------------------------- refactoring old code

// h1=document.querySelector("h1");

// function changeColor (color,delay){
//     return new Promise((resolve,reject)=>{
//     //  setTimeout(()=>{
//     //     h1.style.color=color;
//     //     resolve("color changed");
//     //  },delay);

//     //ye set timeout ye nuche wala

//     setTimeout(()=>{
//         if(h1.style.color=color){
//            resolve( console.log(color,"wase changed"));
//         // resolve(color,"wase changed")
//         } else{
//             reject( console.log(color,"wase note changed"));
//         }
//     },delay);
//     });
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
//     return changeColor("green",1000);
// })

// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("pink",1000);
// })
// .then(()=>{
//     console.log("pink color was completed")
// })
// .catch((err)=>{
//     console.log(err,"wase catched");
// });