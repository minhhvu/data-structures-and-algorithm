//Source: https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/*Given an n-ary tree, return the preorder traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal,
each group of children is separated by the null value (See examples).
*/

/**
 * @param {Node} root
 * @return {number[]}
 */

function travelToAllChildren(node){
  // console.log(node)
  if (!node) return [];

  const output = [];
  node.children.forEach(ele => {
    output.push(ele.val);
    output.push(...travelToAllChildren(ele));
  });

  return output;
}

var preorder = function(root) {
  if (!root) return [];
  const output = [root.val];
  output.push(...travelToAllChildren(root))
  return output;
};