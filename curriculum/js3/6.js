/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (a, b, keys = Object.keys(a), i = 0, obj = {})=>{
  if (!keys.length) return {};
  if (i >= keys.length) return obj;
  if (b(keys[i], a[keys[i]])) Object.assign(obj, {[keys[i]]: a[keys[i]]});
  return solution(a, b, keys, i + 1, obj);
};

module.exports = {
  solution,
};
