/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */
const solution = (a, obj = {}, answer = [], i = 0) => {
  if (i >= a.length) return answer;
  if (obj[a[i]]) {
    answer.push(a[i])
  } else {
    obj[a[i]] = 1; 
  }
  return solution(a, obj, answer, i + 1);
}

module.exports = {
  solution
}
