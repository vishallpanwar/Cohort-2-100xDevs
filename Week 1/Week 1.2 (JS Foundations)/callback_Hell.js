// Baar baar callback fun execute krte hai to code readibility mushkil hojati hai due 
// to too many functions called inside another functions, usko hm callback hell bolte hai

// function f1(){
//     setTimeout(() => {
//         console.log("Task 1 done");
//     }, 3000);
// }

// function f2(){
//     setTimeout(() => {
//         console.log("Task 2 done");
//     }, 4000);
// }

// function f3(){
//     setTimeout(() => {
//         console.log("Task 3 done");  
//     }, 2500);
// }

// function f4(){
//     setTimeout(() => {
//         console.log("Task 4 done");
//     }, 5000);
// }

// console.log("All task done");

// // Phle all tsk done btyega fir timeout ke hisaab se execute hoga
// f1();
// f2();
// f3();
// f4();











// Ab sbke andr callback initiate krwado
function f1(callback){
    setTimeout(() => {
        console.log("Task 1 done");
        callback();
    }, 3000);
}

function f2(callback){
    setTimeout(() => {
        console.log("Task 2 done");
        callback();
    }, 4000);
}

function f3(callback){
    setTimeout(() => {
        console.log("Task 3 done"); 
        callback(); 
    }, 2500);
}

function f4(callback){
    setTimeout(() => {
        console.log("Task 4 done");
        callback();
    }, 5000);
}

//And ab hm chahte hai ki saare tasks ek ke baad ek execute ho to hm fun 1 ke andr f2, fi uske andr f3....krenge
f1(()=>{
    f2(()=>{
        f3(()=>{
            f4(()=>{
                console.log("All tasks done");
                
            })
        })
    })
});

// But now we can see that isko dekh kr code bht complex ho rha hai and complex programs ke liye readibility mushkil hojyegi