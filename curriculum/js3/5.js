/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a,b, keys = Object.keys(a), i = 0)=>{
  if (!keys.length) return '';
  if (i >= keys.length) return;
  b(keys[i], a[keys[i]]);

  return solution(a, b, keys, i + 1);
};
module.exports = {
  solution
}
