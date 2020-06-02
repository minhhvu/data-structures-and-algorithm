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

//Insert new value to the Binary Search Tree. It will return the root of the new tree
const insertIntoBST = function(root,val) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left =insertIntoBST(root.left, val);

  if (val > root.val) root.right = insertIntoBST(root.right, val)

  return root;
};

//Check whether the tree is BTS or not
const isValidBST = (n, _min = -Infinity, _max = Infinity) => {
  return (
    !n
      ? true
      : _min < n.val && n.val < _max
      && isValidBST(n.left, _min, n.val)
      && isValidBST(n.right, n.val, _max)
  )
}