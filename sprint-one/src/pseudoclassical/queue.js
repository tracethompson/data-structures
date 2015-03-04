var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.end = -1;
  this.startInd = -1;
  this.storage = {};  
};

Queue.prototype.enqueue = function(value){
    this.end++;
    this.storage[this.end]=value;	
};

Queue.prototype.dequeue = function(){
  if (this.size()!=0)this.startInd++;
	  var result=this.storage[this.startInd];
	  delete this.storage[this.startInd];
	  return result;
};

Queue.prototype.size = function(){
  var size=this.end-this.startInd+1;
  if (size>0) size--;
  return size;
};



