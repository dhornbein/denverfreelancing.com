# denverfreelancing.com
It's a website for denverfreelancing.com

# Getting started

We are using [Jekyll](https://jekyllrb.com) to build a static site and hosting
that site on github pages.

For local development you'll need to pull the repository, install Jekyll ([docs](https://jekyllrb.com/docs/))
then push changes to a branch and make a pull request to master for those changes
to show up live online.

## Installing Jekyll

1. Install a full [Ruby development environment](/docs/installation/)
2. Install Jekyll and [bundler](/docs/ruby-101/#bundler) [gems](/docs/ruby-101/#gems)
```
gem install jekyll bundler
```

## Running this site

1. Perform a `git clone` of the repository.
2. navigate to the repository directory in terminal and run `jekyll serve` to start
rendering the site.
3. In your browser navigate to the URL indicated by the program typically: `Server address: http://127.0.0.1:4000/`

## Editing

Once the site is running on your local environment you're ready to edit. Please
look to the Jekyll documentation to better understand how the file structure works

### Editing CSS

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

## Adding Events

Events are markdown files in the events collection folder `/_events`.

**Creating a new event:**

- Duplicate existing event.
- Change the name to reflect the event's date in the format `YYYY-MM-DD-event.md`
- In the file make sure to adjust the "front header" between the `---` at the top.

```
title: "Build Great Freelance Relationships: A Panel Discussion Among Freelancers and Clients"
date: 2019-05-29
time:
 start: 6:30 pm
 end: 8:30 pm
location: Galvanize Golden Triangle 1062 Delaware St. Denver CO 80204
```
*this is the minimum data required to display an event*

- If the RSVP links have been created add them to between the `---` lines

```
rsvp:
  facebook: https://www.facebook.com/events/828718720825476/
  meetup: https://www.meetup.com/Colorado-Co-ops-Study-Circle/events/260527810/
```
*It is very important to use all lowercase platform name with no spaces or dashes*

You can add the event description under as the body of the post in markdown format.

**Updated a past event:**

Once an event has passed simply add a link to the follow up email (or blog post)
between the `---` lines.

```
followup: https://mailchi.mp/3ed9571c9d86/better-together-jan-22nd-event-and-a-vision-for-362255
```
