let payMe = (days,pay) =>{
    var amount = pay;
    var sum = 0;
    for(var i = days; i>= 0; i--){
        sum += amount;
        amount = amount * 2;
    }
    console.log("after " + days + " starting at $" + pay + " you would eanrn $" + sum.toFixed(2));
};