var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item]=true;
};

setPrototype.contains = function(item){
	var result=false;
	if (this._storage[item] === true){
		result=true;
	}
	return result;
};

setPrototype.remove = function(item){
	if(this._storage[item]){
		delete this._storage[item];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
