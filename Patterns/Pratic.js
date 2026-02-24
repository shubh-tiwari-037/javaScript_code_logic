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

let n=5;
const numincresed= function(n){
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j.toString());
    }
    console.log()
}
}
numincresed(n);