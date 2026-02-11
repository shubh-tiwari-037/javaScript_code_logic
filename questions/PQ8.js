//practic Q 1----------------------------------------------
// let nums=[1,2,3,4,5];
// const square=nums.map((num) => num*num);
// console.log(square);

// let sum=nums.reduce((num, el) => num +el);
// console.log(`sum is ${sum}`);

// let avg= sum/nums.length;
// console.log(avg);

//practic Q 2-----------------------------------

// let numbers=[2,4,6,8,-2,-4];
// console.log(numbers.map((number) => number+5));


//-practic Q 3----------------------------------

// let strings=["shubham","annu","priyanka","ramjee"];
// console.log( strings.map ((string) =>
// string.toUpperCase()));

//-practic Q 4-----------------------------------

// const mergeObjects=(obj1,obj2) =>({
//     ...obj1,...obj2});

//     mergeObjects({a:1,b:2},{c:3,d:4});
//     console.log( mergeObjects);

//-practic Q 5-------------------------------

const doubleAndReturnArgs =(arr,...args)=>[...arr,args.map((v)=> v*2)];

doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);