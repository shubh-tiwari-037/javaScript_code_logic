//practic Q 1----------------------------------------------
let arr=[1,2,3,4,5,6,7];

const arrAvg=(arr)=>{
    let avg=0;

    // for(number of arr){
        // avg+=number;
    // }
    for(let i=0; i<arr.length; i++){
        avg+=arr[i];
    }
    return avg/arr.length;
}

console.log(arrAvg(arr));

//practic Q 2-----------------------------------

// let num=4;
// const isEven=(num) =>(num %2==0);
// console.log(isEven);
// const isEven=(num)=>{
//     if(num %2==0){
//         console.log("even");
//     } else{
//         console.log(" not even");
//     }
// }


//practic Q 3----------------------------------------

const object={
    message:`hello world`,

    longMessage(){
        console.log(this.message);
    }
};

setTimeout(object.longMessage,10000);


//practic Q 4-----------------------------------

// let length=4;
// function callback(){
//     console.log(this.length);
// }

// const object={
//     length:5,
// method(callback){
//     callback();
// },

// };
// object.method(callback,1,2);