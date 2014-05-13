var _ = require('underscore');

module.exports = function(params) {
  var ops = {
      'x': function(a, b) { return a * b; },
      '+': function(a, b) { return a + b; },
      'pow': function(a, b) { return Math.pow(b, a); }
    }
    , op = ops[params.operate] ? params.operate : 'x';
  return _.times(Math.max(+params.count || 9, 1) , function(i) {
    var i1 = i + 1;
    return _.times(i1, function(j) {
      var j1 = j + 1;
      return [j1, op, i1, '=', ops[op](i1, j1)].join(' ');
    });
  });
};
