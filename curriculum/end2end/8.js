const db = {
  data: [],
  add: function(message) {
    this.data.push(message);
  },
  messages: function() {
    return this.data;
  }
};

module.exports = db;
