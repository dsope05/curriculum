/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const getFactors = (a, i = 0, factors = []) => {
  if (i > a) return factors;
  if (!(a%i)) factors.push(i);
  return getFactors(a, i + 1, factors);
};

const solution = (a, b) => {
  const aFactors = getFactors(a);
  const bFactors = getFactors(b);
  const longFactors = aFactors.length > bFactors.length ? aFactors : bFactors;
  const shortFactors = longFactors === aFactors ? bFactors : aFactors;
  const solutionArr = longFactors.map(factor => {
    return shortFactors.includes(factor) ? factor : null;
  });
  return Math.max(...solutionArr);
};


module.exports = {
  solution,
};
