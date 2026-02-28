      
    //   right half pyramid
    
//       let n = 5;
//         for(let i = 1; i <=n; i++) {
//             for(let j = 1; j<=i; j++) {
//                 process.stdout.write("*");
//             }
//              console.log();
//         }
// output
//         *
//         **
//         ***
//         ****
//         *****
 
 
    // --------------------inverted right half pyramid
//        let n = 5;
//         for(let i = 1; i<=n; i++) {
//             for(let j = 1; j<=n-i+1; j++) {
//                 process.stdout.write("*");
//             }
//              console.log();
//         }
// output
// *****
// ****
// ***
// **
// *


        // // --------Number increased pyramid

        // let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= 1; j<=i; j++) {
        //         process.stdout.write(j. toString());
        //     }
        //      console.log();
        // }
        // output
        // 1
        // 12
        // 123
        // 1234

        // ------number changing pyramid
        // let n=4;
        // let numb=1;
        // for(let i=1; i<=n; i++){
        //     for(let j=1; j<=i; j++){
        //        process.stdout.write(numb. toString()); 
        //        numb++; 
        //     }
        //     console.log();
        // }
        // output
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

        // ------Number increased Reverse pyramid

        //       let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= 1; j<=n-i+1; j++) {
        //         process.stdout.write(j. toString());
        //     }
        //      console.log();
        // }
        // output
// 1234
// 123
// 12
// 1

// ------------------number trangular par abhi chala nahi h
        //    let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= 1; j<=i; j++) {
        //         process.stdout.write(i. toString());
        //     }
        //      console.log();
        // }
        // output
// 1
// 22
// 333
// 4444
        // ------reverse number tringle pattern par chala nahi h

        //        let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= i; j<=n; j++) {
        //         process.stdout.write(j. toString());
        //     }
        //      console.log();
        // }
        // output
// 1234
// 234
// 34
// 4

        // ==============number trangular inverted
//            let n = 4;

// for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(i.toString());
//     }
//     console.log();
// }
// output
// 4444
// 333
// 22
// 1


        // -----inverted left half pyramid
        //          let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j=1; j<=i; j++){
        //          process.stdout.write(" ");
        //     }
        //     for(let j= i; j<=n; j++) {
        //         process.stdout.write("*");
        //     }
        //      console.log();
        // }

        //    ----- left half pyramid
        //          let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j=1; j<=n-i; j++){
        //          process.stdout.write(" ");
        //     }
        //     for(let j= 1; j<=i; j++) {
        //         process.stdout.write("*");
        //     }
        //      console.log();
        // }

        // ----full pymarid

        //               let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j=1; j<=n-i; j++){
        //          process.stdout.write(" ");
        //     }
        //     for(let j= 1; j<=i; j++) {
        //         process.stdout.write("*"+" ");
        //     }
        //      console.log();
        // }

        // ---inverted Full pymarid
        //               let n = 8;
        // for(let i= 1; i<=n; i++) {
        //     for(let j=1; j<=i; j++){
        //          process.stdout.write(" ");
        //     }
        //     for(let j= 1; j<=n-i+1; j++) {
        //         process.stdout.write("*"+ " ");
        //     }
        //      console.log();
        // }

        // -=========-Squire fill pattern

        //               let n = 5;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= 1; j<=n; j++) {
        //         process.stdout.write("*"+" ");
        //     }
        //      console.log();
        // }
        // output

//  * * * * * 
// * * * * *
// * * * * *
// * * * * *
// * * * * *

        // ------Hollow squire Patterns

        //              let n = 5; 
        // for(let i= 1; i<=n; i++) {
            
        //     for(let j= 1; j<=n; j++) {
        //         if(i == 1 || i==n || j==1 || j==n ){
        //                process.stdout.write("*");   
        //         }else{
        //           process.stdout.write(" ");
        //         }
                
        //     }
        //      console.log();
        // }

        // // ---------0-1 trangle

        // let n = 5;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= 1; j<=i; j++) {
        //         if((i+j) %2==0){
        //                 process.stdout.write("1");
        //         } else{
        //                 process.stdout.write("0");
        //         }
        //     }
        //      console.log();
        // }
// 1
// 01
// 101
// 0101
// 10101

        // ----number trangular

        //  let n = 4;
        // for(let i= 1; i<=n; i++) {
        //     for(let j=1; j<=n-i; j++){
        //          process.stdout.write(" ");
        //     }
        //     for(let j= 1; j<=i; j++) {
        //         process.stdout.write(i+" ");
        //     }
        //      console.log();
        // }
// output
//    1 
//   2 2
//  3 3 3
// 4 4 4 4

        // --hollw full pymarid nahi chala h
        
        //                  let n = 5;
        // for(let i= 1; i<=n; i++) {
        //     for(let j=1; j<=n-i; j++){
        //          process.stdout.write(" ");
        //     }
        //     for(let j= 1; j<=i; j++) {
        //         if(j==1 || j==i|| i==n ){
        //            process.stdout.write("*"+" ");
        //         }else{
        //          process.stdout.write("  ");
        //         }
               
        //     }
        //      console.log();
        // }
//     * 
//    * * 
//   *   * 
//  *     *
// * * * * *

        // -----Rhombus patterns
        //              let n=5;
        // for(let i= 1; i<=n; i++) {
        //     for(let j= 1; j<=i-1; j++) {
        //         process.stdout.write(" ");
        //     }
        //     for(let j=1; j<=n; j++)
        //     {
        //        process.stdout.write("*");  
        //     }
        //      console.log();
        // }
// *****
//  *****
//   *****
//    *****
//     *****

        //==================== 
// let n =5;
// for(let i=n; i>=1; i--){
//     for(let j=i; j>=1; j--){
//         process.stdout.write(j.toString())
//     }
//     console.log()
// }
// outpou
// 54321
// 4321
// 321
// 21
// 1

// ==========
// let n =5;
// for(let i=n; i>=1; i--){
//     for(let j=n; j>=i; j--){
//         process.stdout.write(j.toString())
//     }
//     console.log()
// }
// output
// 5
// 54
// 543
// 5432
// 54321


// ===========
// let n =5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(j.toString())
//     }
//     console.log()
// }
// // output
// 1234
// 123
// 12
// 1

// ==========
// let n =5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j.toString())
//     }
//     console.log()
// }
// output
// 1
// 12
// 123
// 1234
// 12345

// ==========
// let n =5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(i.toString())
//     }
//     console.log()
// }
// output
// 1
// 22
// 333
// 4444
// 55555


// =============
// let n=5;
// let l=1;
// for(let i=1; i<=n; i++){
//  for(let j=1; j<=i; j++){
//  process.stdout.write(l.toString()+" ")
//    l++;
// }
// console.log()
// }
// output
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// inverted half pyramid
// let n=4
// for(let i=1; i<=n; i++){
//         for(let j=1; j<=i-1+1; j++){
//             process.stdout.write(" ")
//         }

//          for(let k=1; k<=n-i+1; k++){
//             process.stdout.write("*")
//         } 
//         console.log()
// }
// output
//  ****
//   ***
//    **
//     *

// left half pyramid
// let n=5;
// for(let i=1; i<=n; i++){
//         for(let j=1; j<=n-i; j++){
//                 process.stdout.write(" ")
//         }

//          for(let j=1; j<=i; j++){
//                 process.stdout.write("*")
//         }
//         console.log()
// }
// output
//     *
//    **
//   ***
//  ****
// *****

// inverted full pyramed
// let n=6
// for(let i=1; i<=n; i++){
//         for(let j=1; j<=i-1+1; j++){
//             process.stdout.write(" ")
//         }

//          for(let k=1; k<=n-i+1; k++){
//             process.stdout.write(" *")
//         } 
//         console.log()
// }
// output
//   * * * * * *
//    * * * * *
//     * * * *
//      * * *
//       * *
//        *

//  // -=========-Hollow squire Patterns
// let n=8;
// for(let i=1; i<=n; i++){
//         for(let j=1; j<=n; j++){
//                 if(i===1 || i===n ||j===1 || j===n){
//                         process.stdout.write(" *")
//                 }else{
//                       process.stdout.write("  ")     
//                 }
//         }
//         console.log();

// }
//  * * * * * * * *
//  *             *
//  *             *
//  *             *
//  *             *
//  *             *
//  *             *
//  * * * * * * * *











// ==========================

