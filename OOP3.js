//OOP 3 : Example 3 using this
//To refer to the object itself without specifying the object's name.
var purchase1 = {
    shoes: 100,
    stateTax:1.2,
    totalprice:function(){
        var calculation = this.shoes * this.stateTax;
        console.log(calculation);
    }
}
purchase1.totalprice();//120

//Purchase2
var purchase2={
    shoes:50,
    stateTax:1.2,
    totalprice:function(){
        var calculation = this.shoes*this.stateTax;
        console.log('Total Price:',calculation);
    }
}
purchase2.totalprice(); //60