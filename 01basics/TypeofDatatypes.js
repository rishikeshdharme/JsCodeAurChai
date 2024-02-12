// there are two type data types in javascript
//1.PRIMIITIVE DATATYPES --

//Number , String ,Boolean, null, undefined,BigInt,Symbol;

let BigInt = 1234567890078954n;
console.log(BigInt);
console.log(typeof(BigInt));

let Id = Symbol('981');

let CId = Symbol('981');

console.log(Id==CId);









//2. NON PRIMITIVE ---

//Array, Object, function

const heroes = ["shaktiman","nagraj","JuniorG"];

let Myobj = {
    name:"rishi",
    age:21,
    clg:"sdbc"

}

let MyFunction = function(){
    console.log("Hello world");
}

console.log(typeof(heroes));

console.log(typeof(Myobj));

console.log(typeof(MyFunction));