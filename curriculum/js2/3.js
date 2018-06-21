/**
 * Given an array, return the same array
 *   where all elements that are not prime are changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const isPrime = (a, i = 2) => {
  if (a === 1) return false;
  if (i >= a) return true;
  if (!(a%i)) {
    return false;
  }
  return isPrime(a, i + 1);
};
const solution = (a, i = 0) => {
  if (i >= a.length) return a;
  a[i] = isPrime(a[i]) ? a[i] : 1;
  return solution(a, i + 1);
};

module.exports = {
  solution,
};
