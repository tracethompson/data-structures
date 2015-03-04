



var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.sizeOf = 0;
  stack.storage = {};


  _.extend(stack, stackMethods);
  return stack;
};



var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.sizeOf] = value;
	this.sizeOf++;
};

stackMethods.pop = function(){
  this.sizeOf && this.sizeOf--;
	return this.storage[this.sizeOf];
};

stackMethods.size = function(){
	return this.sizeOf;
};





