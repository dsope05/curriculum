/*
 * findNum - Takes in the root node of a tree and
 *     a number, return a node with the same value
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.children = [b,c]
 *    solution(a, 3);
 * output: b
 * @param {object} node
 * @returns {object}
*/

// Hint: BFS or DFS from the teaching doc
const solution = (a, b, i = 0, children = [])=>{
  if (!a) return null;
  if (a.children) children = a.children.concat(children);
  if (a.v === b) return a;

  return solution(children.pop(), b, i + 1, children);
};

module.exports = {
  solution,
};


