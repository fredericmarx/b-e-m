# B-E-M
**Typographically pleasing syntax for BEM**

## Basic education manual

In case you haven't heard about it, [BEM](https://en.bem.info/) is the CSS structuring methodology du jour according to [thought-leaders](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) [in](http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/) [front-end](http://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology–cms-19403) [architecture](https://css-tricks.com/bem-101/).

```
/* Block component */
.article {}

/* Element that depends upon the block */ 
.article—header {}

/* Modifier that changes the style of the block */
.article--new {} 

/* Modifier that changes the style of the element */
.article__header--large {}
```

BEM is straightforward, scalable and easy to parse for both humans and grep alike.

Unfortunately it has one major flaw, and until that hasn't been solved, we won't possibly be able to use this promising technique in production.

## Double underscores got me like

It just doesn't look that nice.

Everybody knows that the success of a coding convention depends hugely on how elegant the syntax looks. I mean, look at arrow functions. Why can't we have some of those in CSS?

Any self-respecting web-designer will tell you that writing code which doesn't conform with their personal aesthetic preferences is simply not an option.

## No mountain too high for overengineering

There are already fairly successful attempts at solving this problem with preprocessors like Sass. By abstracting those conventions into tidy mixins we will hopefully never have to see them again. Who reads compiled code anyways?

Still this doesn't save us from using these class names in our HTML. That's why I built this simple node module that you can easily add to your build chain.

## A dashing solution

To stop the eyesore caused by duplicate punctuation characters, the B-E-M convention replaces the double underscores and hyphens of BEM with a single em dash (—) or en dash (–) respectively.

Our example from above in B-E-M syntax would look as follows:

```
/* Block component */
.article {}

/* Element that depends upon the block */ 
.article—header {}

/* Modifier that changes the style of the block */
.article–new {} 

/* Modifier that changes the style of the element */
.article—header–large {}
```

Notice how the code looks much cleaner now.

## How to use

Simply install the package with `npm i --save-dev b-e-m`.

Then use the module in your project.

```
var bEM = require('b-e-m');

// .article__header--large {}
console.log(bEM('.article—header–large {}'));
```

## How to contribute
Please don't.
