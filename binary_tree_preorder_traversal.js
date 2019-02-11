// Given a binary tree, return the preorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,2,3]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    // create an emtpy array to store the nodes that need to be processed
    var stack = [];

    // if root node is null then do not add to the stack
    if(root !== null){
        stack.push(root);
    }

    // storage array for the result
    var result = [];

    // iterate while stack contains nodes to evaluate
    while(stack.length > 0){
        // cache the node into a variable
        var node = stack.pop();

        // push the node value into result array
        result.push(node.val);

        // check for right child, if yes add to the stack.
        if(node.right !== null){
            stack.push(node.right);
        }

        // check for left child, if yes add to the stack.
        if(node.left !== null){
            stack.push(node.left);
        }
    }

    // return result
    return result;
};
