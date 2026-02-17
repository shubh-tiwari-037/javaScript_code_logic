// 1. Array Based

// Find the largest element in an array

// Find the second largest element

// Find the Nth largest element (without built-ins)

// Reverse an array manually

// Remove duplicates from an array

// Check if array is sorted

// Rotate array (left/right)

// Find missing number in array 1 to N

// Find pair whose sum is equal to target

// Find frequency of each element (without Map)

// Merge two sorted arrays

// Move all zeros to the end

// Find intersection of two arrays

// ✅ 2. String Based

// Reverse a string without built-ins

// Check if string is palindrome

// Count vowels in a string

// Find first non-repeating character

// Remove spaces from string

// Convert to title case

// Find character frequency

// Check if two strings are anagrams

// Find longest word in a sentence

// Remove duplicate characters


// let arr= [12,3,44,34,13,56,3,]
// const largest = function(arr){
// let large=arr[0]
// let secondLarge= arr[0]

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > large){
//         secondLarge = large
//         large = arr[i]
//     }

//     if(arr[i]< large && arr[i]> secondLarge){
//         secondLarge = large;
        
//     }

// }
// return {large, secondLarge}
// }

// console.log(largest(arr))

// --------------------Nth largest element
// let arr= [12,3,44,34,13,56,3,110];
// let n=2;
// const nthlargest = function(arr,n){
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j]> arr[i]){
//             let temp = arr[i]
//             arr[i] = arr[j];
//             arr[j]= temp
//         }
//     }
// }
// return arr[n-1]
// }
// console.log(nthlargest(arr,n))

// ------------Reverse an array manually
let arr= [12,3,44,34,13,56,3,110];
const reversed= function(arr){
let st = 0;
let end = arr.length-1;
while(st < end){
     let temp = arr[st]
     arr[st] = arr[end];
       arr[end]= temp
       st++;
       end--;
}
return arr
}
console.log(reversed(arr))

