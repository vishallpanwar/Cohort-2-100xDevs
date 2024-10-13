// Ques 1 : Program to write all even numbers in array

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0;i<10;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
        
    }
}


// Ques 2 ; Biggest number in array
let maxi=arr[0];

for(let i=0;i<10;i++){
    if(arr[i]>maxi){
        maxi=arr[i];
    }
}

console.log("Maximum number is : ", maxi);


// Print first names of person whose gender is male
const person=["Vishal", "Ayushi", "Vishu", "Abhay", "Shruti"];
const gender=["male", "female", "male", "male", "female"];

for(let i=0;i<person.length;i++){
    if(gender[i]=="male"){
        console.log(person[i]);
    }
}

// Isko optimize kiya ja skta hai by using objects. By creating array of objects jisme ek h array ke andr multiple 
// objects prestn honge which tells the information about the different users under same array.

const allUsers=[{
    name : "Vishal",
    age: 22,
    gender : "male"
}, {
    name : "Ayushi",
    age : 23,
    gender : "female"
}, {
    name : "Abhay",
    age : 22,
    gender : "male"
}
]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i].gender=="male"){
        console.log(allUsers[i].name);
    }
}