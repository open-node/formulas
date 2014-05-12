#! /usr/bin/env node

var params    = require('commander')
  , _         = require('underscore')
  , formulas  = require('../lib/formulas');

params
  .version('0.0.1')
  .option('-c, --count [type]',       '输入一个数字，用来生成乘法表的最大范围，默认为 9')
  .parse(process.argv)

console.log(_.map(formulas(params), function(line) { return line.join('\t'); }).join('\n'));

