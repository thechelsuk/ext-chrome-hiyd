# PRD chromium browser Plugin

as a user when I highlight text on a web page and hit a shortcut or icon on the browser plugins it captures the text and other website meta data and saves the output in a markdown file on my device.

The output file should be in markdown file Jekyll front matter
Including

- date: (date of capture yyyy-mm-dd format)
- title: (website's page title or title meta tag)
- cited: (page author or author meta tag)
- Link: (current url)
- seo: ( page description meta tag)
- tags:

The highlighted text should be including in the main body of the document and each line prefixed by a > (a markdown quote and space)

The highlighted text should also respect and maintain lists, tables, images and spacing but converted to markdown format.

The plugin should use the latest standards should have access to save a file to disk and prompt the user to save the produced file each time.

The plugin needs no other data, no user data.

The plugin should be called "Hyd" and should have a simple test tube icon.

The output file should be named yyyy-mm-dd-title.md
Where that is the date of capture and page title with all special html or non-alpha characters replaced with dashes.

The plugin should have settings for the user to choose a default save location and to auto save on button click.

The plugin should settings should have a link to a GitHub repo and a link to the hyd.uk
