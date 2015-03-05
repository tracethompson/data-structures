
// pseudoclassical instantiation
var Graph = function(){
	this.nodes=[];
	this.edgesContainer=[];
};

Graph.prototype.addNode = function(node){
	if (!_.contains(this.nodes, node))
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
	var index= _.indexOf(this.nodes,node);
	if (index>-1){ // found a match
		this.nodes = this.nodes.slice(0,index).concat(this.nodes.slice(index+1));
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
		var result = false;
	 	for(var i = 0; i < this.edgesContainer.length; i++){
		 	if(this.edgesContainer[i][fromNode] === toNode){
		 		result = true;
		 	} 
	 	}
	return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var map={};
	map[fromNode]=toNode;
	var map2={};
	map2[toNode]=fromNode;
	this.edgesContainer.push(map);
	this.edgesContainer.push(map2);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, cb);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




