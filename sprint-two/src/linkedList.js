 irvlrevar LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

/*********
      - ADD TO TAIL -
initialize new nodes , settting values and dependencies 

if there isn't a head - the newly created node is the head & the tail  
else - assign the tail to the next node
                      **********/

  list.addToTail = function(value){
    var newNode = Object.create(Node);
    newNode.value = value;
    newNode.next=null;

    if(list.head === null){
      list.head = newNode;        // because list.tail and list.head are referencing the same node
      list.tail = newNode;        // all we have to do is assign list.tail.next and redefine tail 
    }
    else{
      list.tail.next = newNode;  // for visual sake -- lets say list.Tale is [4][tail] and newNode is [5]
      list.tail = newNode;       // we're saying [4][tail]---->[5]
    }                            // now pass the tail to [5] | [4][x]--->[5][tail] 
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
