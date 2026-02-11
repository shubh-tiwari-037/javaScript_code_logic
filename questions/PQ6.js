//practic Q 1----------------------------------------------
//get elements larger than a number num 

// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;

// function getElements(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]> num){
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr,num);


//practic Q 2-------------------------------------------------
//function to get uniQue with all string elements

// let str="abcdabcdefgggh";

// function getUnique(str){
//     let ans=" ";
//     for(let i=0; i<str.length; i++){
//       let currchar=str[i];

//       if(ans.indexOf(currchar)==-1){
//         ans+=currchar;
//       }
//     }
//     return ans;
// }

// getUnique(str);


//practic Q 3-----------------------------------

// let country=["Australia","Germany","united states of america"];

// function longestName(country){
//     let ansIdx=0;
//     for(let i=0; i<country.length; i++){
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;

//         if(currLen >ansLen){
//             ansIdx=i;
//         }
//     }
//     return country[ansIdx];
    
// }
// console.log( longestName(country) );
// longestName(country);

//practic Q 4--------------------------------------

// let str="apnacollege";
// function countVowels(str){
//     let count=0;
//     for(let i=0; i< str.length; i++){
     
//     if(str.charAt[i]=="a" || str.charAt[i]=="e" || str.charAt[i]=="i" || str.charAt[i]=="o" || 
//     str.charAt[i]=="u"){
//         count++;
//     }
  
//     return count;
   
//     }
// }

// countVowels(str);

//practic Q 5-------------------------------------------------------

// let start=100;
// let end=200;

// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor( Math.random() *diff) +start;
// }

// console.log(generateRandom(start,end));


function generateRandom(n){
    
       let ran= Math.floor( Math.random() *n) +210;
         console.log(ran);
    }
    generateRandom(10);
