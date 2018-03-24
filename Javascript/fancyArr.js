let fancyArr = (arr) =>{
    var statment = " -> ";
    for(var i = 0; i < arr.length; i++){
      console.log(i + statment + arr[i]);
    }
  };
  
  fancyArr(["cat","rabbit","hat","ninja"]);