//practics Q 1------------------
// let arr=[1,2,3,4,5,6,2,4,2,3,4,5,2];
// let num=2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

//practics Q 2-----------------

// let num=232345;
// let count=0;
//  let copy=num;

// while(num >0){
//  count++;
//  num= Math.floor(num/10);
// }

// console.log(count);

//practics Q 3---------------------

// let number=12345;
// let sum=0;

// while(number >0){
//     digit=number %10;
//     sum+=digit;
//     number=Math.floor(number/10);
// }

// console.log(sum);


//practics Q 4------------------------------

// let n=5;
// let factriol=1;

// for(let i=1; i<=n; i++){
// factriol*=i;
// }

// console.log(`factriol of ${n} is ${factriol}`);

//practics Q 5----------------------------------------

let arr=[2,5,10,4,2,7,1,9];
let largest=arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}

console.log(largest);