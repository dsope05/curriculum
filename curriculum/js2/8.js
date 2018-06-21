/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      console.log('thisi', cb(this[i]))
      newArr.push(cb(this[i]));
    }
    return newArr;
  };
};

module.exports = {
  solution,
};
