function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 +32;
    var message = cTemp + "\xb0c is " + cToFahr +"\xb0F";
    console.log(message);
}
cToF(30);