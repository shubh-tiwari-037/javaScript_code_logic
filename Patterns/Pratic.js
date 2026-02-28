//----- right half pyramid

// let n=5
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write("*");
//     }
//     console.log()
// }

// ---------inverted right half pyramid
// let n=5;
// const invertedHalf= function(n){
// for(let i=0; i<n; i++){
//     for(let j=n; j>i; j--){
//         process.stdout.write("*");
//     }
//     console.log()
// }
// }
// invertedHalf(n);

// -----------Number increased pyramid

// let n=5;
// const numincresed= function(n){
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j.toString());
//     }
//     console.log()
// }
// }
// numincresed(n);

// ---------number changing pyramid
// let n=5;
// const numchange= function(n){
//     let num=1;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(num.toString()+" ");
//         num++
//     }
//     console.log()
// }
// }
// numchange(n);

// -----------Number increased Reverse pyramid
// let n=5
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(j.toString())
//     }
//     console.log()
// }

// ------------number trangular par abhi chala nahi h
// let n=5
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(i.toString())
//     }
//     console.log()
// }

// ----------------invers patetrn
// let n=5
// for(let i=n; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(i.toString())
//     }
//     console.log()
// }

 // -----inverted left half pyramid
 let n=5;
 for(let i=1; i<=n; i++){
    for(let j=1; j<=i ; j++){
        process.stdout.write(" ")
    }
    for(let j=i; j<=n; j++){
        process.stdout.write("*")
    }
    console.log()
 }