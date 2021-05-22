# tokens2css

tokens2css transform your Design Tokens into CSS custom properties.

## Usage

Add [**tokens2css**](https://github.com/EstebanPaez/tokens2css) in your project:

```shell
npm install tokens2css
```

### Using cli

Your tokens must be into a CommonJs module or JSON:

```js
//tokens.js
module.exports = {
  colors: {
    koromiko: "#fcb64d",
  }
```

Now run:

```shell
tokens2css ./tokens.js
```

Your output must be:

```css
:root {
  --colors-koromiko: #fcb64d;
}
```

You can customize the output filename and wrapper element using:

```shell
tokens2css ./tokens.js --output styles/tokens.css --wrapper "#app"
```

| Param   |       Description       |       Default |
| :------ | :---------------------: | ------------: |
| output  | The name of output file | Same as input |
| wrapper |    The CSS selector     |         :root |

### Using NodeJs

tokens2css function receive 2 params your object, and the selector of wrapper

```js
const tokens2css = require("tokens2css");

const myTokens = {
  colors: {
    koromiko: "#fcb64d",
  },
};

const myCssTokens = tokens2css(myTokens, "#app"); // '--colors-koromiko: #fcb64d'
```

## Alternatives

If you use a preprocessor like Sass or Stylus use [token2css](https://github.com/erictooth/token2css) by [erictooth](https://github.com/erictooth/).
