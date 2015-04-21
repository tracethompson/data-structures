var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


/****************** 
    INSERT  ----
if the index is empty - 
set the index array (outer array) and 
push the nested key value array (inner array)

[   [kv]   ] 
^     ^---------< value array
^index array 


else (index already has stored value) - 
push value array into index array
                **************/

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]) {
    this._storage[i]=[[k,v]]; 
  }
  else{
    this._storage[i].push([k,v]);
  }
};

/******************
    RETRIEVE ----   
if the index is empty - 
return null

else -
1) iterate through the index array
2) for each index array check to see if its first value is the key
3) if so then return the keys value pair (which is the next value over)
                  **************/

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
