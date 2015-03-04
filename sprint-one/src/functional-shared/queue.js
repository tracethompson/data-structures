var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.end = -1;
  queue.startInd = -1;
  queue.storage = {};

  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.end++;
    this.storage[this.end]=value;	
};

queueMethods.dequeue = function(){
  if (queueMethods.size()!=0)this.startInd++;
	  var result=this.storage[this.startInd];
	  delete this.storage[this.startInd];
	  return result;
};

queueMethods.size = function(){
	//console.log("startindex",this.startInd);
	//console.log("endindex",this.end);
  var size=this.end-this.startInd+1;
  if (size>0) size--;
  return size;

};




