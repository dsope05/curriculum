/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a, i = 1, curMax = a[0] || null) => {
  if (i >= a.length) return curMax;
  curMax = a[i] > curMax ? a[i] : curMax;
  return solution(a, i + 1, curMax);
};

module.exports = {
  solution,
};
