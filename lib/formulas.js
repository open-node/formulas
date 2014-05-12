var _ = require('underscore');

module.exports = function(params) {
  return _.times(Math.max(+params.count || 9, 1) , function(i) {
    var i1 = i + 1;
    return _.times(i1, function(j) {
      var j1 = j + 1;
      return j1 + " x " + i1 + " = " + (i1 * j1);
    });
  });
};
