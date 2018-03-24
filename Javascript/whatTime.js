let datTime=(hr, min, per)=>{
  var msg1 = "its almost ";
  var msg2 = "its just after ";
  var msg3 = "its ";
  var msg4 = " in the morning";
  var msg5 = " in the evening";
  var statement = "";
  
  if(min > 30 && min !== 0){
    statement += msg1;
    statement += hr;
  }else if(min < 30 && min !== 0){
    statement += msg2;
    statement += hr;
  }else{
    statement += msg3;
    statement += hr;
  }
  
  if(per == "AM"){
    statement += msg4;
  }else{
    statement += msg5;
  }
  
  console.log(statement);
  
};


datTime(8, 20, "PM");