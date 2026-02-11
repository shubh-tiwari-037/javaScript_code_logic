// ------------------------------------
// const student={
//     name :"shubham",
//     age :23,
//     eng :90,
//     math :90,
//     phy :90,
//     getAvg (){
//         let avg=(this.eng + this.math+ this.phy)/3;
//         console.log(`${this.name} is gote ${avg}`);
//     }
// }
// student.getAvg();

// ------------------------------------
// console.log("hello ");
// // let a=4;
// try{
//     console.log(a);
// } catch (err){
//      console.log("variable a dosent declerad");
// //     console.log(err);
//  }
// console.log("hello22");
// ------------------------------------
// console.log("hi ther");
// setTimeout( () =>{
    
// console.log("apna college");
// },2000 );
// console.log("wellcome to");

// ------------------------------------
//   let id= setInterval( () =>{
    
//     console.log("apna college");
//     },2000 );
//     console.log("id");
// ------------------------------------

let id= setInterval( () =>{
    
    console.log("apna college");
    },2000 );
    console.log("id");

    setTimeout( ()=>{
        clearInterval(id);
    }, 10000);