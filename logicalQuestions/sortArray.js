// BUBBLE SORT ASSENDING ORDER

// let arr=[12,51,24,4,7,91,20,33,6];
// let length= arr.length;
// for(let i=0; i<length; i++){
//     for(let j=0; j<length-i-1; j++){
//         if(arr[j]> arr[j+1]){
//             // swap
//             let temp = arr[j];
//             arr[j]= arr[j+1];
//             arr[j+1] = temp;

//         }
//     }
// }
// console.log("sorted arr", arr)

// Selection Sort (Logic-Based)------------------------
let arr = [12, 51, 24, 4, 7, 91, 20, 33, 6];
let n = arr.length;

for (let i=0; i<n-1; i++){
    let minIndex= i;
    for(let j=i+1;j<n; j++){
        if(arr[j]< arr[minIndex]){
            minIndex= j;
        }
    }
      // swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex]= temp;
}

console.log("Sorted with Selection Sort:", arr);

// Insertion Sort====================
// let arr = [12, 51, 24, 4, 7, 91, 20, 33, 6];

// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = key;
// }

// console.log("Sorted with Insertion Sort:", arr);


//==========Quick Sort (Fastest in Practice)
// function quickSort(arr) {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[arr.length - 1];
//     let left = [], right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) left.push(arr[i]);
//         else right.push(arr[i]);
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let arr = [12, 51, 24, 4, 7, 91, 20, 33, 6];
// console.log("Sorted with QuickSort:", quickSort(arr));

//============merge sort
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr; // base case (single element is already sorted)
//   }

//   // middle point nikalna
//   const mid = Math.floor(arr.length / 2);

//   // left aur right half ko sort karna recursively
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   // merge function call
//   return merge(left, right);
// }

// // merge function (do sorted arrays ko merge karega)
// function merge(left, right) {
//   let result = [];
//   let i = 0, j = 0;

//   // dono arrays me se smallest element utha ke result me daalo
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // bache hue elements add karna
//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// // Test
// let arr = [12, 51, 24, 4, 7, 91, 20, 33, 6];
// console.log("Original:", arr);
// console.log("Sorted:", mergeSort(arr));

//--------------------------
// let arr = [12, 51, 24, 4, 7, 91, 20, 33, 6];
// arr.sort((a, b) => a - b);
// console.log(arr); 
// [4, 6, 7, 12, 20, 24, 33, 51, 91]
