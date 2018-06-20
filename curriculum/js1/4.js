/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, i = 0, str = '') => {
  if (i >= a) return str;
  str += b;
  return solution (a, b, i + 1, str)
};

module.exports = {
  solution,
};
