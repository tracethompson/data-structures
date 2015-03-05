var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Object.create(Node); // if there is not a head ---- the new tail becomes the head
    newNode.value = value; // allows list.tail to keep reference of the node
    newNode.next=null;

    if(list.head === null){
      list.head = newNode;
      list.tail = newNode; //allows list.head to keep reference of the node 
    }
    else{
      list.tail.next = newNode;
      list.tail=newNode;
    }
  };

  list.removeHead = function(){
    if(list.head === null){
      return null;
    } 
    else{
        var result = list.head.value;
        list.head = list.head.next;
        return result;
    }
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null){
      if(currentNode.value === target){
        return true;
      }
      else{
      currentNode = currentNode.next
      }
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
