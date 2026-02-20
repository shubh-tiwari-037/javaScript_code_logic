

// 1. Array Based
// ===================Find the largest element in an array

// let arr= [12,3,44,34,13,56,3,]
// const largest = function(arr){
//     let largest= arr[0];
//     for (let i=0; i<=arr.length; i++){
//         if(arr[i] > largest) largest= arr[i]
//     }
//     return largest
// }
// console.log(largest(arr))


// ==========Find the second largest element
// let arr= [12,3,44,34,13,56,3,]
// const Secondlargest = function(arr){
//     let largest= arr[0];
//     let secondLarge= arr[0];
//     for (let i=0; i<=arr.length; i++){
//         if(arr[i] > largest) {
//             secondLarge= largest
//             largest= arr[i]
//         }
//         if(arr[i] > secondLarge && arr[i]< largest ){
//                 secondLarge= arr[i]
//         }
//     }
//     return {secondLarge}
// }
// console.log(Secondlargest(arr))


// ==============Find the Nth largest element (without built-ins)
// function nthLargest(arr, n) {
//     // sort array in descending order manually
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 // swap arr[i] and arr[j]
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     // after sorting, the nth largest is at index n-1
//     return arr[n - 1];
// }

// console.log(nthLargest([10, 4, 7, 20, 15], 2));  
// Output: 10
// -----------------------------------------------
// let n= 2
// const arr= [22,34,12,11,9,23,38,67]
// const Nthlargest = function(arr, n){

//     for(let i=0; i<=arr.length; i++){
//         for(let j=i+1; j<=arr.length; j++){
//             if(arr[j] > arr[i]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j]= temp
//             }
//         }
//     } return arr[n-1]
// }
// console.log(Nthlargest(arr,n))


// ==========================Reverse an array manually

// const arr= [22,34,12,11,9,23,38,67]
// let start =0;
// let end = arr.length-1;
// const reverse = function(arr){
//    while(start < end){
//     let temp =arr[start];
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--
//    }return arr
// }

// console.log(reverse(arr))


// ----------------------
// const arr= [22,34,12,11,9,23,38,67]

// const reverse = function(arr){
//      let reversed=[];
//     for(let i=arr.length-1; i>=0; i--){
//         reversed.push(arr[i])
//     }return reversed
// }
// console.log(reverse(arr))

// ==================Remove duplicates from an array

// const arr= [22,34,12,11,9,22,31,34]

// const duplicatsRemove = function(arr){
//     let unique= [];
//     for(let i=0; i<=arr.length-1; i++){
//         if(!unique.includes( arr[i])){
//             unique.push(arr[i])
//         }
//     }return unique;
// }
// console.log(duplicatsRemove(arr))

// -------------------
// const arr= [22,34,12,11,9,22,31,34,2,1,3,2,3]
// const removeDupli =function(arr){
//  const result = [];
// for(let i=0; i<=arr.length-1; i++){

// let isDuplicate = false;

//     for(let j=0; j<result.length; j++){
//          if(arr[i]=== result[j]){
//             isDuplicate = true;
//             break;
//          }
//     }
//         if(!isDuplicate){
//             result.push(arr[i])
//         }

// }return result

// }
// console.log(removeDupli(arr))



// ===================Check if array is sorted
//=================== ASCENDING ORDER

// let arr =[12,15,21,23,34,44,45,222]
// const isSortedArr = function(arr){
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]< arr[i-1]){
//             return false;
//         }
//     }return true
// }
// console.log(isSortedArr(arr))

//=============== DESCENDING ORDER
// let arr =[12,9,7,5,2,1]
// const isSortedArr = function(arr){
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] >arr[i-1]){
//             return false;
//         }
//     }return true
// }
// console.log(isSortedArr(arr))

// // ------------------
// function checkSorted(arr) {
//     let asc = true;
//     let desc = true;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[i - 1]) asc = false;   // break asc order
//         if (arr[i] > arr[i - 1]) desc = false;  // break desc order
//     }

//     if (asc) return " Sorted Ascending";
//     if (desc) return " Sorted Descending";
//     return "Not Sorted";
// }

// console.log(checkSorted([1,2,3,4]));   // Ascending
// console.log(checkSorted([9,7,5,1]));   // Descending
// console.log(checkSorted([3,1,2]));     // Not Sorted



// =================Find missing number in array 1 to N

// let arr=[1,2,3,4,5,6,8]
// const MissingNum = function(arr){
// let n= arr.length+1;
// let result = [];

// for(let i=0; i<arr.length; i++){
//     result[arr[i]] = true;
// }

// for(let i=1; i<n; i++){
//     if(!result[i]){
//         return {i}
//     }
// }
// }

// console.log(MissingNum(arr))

// -------------------------==========another way
// let arr=[1,2,3,4,5,6,7,8,10]

// const MissingNum = function(arr){
//     let n= arr.length +1;
//     let totalsum = n* (n+1)/2

//     let arrSum =0;
//     for(let i=0; i<arr.length; i++){
//         arrSum+= arr[i]
//     }return totalsum - arrSum
// }

// console.log(MissingNum(arr))


// =====================Find pair whose sum is equal to target
// let arr =[12,15,21,23,34,44,45,2]
// let target = 253
// const findPair = function(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }return "no pair found"
// }
// console.log(findPair(arr,target))

// ----------------------------
// let arr =[12,15,21,23,34,44,45,2]
//  let target = 25
// function findPair(arr, target) {
//     let map = [];

//     for (let i = 0; i < arr.length; i++) {
//         let need = target - arr[i];

//         if (map[need]) return [need, arr[i]];

//         map[arr[i]] = true;
//     }
//     return "No pair found";
// }
// console.log(findPair(arr,target))


// =======================Find frequency of each element (without Map)
// let arr =[2,15,21,23,23,44,45,2]

// const frequency = function(arr){
//     let freq = {};
//     for(let i=0; i<arr.length; i++){
//         if(freq[arr[i]]){
//             freq[arr[i]]+= 1;
//         }else{
//            freq[arr[i]]  = 1
//         }
//     }return freq;
// }
// console.log(frequency(arr))


// =======================Merge two sorted arrays
// let arr1=[2,5,8,9,21]
// let arr2=[1,4,7,20,21]
// let arr2 =[2,4,6,9,21,32,59]
// let arr1 =[3,5,8,1,2,34,56,]

// const mergeTowArr = function(arr1,arr2){
//     let result =[]
//     let i=0, j=0;
//     while(i<arr1.length && j< arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++ 
//         }
//     }

//     while(i<arr1.length) result.push(arr1[i++])  //ye eak tarika h 

//         while (j< arr2.length){
//             result.push(arr2[j])
//             j++           //ye bhi eak tarika h
//         }

//         return result
// }
// console.log(mergeTowArr(arr1,arr2))


// =================Move all zeros to the end

// let arr1=[2,5,0,0,8,9,0,21]
// const mooveZeros = function(arr){
//     let result =[];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== 0){
//             result.push(arr[i])
//         }
//     }

//      for(let i=0; i<arr.length; i++){
//         if(arr[i] === 0){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(mooveZeros(arr1))

// --------------------------
// let arr1=[2,5,0,0,8,9,0,21]
// const moovZeros = function(){
//     let nz= 0;       //index for not zero

//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] !== 0){
//             let temp =arr1[nz]
//             arr1[nz ] = arr1[i]
//             arr1[i] = temp

//            // [arr1[nz],arr1[i]] =  [arr1[i] , arr1[nz]];
//             nz++
//         }
//     }return arr1
// }
// console.log(moovZeros(arr1))

// ====================Find intersection of two arrays
// let arr1=[1, 2, 3, 4,23,56,76,34,22,89,]
// let arr2 =[3, 4, 5, 6,89,76]

// const intersection = function(arr1,arr2){
//     let result=[];
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 result.push(arr1[i])
//             }
//         }
//     }return result
// }
// console.log(intersection(arr1, arr2))
















// STRING BASE QUESTOONS

//===================Reverse a string without built-ins

// let str ="tiwari";
// const reverse = function(str){
//      str = str.split("")
//     let st=0;
//     let end = str.length-1;

//     while(st <end){
//         let temp = str[st]
//         str[st]= str[end] 
//        str[end]  = temp
//         st++;
//         end--
//     }return str.join("") 
// }
// console.log(reverse(str))


// ======================Check if string is palindrome
// let str = "madam"

// const ispalindrome = function(str){
//  let st=0;
//     let end = str.length-1;

//     while(st <end){
//         if(str[st] === str[end]) return true
//         st++;
//         end--
//     }return false 
// }
// console.log( ispalindrome(str));


// ----------------
// function isPalindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed === str;
// }
// console.log(isPalindrome("level")); // true

// ===================Count vowels in a string

// let str ="aeioushubham"
// const countvovels =function(str){
//     let count =0;
//    str = str.toLowerCase();

//     for(char of str){
//         if(char ==="a" || char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"  ){
//             count++
//         }
//     } return count
// }
// console.log(countvovels(str))



// ===================Find first non-repeating character

// let char ="aabbccdd"
// const nonReptChar = function(char){
//   for(let i=0; i<char.length; i++){
//     let unique = true
//     for(let j=0; j<char.length; j++){
//         if(i!== j && char[i] === char[j]){
//             unique = false;
//             break;
//         }
//     }
//     if(unique) return char[i]
//   }
//    return "no unique charector"
// }
// console.log(nonReptChar(char))

// -------------first non repiting char  second method
// const firstnonrept = function(str){
//     let freq={}
//     for(let char of str){
//         freq[char]= (freq[char] || 0) + 1;
//     }

//   for(let char of str){
//       if(freq[char]===1) return char
//     }
//     return null
// }
// console.log(firstnonrept("sshhub"))

// ===it give all non repeating char
// const nonrepeating= function(str){
//     let freq={};
//     let unique=""
//     for(let char of str){
//         if(!freq[char]){
//             unique+=char
//             freq[char]= true
//         }
//     }return unique
// }
// console.log(nonrepeating("saabbh"))

// =================Remove spaces from string

// const removeSpace = function(str){
//     let result ="";
//     for(char of str){
//         if(char !==" "){
//             result+=char;

//         }
//     }return result;
// }
// console.log(removeSpace("mai to hu na ")) //maitohuna

// =================Convert to title case

// const titelCase = function(str){
//     let title ="";
//     let makeUpper = true;

//     for(ch of str){
//         if(ch === " "){
//             title+=ch
//             makeUpper= true
//         }else{
//             if(makeUpper){
//                  title+= ch.toUpperCase();
//                  makeUpper = false;
//             }else{
//                 title+=ch.toLowerCase();
//             }
//         }
//     }return title
// }
// console.log(titelCase("mai to hu na "))

// ===================Find character frequency
// let arr ="programming"

// const repet = function(arr){
// let freq ={};
// let char =""

// for(let i=0; i<arr.length; i++){
//  if(freq[arr[i]]){
//   freq[arr[i]] +=1;
//   char+=arr[i]
// } else{

// freq[arr[i]] =1;
// }
// } 

// return char;
// }

// console.log(repet(arr));

// -----------------------

// const charFreq = function(char){
//     let freq ={};
//     for(ch of char){
//         if(freq[ch]){
//             freq[ch]+=1
//         }else{
//              freq[ch]=1
//         }
//     }return freq
// }
// console.log(charFreq("tiwati_hu_mai"))

// ======================Check if two strings are anagrams

// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   if (str1.length !== str2.length) return false;

//   let freq1 = {}, freq2 = {};

//   for (let ch of str1) freq1[ch] = (freq1[ch] || 0) + 1;
//   for (let ch of str2) freq2[ch] = (freq2[ch] || 0) + 1;

//   for (let key in freq1) {
//     if (freq1[key] !== freq2[key]) return false;
//   }

//   return true;
// }
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world")); 


// ================Remove duplicate characters
// let str= "shubhamishubham"
// const unique = function(str){
//     let uniq ="";
//     let freq = {};

//     for(ch of str){
//         if(!freq[ch]){
//             uniq+=ch
//             freq[ch]= true;
//         }
//     }return uniq
// }
// console.log(unique(str))

// ==============Find longest word in a sentence
// const longestWord = function(str){
//     let longest ="";
//     let word ="";

//     for (let ch of str){
//         if(ch !==" "){
//             word +=ch;
//         }else{
//             if(word.length > longest.length){
//                 longest = word
//             }
//             word ="";
//         }
//     }

//     if(word.length > longest.length) {
//         longest = word  
//     }
//     return longest;
// }

// console.log(longestWord("I love programming very much"));
















// ✅ 4. Math & Logic

// ==================Fibonacci series (without recursion)
// let n=7
// const fibonacci = function(n){
//     let a=0,b=1,next =0;
// for(let i=0; i<n; i++){
//       console.log(next)
//     next = a+b;
//     a=b;
//     b=next
//     // console.log(next)
// }return next
// }

// fibonacci(n)


// ===========================Prime number check

// let num = 11;
// const isPrime = function(num){
//     for(let i=2; i<Math.sqrt(num); i++){
//         if(num % i ===0) return false
//     } return true
// }
// console.log(isPrime(num))


// ========================Reverse a number
// let num = 1234;
// const numRevers = function(num){
//     let revers = 0;
//     while(num >0){
//     let digit = num % 10;
//     revers = revers * 10 + digit;
//     num = Math.floor(num/ 10)
//     }return revers

// }
// console.log(numRevers(num))

// ===========================Sum of digits
// let num = 1234;
//  let sumDigits= function(num){
//     let sum= 0;
//     while(num > 0){
//         let digit = num % 10
//         sum+=digit;
//         num= Math.floor(num/10)
//     }return sum
//  }
//  console.log(sumDigits(num))


// =====================Factorial (loop & recursion)

// const factorial = function(n){

//     let fact =1;
//     // for(let i=1; i<=n ; i++){
//     //     fact *=i
//     // }return fact

//     // dono work kar rahe h for and while loop n>0 ya n>=1
//     while(n>0){
//         fact *=n;
//         n--
//     }return fact

// }
// console.log(factorial(4))


// ==============Check perfect number
// The sum of its proper divisors (excluding the number itself)
// is equal to the number.

// const perfectNum = function(num){
//     if(num <= 1) return false
//     let sum =0;
//     for (let i=1; i<num; i++){
//         if(num % i ===0){
//             sum += i;
//         }
//     }return sum === num
// }
// console.log(perfectNum(6))


// ====================Armstrong number check with function
// const isArmStrong = function(n){
//         let sum=0;
//         let digits = n.toString().length;
//         let temp= n;

//         while(temp> 0){
//                 let digit = temp %10;
//                 sum+= digit **digits;
//                 temp = Math.floor(temp/10)
//         }

//       if (sum === n) {
//   console.log("Armstrong Number");
// } else {
//   console.log("Not Armstrong");
// }

// return sum
// }
// console.log(isArmStrong(1532));

// ------------------without function Armstrong number check

// let num = 153;
// let temp = num;
// let digits = num.toString().length;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** digits;
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log("Armstrong Number");
// } else {
//   console.log("Not Armstrong");
// }










// ✅ 3. Sorting & Searching
// ==================Bubble sort

// let arr =[7,4.8,2,0,11,43,]
// const bubbleSort = function(arr){

//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j] > arr[j+1]){
//                 // let temp = arr[j];
//                 // arr[j] = arr[j+1];
//                 // arr[j+1] = temp;

//                  let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }return arr
// }
// console.log(bubbleSort(arr))











// STRING BASE NEW QUESTIONS

// ==============REMOVE ALL SPACES FROM STRING
// let str="h a rer i i"
// function Alltogether(str){
//     let result=""
//     for(let i=0; i<str.length; i++){
//         if(str[i] !==" "){
//             result+=str[i]
//         }
//     }
// return result
// }
// console.log(Alltogether(str))

// ==========CHECK IF STR CONTAINS ONLY DIGITS
let str="7687a68"
function onlydigit(str){
    for(let i=0; i<str.length; i++){
        let ch=str[i]
        if(ch <"0" || ch >"9"){
            return false
        }
    }
    return true
}
console.log(onlydigit(str))