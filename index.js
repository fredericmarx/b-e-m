'use strict';

var t;

function insertUnderscores(input) {
  return input.replace('—', '__');
}

function insertDashes(input) {
  return input.replace('–', '--');
}

module.exports = function(input) {
  return insertUnderscores(insertDashes(input));
}
