function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function returnSquareSum(a, b){
    let num1=square(a);
    let num2=square(b);
    return num1+num2;
}

function returnCubeSum(a, b){
    let num1=cube(a);
    let num2=cube(b);
    return num1+num2;
}

console.log(returnSquareSum(1,2));
console.log(returnCubeSum(1,2));
// This code is good but hmko square aur cube sum ke liye ek repetitive and similar code likhna pd rha hai which can be solved using callbacks




// Yha pr hmne ek generic fun bnaya jisme ek extra fun pass krdiya taki iske andr hi hm square ya cube nikal kr sum return kr ske
function returnAns(a, b, fn){
    let num1=fn(a);
    let num2=fn(b);
    return num1+num2;
}

// Jo nikalna hai wo yha pr call krdo, thus we stopped writing repetitive codes separately for finding squares and cubes
console.log(returnAns(2, 2, square));
console.log(returnAns(2, 3, cube));



// Promises
// Async js
// Async await already understood so no need to remake the notes