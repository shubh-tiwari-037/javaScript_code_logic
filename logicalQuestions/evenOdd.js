//========EVEN ODD NUM

// let num = 17;

// if (num % 2 === 0) {
//     console.log("num is even");
// } else {
//     console.log("num is odd");
// }


// =============================SWAP TWO NUMBERS

// let a,b; //a=10,b=30
// a=400, b=50
// console.log(` before swaping a= ${a} , b=${b}`)
// a= b-a //20
// b=b-a  //30-20 = 10
// a= a+b //20+10 = 30

// console.log(` after swappinga= ${a} , b=${b}`)
// ------------sort way to swap
// let a = 10, b = 30;
// [a, b] = [b, a];
// console.log(a, b); // 30 10

//==========================FIND LARGEST OF THE THREE NUMBERS

// let a,b,c;
// a=200, b=50, c=104;

// if(a>b && a>c){
//     console.log(`a is grater${a}`);
// }else if(b>c && b>a){
//     console.log(`b is grater${b}`);
// }else{
//     console.log(`c is grater${c}`);
// }
//------
// let a = 200, b = 50, c = 104;

// let largest = Math.max(a, b, c);
// console.log(`Largest number is: ${largest}`);

//============= CHECK A YEAR IS LEAP YEAR OR NOT
// Logic
// A year is a leap year if:
// It is divisible by 4 and not divisible by 100, OR
// It is divisible by 400

// ✅ Examples:
// 2024 → Leap year
// 1900 → Not leap year (divisible by 100 but not 400)
// 2000 → Leap year (divisible by 400)



// let year= 2000;

// if( year %4 ===0 && year% 100 !==0 ||(year% 400 ===0 )){
//  console.log(`leap year`)
// }else {
//    console.log(` not leap year`) 
// }


// --TERNERY OPERATOR SE LEEP YEAR  NIKALNA
// let year = 2028;
// console.log((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? "leap year" : "not leap year");

//============REVERSE A STRING
// console.log("shubham".split('').reverse().join(''));  //----sort way
// ------------------reverse a string in sorter way
// let str = "shubham";
// let reversed = "";

// for (let char of str) {
//     reversed = char + reversed; // prepend karte hain
// }

// console.log(reversed);

// --------------------
// let str= "shubham";
// let reverse="";
// let length = str.length-1;
// for(let i=length; i>=0; i--){
//     reverse +=str[i];
 
// }
//  console.log(reverse)
// process.stdout.write(reverse)




//========COUNT VOVELS IN A STRING

// let str= "shubhamisrich";
// let length= str.length;
// // let count="";
// let count=0;

//  for(let i=0; i<=length; i++){
//     if(  str[i] === "a" || str[i] === "e" || str[i] === "i" ||
//         str[i] === "o" || str[i] === "u" ||
//         str[i] === "A" || str[i] === "E" || str[i] === "I" ||
//         str[i] === "O" || str[i] === "U"
        
//     ){
//         //   count+=str[i]
//         count+=1
//     }
            
//     }
//     console.log(`vovels count is :${count}`)
//-----------sorter version of vovel check-----------------
// let str = "shubhamisrich";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let char of str) {
//     if (vowels.includes(char)) {
//         count++;
//     }
// }

// console.log(`vowels count is: ${count}`);



//============FIND A FACTROIAL OF A NUMBER
// let num=10;  //5 factroial ->120
// let fact=1;
// for(let i=1; i<=num; i++){
//     // fact= fact*i
//     fact*=i
// }
// console.log(`factorial is ${num} of ${fact}`)

//===============MULTIPLACTION TABLE OF ANY NUM
 
// let num= 10;
// let n=10;
// let table;
// for(let i=1; i<=n; i++){
//     table=num*i
// console.log(`table of ${num} x ${i} is =${table}`)
// }

//============SUM ALL NUMBER FROM 1 TO N
// let num= 100;
// let sum=0;
// for (let i=1; i<=num; i++){
//     sum+=i;
// }
// console.log(`sum of ${ num} is = ${sum}`)


//========CHECK IN NUMBER IS PRIME

// let num=13;
// let isPrime= true;

// if(num <= 1){
//     isPrime= false;
// }else{
//     for (let i=2; i<Math.sqrt(num); i++){
//        if(num%i===0) {
//          isPrime= false;
//         break;
//        }
       
//     }
// }

// if(isPrime){
//     console.log('num is prime')
// }else{
//    console.log('num is not prime') 
// }

//==========