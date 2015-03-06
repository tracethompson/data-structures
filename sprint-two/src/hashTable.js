var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp=[];
  temp.push(k);
  temp.push(v);
  //console.log(temp);
  if (!this._storage[i]) this._storage[i]=[k,v];
  else
  this._storage[i].push([k,v]);
  //console.log(this._storage[i]);
  
	

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]){
  	return null;
  }

  	if (this._storage[i].length===2){
  		console.log("here", this._storage[i][1]);
  		return this._storage[i][1];
  	}
  	else {
  		if (k=== this._storage[i][0]){
  			return this._storage[i][1];
  		}
  		else{
  			for (var j=2; j<this._storage[i].length; j++){
  				if (k===this._storage[i][j][0]){
  					return this._storage[i][j][1];
  				}
  			}
  			return null;
  		}
  		
  	}
  //return this._storage[i];

};

HashTable.prototype.remove = function(k){
	var i=getIndexBelowMaxForKey(k,this._limit);
	this._storage[i]=null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
