let bDay = (num) =>{
    var msg1 = " days until my birthday. Such a long time... :(";
    var msg2 = " days until my birthday, woot woot!";
    var msg3 = " DAYS UNTIL MY BIRTHDAY!!!";
    var msg4 = "Its my birthday party time!";
    
    while(num > 0){
        if(num >5){
            console.log(num + msg1);
            num--;
        }else if(num <= 5 && num !== 0){
            console.log(num + msg2);
            num--;
        }else{
            console.log(msg4);
            return;
        }
    }

};