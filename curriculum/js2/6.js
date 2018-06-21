/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a, i = 0, newArr = []) => {
  if (i >= a.length) return newArr;
  a[i] > 5 ? newArr.push(a[i]) : null;
  return solution(a, i + 1, newArr);
};

module.exports = {
  solution,
};
