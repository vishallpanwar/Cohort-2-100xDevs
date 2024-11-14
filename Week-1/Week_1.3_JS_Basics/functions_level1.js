// Length
// const str="Vishal Panwar"; 
// function getLength(str){
//     console.log(str.length);
// }
// getLength(str); 



// Finding index
// function getIndex(str, target){
//     console.log("Index : ", str, str.indexOf(target));
// }
// getIndex("Vishal Panwar Ji", "Ji");



// Slicing
// Slice aur substr me diff hai kyuki slice range ke bich ke elements deta hai and substr us range ke baad ke
// eg Slice : ishal pa  ||  substr : ishal Pan
// let s="Vishal Panwar";
// ans=s.slice(1, 9);
// console.log(ans);



// Replacing
// let s="Vishal Panwar";
// let ans=s.replace("Panwar", "King");
// console.log(ans);



// Split : String ke words ko indivisually array me rkh kr dedega
// let s="My name is Vishal Panwar";
// let ans=s.split(" ");
// console.log(ans);



// parseInt : 
console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("3.14"));



// Push : Array elements at end  ||  Unshift : Start me dalne ke liye
let arr=[1,2,3];
arr.push(4);
arr.push(5);
console.log(arr);



// Pop : elements from array || Shift pops from the front
arr.pop(5);
console.log(arr);



// Concat
let arr1=[1,2,3];
let arr2=[0,0,0];
arr.concat(arr2);
let newArr=arr1.concat(arr2);
console.log(newArr);
