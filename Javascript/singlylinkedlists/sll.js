function sll(){
  this.head = null;
}

function node(val){
  this.val = val;
  this.next = null;
}



sll.prototype.isEmpty = function(){
  return this.head === null;
};

sll.prototype.size = function (){
  var count = 0;
  var current = this.head;
  
  while(current !== null){
    count++;
    current = current.next;
  }
  return count;
};

sll.prototype.addFront = function(val) {
  var newnode = new node(val);
  newnode.next = this.head;
  this.head = newnode;
  
};

sll.prototype.append = function(val){
  var newnode = new node(val);
  var current =this.head;
  if(this.head === null){
    this.head = newnode;
    return;
  }
  while(current.next){
    current = current.next;
  }
  current.next = newnode;
};

sll.prototype.contains = function(val){
  var current = this.head;
  while(current !== null){
    if(current.val === val){
      return true;
    }
    current =current.next;
  }
  return false;
};

sll.prototype.remove = function(val){
  if(!this.contains(val)) {
    return;
  }
  
  if(this.head.val === val){
    this.head = this.head.next;
    return;
  }
  var previous = null;
  var current = this.head;
  
  while(current.val !== val){
    previous = current;
    current = current.next;
  }
  
  pevious.next = current.next;
  
};



sll.prototype.print = function(){
  var current = this.head;
  if(this.head === null){
    console.log("empty sll");
  }else{
    while(current){
      console.log(current.val);
      current = current.next;
    }
  }
};

var newsll = new sll();

newsll.append(14);
newsll.append(2);
newsll.append(112);

newsll.print();