// Class : A blueprint
// class Animal{

//     constructor(name, legCount, speaks){
//         this.name=name;
//         this.legCount=legCount;
//         this.speaks=speaks;
//     }

    // Speak function
//     speak(){
//         console.log("Hi there "+ this.speaks);
//     }
// }



// Objects : Instance of a class, actual implementation
// let dog=new Animal("dog", 4, "bhow bhow");
// let cat=new Animal("catu", 4, "meow");
// dog.speak();
// cat.speak();



// JSON
// JSON stringify : Converts an object ito a string

// const user={
//     name : "Vishal",
//     age : 22,
//     gender : "Male",
// }

// const final=JSON.stringify(user);
// console.log(final);



// Math 
console.log(Math.floor(2.3));
console.log(Math.ceil(2.3));
console.log(Math.max(2,3));
console.log(Math.min(2,3));
console.log(Math.pow(2,3));
console.log(Math.random()); 



// Objects (Iske functions nhi aye smjh)
const sampleObj={
    key1 : "value1",
    key2 : "value2",
    key3 : "value2"
};

function ojectMethods(obj){
    console.log("Original object", obj);
}