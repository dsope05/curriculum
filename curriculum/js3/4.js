/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 *
 *
 *  {
 *   -1: 1,
 *   -3: 1,
 *   -4: 1
 *  }
 *  -2 + 1 = -1
 *  -2 + 3 = 1
 *  -3 + 4 = 1
 */

const helper = (a, obj = {}, i = 0) => {
  if (i >= a.length) return obj;
  obj[a[i]] = obj[a[i]] ? obj[a[i]] + 1 : 1;
  return helper(a, obj, i + 1);
}
const solution1 = (a, b, i = 0, obj = helper(a))=>{
  if (!a.length) return false;
  if (i >= a.length) return false;
  if (obj[b - a[i]] && a[i] !== (b - a[i])) return true;
  if (obj[b - a[i]] && a[i] === (b - a[i]) && obj[a[i]] > 1) return true;
  return solution(a, b, i + 1, obj);
};

const solution = (a, b, i = 0, tracker = {}) => {
  if (i >= a.length) return false;
  if (tracker[a[i]]) return true;
  else tracker[b - a[i]] = true;
  return solution(a,b, i + 1, tracker);
};

module.exports = {
  solution,
};
