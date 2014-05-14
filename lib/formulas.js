var _ = require('underscore');

module.exports = function(params) {
  var ops = {
      'x': function(a, b) { return a * b; },
      '+': function(a, b) { return a + b; },
      'p': function(a, b) { return Math.pow(b, a); }
    }
    , count = Math.max(+params.count || 9, 1)
    , op = ops[params.operate] ? params.operate : 'x';
  return _.times(count , function(i) {
    var i1 = i + 1;
    return _.times(count, function(j) {
      if(j >= i1) { return ""; }
      var j1 = j + 1;
      return [j1, op, i1, '=', ops[op](i1, j1)].join(' ');
    });
  });
};
