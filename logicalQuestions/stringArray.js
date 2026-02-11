// ====FIND SAMLLEST AND LARGEST IN AN ARRAY
// const arr=[2,23,4,67,22,11,23,21,777,12,99];
// let largest =arr[0];
// let smallest=arr[0];

// for(let i=1; i<=arr.length-1; i++){
//     if(largest <arr[i]){
//         largest=arr[i]
//     } 
//     if(smallest> arr[i]){
//          smallest= arr[i]
//     }

//     }
// console.log(smallest)
// console.log(largest)

//--------------------------------sort version
// const arr = [2, 23, 4, 67, 22, 11, 23, 21, 777, 12, 99];
// console.log("Smallest:", Math.min(...arr));
// console.log("Largest:", Math.max(...arr));


//==============REMOVE DUPLICATES FROM AN ARRAY

// const arr = [1,17, 2,  3, 17,4, 4, 5,22, 43, 27, 52,2,];
// let unique=[];
// let k=0;
// for(let i=0; i<arr.length; i++){
//     let isDuplicate=false;

//     for(let j=0; j<k; j++){
//         if(arr[i]===unique[j]){
//             isDuplicate= true;
//             break;
//         }
//     }

//     if(!isDuplicate){
//         unique[k]=arr[i]
//         k++
//     }
// }
// console.log(unique);


//----------------sorter way 
// const arr = [1, 17, 2, 3, 17, 4, 4, 5, 22, 43, 27, 52, 2];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) { // check if not already in unique
//         unique.push(arr[i]);        // add value to unique
//     }
// }

// console.log(unique);

