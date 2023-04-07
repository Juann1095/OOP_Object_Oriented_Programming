//OOP Example 2
var purchase2={
    shoes:50, //this case shoes 50
    stateTax:1.2,
    totalprice:function(){
        var calculation=purchase2.shoes*purchase2.stateTax;
        console.log('Total price:',calculation)
    }
}
purchase2.totalprice(); //60