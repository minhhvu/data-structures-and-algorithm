/*
Binary Search Tree
2.1 Querying BST: searching, minimum, maximum, successor, predecessor
2.2 Insertion and Deletion
2.3 Randomly built BST
 */

/*
Resource:
Protypal style: https://initjs.org/implement-a-binary-search-tree-in-javascript-952a44ee7c26
Class-based style: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
Functional style
 */

/*
Implement the method and data structure
 */

//BST node:
function Node(val, left = undefined, right = undefined) {
  this.val = val;
  this.left = left;
  this.right= right;
}

//console.log(new Node(3))
// console.log(new Node(5,2))
// console.log(new Node(4,2,6))

//Binary Search Tree

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  //return the node that has the new value. It will return undefined when the BST has already the value
  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.val) return undefined;

      if (value < currentNode.val) {
        if (currentNode.left === null) {
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          break
        } else {
          currentNode = currentNode.right;
        }
      }
    }


  }
}
