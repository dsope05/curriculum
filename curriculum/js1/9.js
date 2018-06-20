/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, i = a + 1) => {
  if (!(i%7)) return i
  return solution(a, i + 1);
};

module.exports = {
  solution,
};
