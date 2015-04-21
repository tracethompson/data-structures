var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Tree(value);
	child.value = value;
	this.children.push(child);
	console.log(this);
};

treeMethods.contains = function(target){
	var result=false;

	var childFinder = function(node){	
		if(node.value === target){
			return result = true;
		}
		for(var i = 0; i < node.children.length; i++){
			childFinder(node.children[i]);
		}
	}
	childFinder(this);
	return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
