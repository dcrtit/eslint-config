# eslint-config
Eslint configuration used across our projects.

## Installation
First, install it via npm:

```
npm i @dcrtit/eslint-config --save-dev
```

Then extend your own `ESLint`-configuration `.eslintrc.js` with installed shared config such as:

```
module.exports = {
  extends: [
    ...other configs, if you want
    '@dcrtit/eslint-config'
  ],
  rules: [
    ...
  ]
}
```

And you are good to go.

## Credits

Thanks to [Paul Zerkel](https://github.com/paulzerkel) for a good starter template to create a shared linter configuration