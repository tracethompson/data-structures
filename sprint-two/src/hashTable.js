var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
/***
* 1st if (index is empty) - push nested array which makes the index an array
* else (index already has stored value) - push key value array into index array   
*
*                                         */

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]) {
    this._storage[i]=[[k,v]];
  }
  else{
    this._storage[i].push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]){
  	return null;
  }
	for (var j = 0; j < this._storage[i].length; j++){
		if ( k === this._storage[i][j][0] ){
			return this._storage[i][j][1];
		}
	}
};

HashTable.prototype.remove = function(k){
	var i=getIndexBelowMaxForKey(k,this._limit);
	this._storage[i]=null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
