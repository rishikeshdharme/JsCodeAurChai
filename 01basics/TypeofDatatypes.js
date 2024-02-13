// there are two type data types in javascript
//1.PRIMIITIVE DATATYPES --

//Number , String ,Boolean, null, undefined,BigInt,Symbol;

let BigInt = 1234567890078954n;
//console.log(BigInt);
//console.log(typeof(BigInt));

let Id = Symbol('981');

let CId = Symbol('981');

//console.log(Id==CId);









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

//console.log(typeof(heroes));

//console.log(typeof(Myobj));

//console.log(typeof(MyFunction));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive datatype)   ,  Heap(Non Primitive datatype)

let name1 = "Rishi";
let name2 = name1;
 
name2="Rishikesh";
console.log(name2);
console.log(name1); //cannot change the value bcz in case of stack we get copy of value


let fetchdata =
{
    name:"rishu",
    email:"rishudharme@gmail.com",
    upi:"rishu.upi"
}

let fetchdata2 = fetchdata;
console.log(fetchdata2);

fetchdata2.upi="rishidhame.api";
console.log(fetchdata2.upi);
console.log(fetchdata.upi);    // this value are change bcz case of heap it give a refrence that is the value was change
