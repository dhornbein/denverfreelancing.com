# denverfreelancing.com
It's a website for denverfreelancing.com

# Getting started

**Do not edit `.css` files directly**

Sass files should be compiled into css before pushing changes.

To watch for sass changes and compile to css, try this from root project folder:

```
sass --watch src/scss/:css
```

This will watch the `src/scss` files for changes and update the `css/` folder
when changes are detected.

Only `src/scss/style.scss` will be compiled, so use `@import` in that file to
pull in partials (denoted by a leading underscore). Create new partials in the
`src/scss` folder by adding a leading underscore.

Create `_resources.scss` in `src/scss/` then add `@import "resources";` near the
top of `src/scss/style.scss`.
