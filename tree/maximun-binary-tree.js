//source https://leetcode.com/problems/maximum-binary-tree/

//Level: medium
//Topic: Tree

function getIndexOfMax(nums) {
  let output = 0;
  for (let i=1; i< nums.length; i++){
    output = nums[output] < nums[i] ? i : output
  }
  //nums.forEach((ele,i) => {output = nums[output] < nums[i] ? i : output})
  return output;
}

function getRoot(nums){
  if (nums.length <=0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const index = getIndexOfMax(nums);
  // console.log(nums, index)

  const root = new TreeNode(nums[index]);
  root.left = getRoot(nums.slice(0, index));
  // console.log(root)
  root.right = getRoot(nums.slice(index+1));

  return root;
}

var constructMaximumBinaryTree = function(nums) {

  const root = getRoot(nums);
  //console.log('x',root)

  return root;
};