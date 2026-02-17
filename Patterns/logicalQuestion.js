
//Q1 :Write a function to print numbers 1–5 with a 1-second delay each.
// let n=5;
// for(let i=1; i<=n; i++){
// setTimeout(()=>{
// console.log(`num is ${i}   ` );
// },1000)

// }

//===========Q 2:Write a function to find factorial of a number.
// let ans=1
// const fact= function(n){
// for(i=n; i>=1; i--){
//     ans*=i;
// }
//   return ans;
// }

// console.log(fact(5));


//Q3 ===========:Check if a number is prime.
//  let number= 9;

//  const primenum =function(){
//     if(number<=1) return false;
// for(let i=2; i<=Math.sqrt(number); i++){
//  if(number % i ===0) return false;
// }
// return true;
//  }
//  console.log(primenum())

// Q:4 ======Write a program to find Fibonacci series.
//  let next;
// function Fibonacci(n){
//     let a=0, b=1;
//     for(let i=1; i<=n; i++){
//         next = a+b;
//         a=b;
//         b=next;
// console.log(next)
//     }
//     // return next;
// }

// const ans= Fibonacci;
// console.log(ans(7))
//-------------------

// function Fibonacci(n){
//     let a = 0, b = 1, next;
//     for(let i = 1; i <= n; i++){
//         next = a + b;
//         a = b;
//         b = next;
//             console.log(`Fibonacci of ${n} is ${next}`);
//     }
   
// }

// // Call function
// Fibonacci(7);

//Q5 ============= Reverse a string. example

// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed); // olleh

// --------------

// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(reverseString("world")); // dlrow


// Q6==========fins man and min in a array

// const arr = [5, 2, 9, 1, 7,2,0,88];
// function FindMinMax(arr){
//     let max= arr[0];
//     let min = arr[0];

//     for (let i=arr[1]; i<=arr.length; i++){
//         if(arr[i] > max) max= arr[i];
//         if(arr[i]< min)  min = arr[i]
//     }
//     return{min, max};
// }
// let result = FindMinMax(arr)
// console.log(" min",result.min,"max", result.max,);


// ===Q7 ====Remove duplicates from an array.

// let arr =[1,4,5,3,6,8,2,2,8,8,1]

// function removeDuplicate(arr){
// let unique=[]
//     for(let i=0; i<=arr.length-1; i++){
//         if(!unique.includes(arr[i])){
//             unique.push(arr[i])
//         }
//     }
//     return unique
// }

// const unique = removeDuplicate(arr)
// console.log(unique)

// Q8==========Reverse an array without using reverse().

// let arr= [1,7,3,9,12,33,67,32,1,5,]
// const reverseArr= function(arr){
//     let reverse=[];
//     for(let i=arr.length-1; i>=0; i--){
//         reverse.push(arr[i])
//     }
//     return reverse;
// }

// console.log(reverseArr(arr))


// Q9=========Find second largest element in array.
// let arr= [1,7,3,9,12,33,67,32,111,57,336]

// const secondLarge=function (arr){ 

//     let largest =-Infinity;
//     let second= - Infinity;

//     for(let i=0; i<= arr.length; i++){
//         if(arr[i]> largest) {
//             second= largest;
//             largest= arr[i];
//         } else if(arr[i]> second && arr[i]< largest){
//                 second = arr[i]
//         }
//     }
//     return {largest, second}
// }

// console.log(secondLarge(arr))
// // ---------
// let arr = [1,7,3,9,12,33,67,32,111,57];

// function secondLargest(arr) {
//     let largest = -Infinity;
//     let second = -Infinity;

//     for (let num of arr) {
//         if (num > largest) {
//             second = largest; 
//             largest = num;    
//         } else if (num > second && num < largest) {
//             second = num;
//         }
//     }

//     return second;
// }

// console.log(secondLargest(arr)); 

//Q10============== check 2 arr is equal or not
// function isArrayEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }

//     return true;
// }

// console.log(isArrayEqual([1,2,3], [1,2,3])); // true
// console.log(isArrayEqual([1,2,3], [1,2,4])); // false


// Q11=============Sum of all elements in an array.

//  let arr = [1,7,3,9,12,33,67,32,111,57];
// let arr = [32,4,34,56,32,45,32,67,65,45];

//  const sumOfArr = function(arr){
// let sum =0;
//     for (num of arr){
//         sum +=(num);
//     }
//     return sum;
//  }
//  console.log(sumOfArr(arr))

// Q12=====================Find frequency of elements in an array.
// let arr = [32,4,34,56,32,45,32,67,65,45];

// function frequency(arr){
//     let accur = {};

//     for (let num of arr) {
//         if (accur[num]) {
//             accur[num] += 1;
//         } else {
//             accur[num] = 1;
//         }
//     }

//     return accur;
// }

// const result = frequency(arr);
// console.log(result);


// Q13===========Reverse a string.
// let strs = "shubham";

// const reversStr = function(str) {
//     let revers = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         revers += str[i];
//     }

//     return revers;
// }

// console.log(reversStr(strs));

// Q14===============check a string is a Palindrome

// function isPalindrome(str){
//      let revers =""; 

//     for (let i = str.length - 1; i >= 0; i--) {
//         revers += str[i];
//     }

//     return revers === str;

// }

// console.log(isPalindrome("madam"))

// --------------

// const isPalindrome = function(str){
//     let left =0; 
//     let right= str.length-1

// while(left < right){
//    if(str[left]!= str[right]) return false;
//    left++;
//    right--;
// }
// return true
// }

// console.log(isPalindrome("madam"))  //true

// ================Count vowels in a string.

// let str="shubham";
// const countVovel = function (str) {
//     let vovels = 0;
//      for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (
//             char == "a" || char == "e" || char == "i" ||
//             char == "o" || char == "u" || char == "A" ||
//             char == "E" || char == "I" || char == "O" ||
//             char == "U"
//         ) {
//             vovels += 1;
//         }
//     }
//     return vovels;
// }

// console.log(countVovel(str));

// ====
// Q==========Find longest word in a string.

// let str= "mahi hu na tumhare sath";

// const longestWord= function(str){
// let word = str.split(' ');
// let longest = "";

// for(let i=0; i< word.length; i++){
//     if(word[i].length > longest.length){
//         longest= word[i];
//     }
// }return longest;

// }

// console.log(longestWord(str));

// ==========Check anagram (listen → silent).

// const checkAnagran = function(st1,st2){
//     let s1= st1.length;
//     let s2 = st2.length;
//     if(s1 != s2) return false;

//     st1.sort()
//     st2.sort()

//     for(let i= 0; i<= s1; i++){
//         if(st1[i] != st2[i]) return false
//     }
//     return true;
// }
// let st1="silent";
// let st2="listen";
// console.log(checkAnagran(st1,st2))



// ===========Find first non-repeating character.


// ============Remove spaces from string.
// let str="   shubham  tiwari "

// const spaceRemove = function(str){
//     let nwestr= str.replace(/\s/g,"");
//     return nwestr;

// }
// console.log(spaceRemove(str))
// console.log(str)


// ===================Find character frequency.
// let char="javaScript"
// function charFreq(char){

//     let fr={}
//     for(let i=0; i<char.length; i++){
//         if(fr[char[i]]){
//             fr[char[i]] += 1;
//         }else{
//             fr[char[i]] = 1; 
//         }
//     }return fr;
// }

// console.log(charFreq(char))


// =========Check if string contains only digits.

// const onlyDigit = function(num){

//      if(num.length < 0) return false

//     for(let i=0; i<num.length; i++){
//         if(isNaN(num[i]) || num[i] === ''){
//             return false
//         }
//     } return true
// }

// console.log(onlyDigit("23545a46"));


// ==================Write a function to add two numbers.
// function addNum(n1,n2){
//   let sum= n1+n2;
//   return sum
// }

// console.log(addNum(3,5))

// ==================Write a function to find factorial.

// const factorial = function(n){
//     let fact=1;
//     for(let i=1; i<=n; i++){
//         fact*=i;
//     }return fact
// }
// console.log(factorial(4))

// ==================Write a function to check prime number.

// const checkPrime = function (num) {
//     if (num < 2) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(checkPrime(34)); // false
// console.log(checkPrime(7));  // true


// ==================Write a function to find Fibonacci series.

// const Fibonacci = function(n){
//     let a=0 , b=1, next;
//         next=0;
//     for(let i=0; i<n; i++){
//         console.log(next)
//         next= a+b;
//         a=b;
//         b=next;
//     }return next;
// }
// console.log(Fibonacci(7))


//  ================Count digits of number
// function countDigits(num) {
  
//     return Math.abs(num).toString().length;
// }

// console.log(countDigits(12345)); // 5

// -------------------------
// function countDigits(num) {
//     let count = 0;
//     num = Math.abs(num);
//     while (num > 0) {
//         count++;
//         num = Math.floor(num / 10);
//     }
//     return count;
// }

// console.log(countDigits(12345)); // 5


// ===================Reverse a number  ??????????????

// const reversNumber = function(num){
//    let rev=0;

//    while(num > 0){
//     let digit = num % 10;     // last digit
//     rev= rev * 10 + digit;       // push digit to reversed number
//     num = Math.floor(num /10)   //remove last digit
//    }return rev
// }

// console.log(reversNumber(5678))

// ====================Sum of digits ????????????

// const sumDigit = function(num){

//     let sum=0;
//     while(num >0){
//     let digit = num %10;
//      sum+=digit;
//      num= Math.floor(num/10)

//     }return sum;
// }
// console.log(sumDigit(123))



// =============Merge two sorted arrays

// const sortedArr= function (arr1, arr2){

//     let i=0 , j=0 , result=[];

//     while(i< arr1.length && j< arr2.length){

//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++;
//         }else{
//            result.push(arr2[j])
//            j++ 
//         }
//     }
//      // Add remaining elements
//   while (i < arr1.length) result.push(arr1[i++]);
//  while (j < arr2.length) result.push(arr2[j++]);
//     return result
// }
// console.log(sortedArr([1,4,6,7],[2,11,34]))


// ==========Find duplicates in array


//  ================== Two-sum problem
// let arr= [1,3,9,2,6];
// let target = 8;
// const towSum = function(arr,target){
// let map ={};

// for(let i=0; i<arr.length; i++){
// let required = target - arr[i]

// if(map[required] !== undefined){
//     return [map[required],i]
// }
// map[arr[i]] = i
// }return null

// }

// console.log(towSum(arr,target))

















