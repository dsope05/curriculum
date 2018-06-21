/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj, i = 0, values = Object.values(obj), max = values[0])=>{
  if (i >= values.length) return max;
  max = values[i] > max ? values[i] : max;
  return solution(obj, i + 1, values, max);
}

module.exports = {
  solution
}

