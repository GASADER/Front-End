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
fruit.push("Kiwi");
document.getElementById("demo").innerHTML = fruit.join(" - ");