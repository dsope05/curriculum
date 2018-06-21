/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function (cb) {
    for(let i = 0; i < this.length; i++) {
      cb(this[i], i, this) 
    }
  };
};

module.exports = {
  solution,
};
