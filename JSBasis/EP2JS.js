function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 +32;
    var message = cTemp + "\xb0C is " + cToFahr +"\xb0F";
    console.log(message);
}
cToF(30);
function FToc(Fahranheit){
    var FTemp = Fahranheit;
    var FToCelsius = (FTemp-32) * 5 / 9;
    var message = FTemp + "\xb0F is" +FToCelsius + "\xb0C";
    console.log(message);
}
FToc(86);
 
var person = {
    firstname : "GM",
    lestname : "1",
    eyescoler : "Balck",
    fullname: function(){
        return this.firstname +""+this.lestname
    }
};
console.log(person.fullname());

function DisplayDate(){
    document.getElementById('demo').innerHTML = Date();
}
var x = "jo\" \"save"
console.log(x);
//Array Literal
var myArr = ["gm", "bm", "toyota"];
//Array Constructor
var myArr2 = new Array("gm", "bm", "toyota")
console.log(myArr[1]);
console.log(myArr2[0]);

var fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit[0] = "Kiwi";
delete fruit[0];
fruit.splice(2, 0, "Lemon");
document.getElementById("demo").innerHTML = fruit.join(" - ");

var arr1 = ["value1", "value2"]
var arr2 = ["value3", "value4"]
var arr3 = ["value5", "value6"]
var concatArr = arr1.concat(arr2, arr3);
var myArr = arr1.slice(1);

// 7 data type //
//primative//
var myNum = 10; //Number
var myString = "ox"; //String
var myTrue =  true; // boolean
var myNull = null; // Null
var myUndefined; //Undefined
//object//
var myObject = {}; // Object
 
Math.PI;
Math.round(4.4);
Math.pow(5,5);
Math.sqrt(64);
Math.abs(-4);
Math.ceil(4.5);
Math.floor(4.6);
Math.random();

var time = 18 ;
if(time < 12){
    console.log("good morning");

}
else if(time < 18){
    console.log("good afternoon");
}
else {
    console.log("good evening");
}

switch(new Date().getDay()){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
  
    default:
}
var myphone = "oppo"
switch(myphone){
    case "iphone":
        console.log("30000");
        break;
    case "sumsung":
        console.log("25000");
        break;
    default:
        console.log("we don't have");
}

//for loop//
for(var i = 0; i<=5; i++){
    console.log(i);
}

var cars = ["bm", "ford", "honda", "audi"];

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
//for in loop//
 var person ={
    firstname: "jo",
    lastname: "save",
    age: 21
 }
 for (var x in person){
    console.log(person[x]);
 }
 //for of loop //
 var cars =["bm", "ford", "honda", "audi"];

 for (var a of cars){
    console.log(a);
 }
 var myString = "javascript"
 var y;
 for(y of myString){
    console.log(y);
 }

 var mymo = "bm";

function myfunc(){
    myno = "on"
}
myfunc();
console.log(myno);
//hoisting//

x = 5;

console.log(x);

var x; //declaration
var y = 10; //initialzation

//strict//
"use strict";
// ES6 let & const
var x = 5; 
var x = 6;

console.log(x);
// let y = 6;
 y = 7;
 console.log(y);

 const z =9;
 console.log(z);

 //let const lock scoop
 //template
 //` alt96
 console.log(``)
// ${}
//Function Expression

var hello = function(){
    return "hello world";
}
//Function Declaration
function hello() {

}
//arrow function
var hello = () => "hello world";

console.log(hello());

//arrow function parameter
var hello = (value) => "hello world" + value;

console.log(hello());

// ES6 class
class myclass {
    constructor(name){
        this.myname = name;
    }
    fullname(greeting){
        return greeting + "pp" +this.myname;
    }
    static hello(){
        return "hello?";
    }
}
var person = new myclass("mon");

console.log(person);
console.log(person.fullname("hello?"));
console.log(myclass.hello());

//class inherritance
//style
var firstName = "mon"; // camelcase
