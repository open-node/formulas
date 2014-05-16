var _ = require('underscore');

module.exports = function(params) {
  var ops = {
      'x': function(a, b) { return a * b; },
      '+': function(a, b) { return a + b; },
      'p': function(a, b) { return Math.pow(b, a); },
      '-': function(a, b) { return b - a; }
    }
    , count = Math.max(+params.count || 9, 1) + 1
    , op = ops[params.operate] ? params.operate : 'x';
  return _.times(count , function(i) {
    return _.times(count, function(j) {
      if(op === '-') {
        j = j + i;
      }
      return [j, op, i, '=', ops[op](i, j)].join(' ');
    });
  });
};
