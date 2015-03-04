var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  this.sizeOf = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
	this.storage[this.sizeOf] = value;
	this.sizeOf++;
};

Stack.prototype.pop = function(){
  this.sizeOf && this.sizeOf--;
	return this.storage[this.sizeOf];
};

Stack.prototype.size = function(){
	return this.sizeOf;
};


