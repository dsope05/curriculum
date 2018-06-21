/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, i = 0, count = 0) => {
  if (i >= a.length) return count;
  a[i] === b ? count++ : null;
  return solution(a, b, i + 1, count);
};

module.exports = {
  solution,
};
