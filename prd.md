# PRD chromium browser extension

As a user when I highlight text on a web page and hit a shortcut or icon on the browser extensions it captures the text and other website meta data and saves the output in a markdown file on my device.

## Requirements

- The extension should capture highlighted text on a web page when the user clicks a 'Hyd Capture' context or right click menu option.

- Click the extension icon in the browser toolbar to open up the settings page.

- The extension should capture the following meta data from the web page:
  - date of capture (current date in yyyy-mm-dd format)
  - title of the page (from the title tag or meta tag)
  - author of the page (from the author meta tag)
  - current URL
  - description of the page (from the description meta tag)
  - tags (comma separated list of tags, can be derived from keywords or categories on the page)

- The output file should be in markdown file Jekyll front matter
Including:
  - date: (date of capture yyyy-mm-dd format)
  - title: (website's page title or title meta tag)
  - cited: (page author or author meta tag)
  - Link: (current url)
  - seo: ( page description meta tag)
  - tags: (comma separated list of tags)

- The highlighted text should be including in the main body of the document and each line prefixed by a > (a markdown quote and space)

- The highlighted text should also respect and maintain lists, tables, images and spacing but converted to markdown format.

- The extension should use the latest standards should have access to save a file to disk and prompt the user to save the produced file each time.

- The extension needs no other data, no user data.

- The extension should be called "Hyd" and should have a simple test tube icon.

- The output file should be named yyyy-mm-dd-title.md Where that is the date of capture and page title with all special html or non-alpha characters replaced with dashes.

- The extension should have settings for the user to choose a default save location and to auto save on button click.

- The extension should settings should have a link to a GitHub repo and a link to the hyd.uk

## Approach

- Test driven development
- Use the latest Chromium extension APIs
- Use a linter
- Use a formatter
- minimise dependencies
- Use a simple and clean code structure
- Use a simple and clean UI
- Use a simple and clean UX
- Use only HTML, CSS, and JavaScript
- Use a manifest v3 for the extension

The app should confirm to standards and best practices for browser extensions, including security and performance considerations. see <https://developer.chrome.com/docs/extensions/develop> for more information

## Prompt

Good afternoon, I've created a PRD file in this empty repo. our task today is to build a Chromium/chrome browser extension. Please read the PRD and lets work on each requirement at a time using our documented approach.
