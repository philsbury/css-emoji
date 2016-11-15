# CSS emoji

Having looked around for CSS emoji integration I could only find ones that were image based. So I've but together a version using Unicode in a font awesome inspired way:

```html
<i class="emoji emoji-grinning-face" aria-hidden="true"></i>
```

## Installation:
With bower:

```
$ bower install css-emoji --save
```

Or just download the zip and include the CSS or SASS in your project.

Reference can be found in example/example.html (better docs to follow!).

__Note:__ While all V3 emojis are included, some may not be supported by a browser. They have been included for completeness in the hope vendors honour them further down the line.