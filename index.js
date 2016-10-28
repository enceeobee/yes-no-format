const YES = 'yes';
const NO = 'no';

function yesNoFormat(expression) {
  return Boolean(expression) ? YES : NO;
}

module.exports = yesNoFormat;
