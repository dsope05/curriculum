/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */
const mostCommon = (counter, keys = Object.keys(counter), i = 0, max = keys[0]) => {
  if (i >= keys.length) return Number(max);
  max = counter[keys[i]] > counter[max] ? keys[i] : max;
  return mostCommon(counter, keys, i + 1, max)
};

const solution = (arr, i = 0, counter = {})=>{
  if (i >= arr.length) {
   return mostCommon(counter);
  }
  counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : counter[arr[i]] = 1;
  return solution(arr, i + 1, counter);
};

module.exports = {
  solution
}
