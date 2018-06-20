/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, i = 0, str = '') => {
  if (i >= a) return str;
  str += 'hello';
  return solution(a, i + 1, str);
};

module.exports = {
  solution,
};
