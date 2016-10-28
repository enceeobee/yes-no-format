const assert = require('assert');
const yesNoFormat = require('../index');

const YES = 'yes';
const NO = 'no';

(function main() {
  // Truthy tests
  assert(yesNoFormat(true) === YES);
  assert(yesNoFormat('true') === YES);
  assert(yesNoFormat('false') === YES);
  assert(yesNoFormat('Su Lin') === YES);
  assert(yesNoFormat(1) === YES);
  assert(yesNoFormat(-1) === YES);
  assert(yesNoFormat([]) === YES);
  assert(yesNoFormat({}) === YES);
  assert(yesNoFormat(function test() {}) === YES);

  // Falsy tests
  assert(yesNoFormat() === NO);
  assert(yesNoFormat('') === NO);
  assert(yesNoFormat(0) === NO);
  assert(yesNoFormat(null) === NO);
  assert(yesNoFormat(undefined) === NO);
  assert(yesNoFormat(false) === NO);
  assert(yesNoFormat(NaN) === NO);
}());
