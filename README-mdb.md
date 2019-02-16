
# README-mdb.md

References and notes about add Material Design Bootstrap styles to tghe existing denverfreelancing.com site.

## References

- MDB site: https://mdbootstrap.com/
- Coding standards site: http://codeguide.co/
  - MDB recommends following it, and I did when I needed to make a choice

## Notes

### Process

Here is an overview of what I did in a separate repo, https://github.com/tomwhartung/denverfreelancing.com-mdb

- General
  - I considered using "Front Range Freelancing" instead of "Denver Area Freelancing" in the "logo" in the header
  - "Front Range Freelancing" is alliterative and a little bit shorter
  - Also, I sense you want to be more inclusive than exclusive
  - Just a thought...
- Favicon: took a screenshot of the font awesome globe icon and reduced it to 32x32
- Navigation
  - The logo "Denver Area Freelancers" and Home menu options are redundant
  - Moved email subscription signup form to its own page
    - Added an option for it to the main menu
  - Links to meetup and facebook on the right side of the menu may need minor updating
    - Had only links to events, not to groups
    - Note: Will need to update for new events, or to a group, as appropriate
- Footer
  - Added copyright, link to your medium page, and link to my LLC, hope that's ok
- Home Page
  - Moved email list signup form to a separate page
- Vision Page
  - I think it looks ok, but there are ways to lighten or darken the image, and adjust the text accordingly to make it more readable
- Resources Page
  - If you want an affiliate link disclosure, a full page with details, I can adjust the one I wrote for my sites
  - Initial try to get the Vue code to work did not work as I was hoping it would
  - Downloaded MDB for Vue and trying that
    - https://mdbootstrap.com/docs/vue/getting-started/download/
  - Notes:
    - Downloaded file is "Based on the latest Bootstrap 4 and Vue 2.5.21"
    - Downloaded file does not include Vue.js
    - Downloaded file contains demo stuff we can probably delete
    - CDN link currently in resources.html doesn't specify a version, but accesses Vue v2.6.6
  - Steps taken:
    - Downloaded file `MDB-Vue-Free-5.1.0.zip`
    - Unpacked into separate directory `resources-vue/` and checked in as-is
    - Added current copy of `resources.html` into `resources-vue/`
    - Tested `resources-vue/resources.html`
  - Results:
    - Initially got several errors, but was able to fix them by linking several directories into `resources-vue/`
    - Unfortunately, `resources-vue/resources.html` looks about the same as `resources.html`

### Committing the Results to a New Branch

Notes from merging the results of the process above into a new branch in the existing repo:

- Branch name: `mdb-1`
- Added the following new files and directories:
  - assets/img/better-together-*
  - css - Added many new files, some of which are empty placeholders
  - favicon.ico
  - font
  - img
  - js
  - resources-vue
  - src/scss-mdb
  - subscribe.html
- Updated the following existing files:
  - index.html
  - resources.html
  - vision.html

### Results

Looks good to me, except for the resources page.

- Hopefully someone who knows Vue can figure that out quickly and easily?

