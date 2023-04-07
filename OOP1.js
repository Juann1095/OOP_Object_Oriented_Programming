//OOP Paradigm
var purchase1 = {
    shoes:100,
    stateTax:1.2,
    totalprice:function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:',calculation);
    }
}
purchase1.totalprice(); //120