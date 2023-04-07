//Functional Programming
//Example of functional paradigm
var shoes=100;
var stateTax=1.2;

//Declare a Function
function totalprice(shoes,tax){
    return shoes*tax;
}

//Declare a variable to pay which invokes the total price function
var toPay = totalprice(shoes,stateTax);
console.log(toPay);