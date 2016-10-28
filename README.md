# yes-no-format

Return an expression as 'yes' or 'no'. Truthy expressions return 'yes', and falsy expressions return 'no'.

## Installation

Run `npm install yes-no-format`. 

Save it to your project's package.json's dependencies by including the `--save` flag. 

## Example usage

```
const yesNoFormat = require('yes-no-format');
console.log(`Is Josh cool? The answer, of course, is ${yesNoFormat(false)}.`);
console.log(`Don't you love metal? Why, ${yesNoFormat(1)}, ${yesNoFormat('maiden rules!')} I do!`);
```

## Test

Run `npm test` from the package's root directory.
