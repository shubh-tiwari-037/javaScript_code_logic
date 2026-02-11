//========== SUM OS ALL ARRAY ELEMENT

// let arr=[1,2,3,4,5,6,7,8,9];
// let length= arr.length;
// let sum=0;
// for(let i=0; i<length; i++){
//     sum+=arr[i];
// }
// console.log(sum)
//------------------------
// let sum = 0;
// for (let num of arr) sum += num;
// console.log(sum);

// sorter method---------
// let sum=arr.reduce((total, num)=>(total+num),0)
// console.log(sum)

// =========================FIND SECOND LARGEST NUM IN ARRAY
// let arr = [1, 22, 3, 4, 15, 6, 7, 8, 49];
// let length = arr.length;

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest; // update second largest
//         largest = arr[i];        // update largest
//     } 
//     else if (arr[i] > secondLargest && arr[i] < largest) {
//         secondLargest = arr[i];  // update second largest
//     }
// }

// console.log("Largest:", largest);           // 49
// console.log("Second Largest:", secondLargest); // 22

// ------------------------using method sort
// Create a copy & remove duplicates
// let secondLargest = [...new Set(arr)]
//     .sort((a, b) => b - a)[1];

// console.log(secondLargest);
// console.log(arr);


// ==================REVERSE AN ARRAY WITHOUT USING REVERSE METHOD
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let start = 0;
let end = arr.length - 1;

while (start < end) {
    // swap values
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
}

console.log(arr); 
// Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]


