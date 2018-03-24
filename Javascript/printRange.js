let printRange = (start, end, skip)=>{
  if(start > end && skip !== isNaN){
    for(var i = start; i > end; i= - skip){
      console.log(i);
    }
  }else if(start < end && skip !== isNaN){
    for(var n = start; n < end; n+= skip){
      console.log(n);
    }
    }else{
      for(var x = start; start < end; x++){
        console.log(x);
      }
      }
  };
