var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Object.create(Tree);
	child.value = value;
	this.children.push(child);
};

treeMethods.contains = function(target){
	if(this.children !== null){
		for(var i = 0; i < this.children.length; i++){
			if(this.children[i].value === target){
				return true;
			} else {
				if(this.children[i].children){
					contains(this.children[i].children);
				}
			}
		return false;	
		}
	}
	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
