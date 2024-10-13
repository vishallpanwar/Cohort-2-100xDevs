// Ek function ya piece of code hai jo ki as an arguement pass kraya jata hai kisi aur function me
// Why callbacks? : Js ek ke baad ek execute hone wli lang hai, to koi kaam hold pr na jye and hum tb
// tak dusre kaam ko execute krwa ske, taki kam time me zyada kaam ho pye. Also, code reusability promote krta hai


// ek add naaam ka fun bnaya
// function add(a, b){
//     console.log(a+b);
// }

// add(10, 20);


// Ab ek aur fun bnaya 
function sayHello(){
    console.log("Hello");
}

// Ab hm add wle fun me ek aur arguement add krenge (callback), jiski jgh hm dusra fun call krenge
function add(a, b, callback){
    console.log(a+b);
    callback();  // Jo fun call hoga wo execute hoga
}

add(5, 10, sayHello);