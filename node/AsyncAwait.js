// =======================PROMISE FUNCTION

function fetchedDataFromDb(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success= true;
            if(success){
                resolve({id:1, name:"shubham"})
            }else{
                reject("error promise failed")
            }
        },7000)
    })
}

// // using then ,error
// fetchedDataFromDb()
// .then((data)=>console.log("data recived sucessfully ",data))
// .catch((error)=>console.log("error in comming ",error))


// ========================async await func

async function getUserData() {
    try {
        console.log("Fetching data...");
        const data = await fetchedDataFromDb(); // Wait until Promise resolves
        console.log("Data received:", data);
    } catch (err) {
        console.error(err);
    }
}

// getUserData();

// ============================new program multiple functions
function task1() {
    console.log("function 1 is called")
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 done"), 5000);
    });
}

function task2() {
     console.log("function 2 is called")
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 done"), 100);
    });
}

//  function runTasks() {
//      console.log( task1()
//      .then(()=>(console.log("task wait for resopnse task 1")))
//      .catch(()=> (console.log("error"))));
//       console.log( task2()
//       .then(()=>(console.log("task wait for resopnse task 2")))
//       .catch(()=> (console.log("error"))));
//     console.log("All tasks completed!");
// }



async function runTasks() {
   try {
     const result1 = await task1();
     console.log(result1); // Prints "Task 1 done"
 
     const result2 = await task2();
     console.log(result2); // Prints "Task 2 done"
 
     console.log("All tasks completed!");
   } catch (error) {
    console.log("error is coming")
   }
}
runTasks();
