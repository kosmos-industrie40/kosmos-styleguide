
# Linting

For linting .scss, .css and .sass files, the stylelint (https://github.
com/stylelint/stylelint) package can be used.

You can install it using the following commands:
npm install --save-dev stylelint stylelint-config-standard

and to use it run:
npx stylelint "scss/*"

For the .js files, eslint can be used. Install it with the following command:
npm install eslint --save-dev

and run it with:
npx eslint dist/js/*