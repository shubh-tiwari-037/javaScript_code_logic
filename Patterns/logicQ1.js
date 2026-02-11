// Q1 remove vowels in given string
// let str = "hello";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   const char = str[i].toLowerCase();
//   if (char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u") {
//     result += str[i];
//   }
// }

// console.log(result);

// Q2 merge 2 arrays------------------Q3 unique array

// let arr1=[1,2,3];
// let arr2=[2,3,4,5];
// loop se merge karna 2 arraye ko
// let merged=[];
// for(let i=0; i<arr1.length; i++){
//     merged.push(arr1[i])
// };

// for(let i=0; i<arr2.length; i++){
//     merged.push(arr2[i])
// }
// console.log(merged);


// let finalarr= arr1.concat(arr2);   or loop se

// console.log(finalarr);

// const unique=[];
// for (let i = 0; i < finalarr.length; i++) {
//   let isDuplicate = false;

//   // Check if finalarr[i] already exists in unique array
//   for (let j = 0; j < unique.length; j++) {
//     if (finalarr[i] === unique[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   if (!isDuplicate) {
//     unique.push(finalarr[i]);
//   }
// }

// console.log("Unique array:", unique);

// Q5 extra spaces to removw karna h-------------

// let str=" A B C ";
// let res="";
// for (let i=0; i<str.length; i++){
//     if(str[i]!==" "){
//          res+=(str[i]);
//     }
    
// }
// console.log(res);


// Q4 string me latters kitni bar repete huye h unka count----------

// let str="hello";
// let countObj = {};

// for (let i = 0; i < str.length; i++) {
 
//   if (countObj[str[i]]) {
//     countObj[str[i]]++;
//   } else {
//     countObj[str[i]] = 1;
//   }
// }

//  let ent=Object.entries(countObj);
//  console.log(`${ent}`);


//  for (let key in countObj) {
//   process.stdout.write(` ${key}${countObj[key]}`);
// }

//console.log(Object.keys(countObj));
//console.log(Object.values(countObj));

// Q 6--------===+++++++++++++++++++

let str = "aabbc  abcd";
let words = str.trim().split(); 
let result = [];

for (let word of words) {
  let count = {};
  for (let char of word) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
    result.push(char + count[char]);
  }
}

console.log(result.join(" "));


