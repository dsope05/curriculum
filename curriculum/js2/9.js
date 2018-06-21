/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function(cb, init) {
      for (let i = 0; i < this.length; i++) {
        init = cb(init, this[i], i, this);
      }
    return init
  };
};

module.exports = {
  solution,
};
