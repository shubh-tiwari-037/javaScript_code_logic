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


// let arr=[12,23,0,0,23,43,0,51,15,]
// let arr =[12,15,21,23,34,44,45,222]
// let arr =[12,9,7,5,2,1]
// let arr=[11,3,23,43,57,14,]
// let arr=[1,2,3,4,6,7,8,9]
// let arr =[1,12,14,51,66,71,80]
// let arr1 =[12,15,19,23,28]

// fibonacci series
// Reverse a number
// Prime number check
// Factorial
// Sum of digits
// Check perfect number

// let str="shubham"
// const reversed= function(str){
//     str=str.split("")
//     let start =0;
//     let end= str.length;
//     while(start<end){
//         let temp= str[start]
//         str[start]= str[end]
//         str[end] = temp;
//         start++;
//         end--;
//     }
//     return str.join("")

// }
// console.log(reversed(str))
// ------------------------
// let str="shubham"
// const revers= function(str){
//     let reversed=""
//     for(let i=str.length-1; i>=0; i--){
//         reversed+=str[i]
//     }
//     return reversed
// }
// console.log(revers(str))

// pailndrome
const paiindrome= function(str){
     let start =0;
    let end= str.length-1;
    while(start<end){
        if(str[start] === str[end])  return true
        
            start++;
            end--
        
    }
    return false
}
console.log(paiindrome("jmadamji"))