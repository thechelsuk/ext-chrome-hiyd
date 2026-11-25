# Hiyd Browser Extension

Hiyd is a Chromium browser extension that lets you capture highlighted text and web page metadata, saving it as a Markdown file with Jekyll front matter. It is designed for users who want to quickly save linked quote style blog posts.

## Features

- Capture highlighted text from any web page using the right-click menu.
- Automatically collect metadata: date, page title, author, URL, description, and tags.
- Save output as a Markdown file with Jekyll-compatible front matter.
- Each line of highlighted text is quoted in Markdown (using "> ").
- Keeps the line breaks from your selection.
- File is named as `yyyy-mm-dd-title.md` (date and sanitised page title).
- Choose where to save each file when you capture it.
- Simple, clean UI and UX.
- Create up to 5 custom front matter items.

## Usage

1. Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/hiyd/hkeklhoojnogpfmiikadpcmkmpldhpce).
2. Optionally, click the toolbar icon to add your own front matter items.
3. Highlight text on any web page.
4. Right-click and select "Hiyd Capture" in the context menu.
5. The extension will prompt you to save a Markdown file.

## Requirements & Approach

- Uses Manifest V3 and latest Chromium extension APIs.
- No user data is collected or sent anywhere. Your custom front matter is saved in Chrome's own sync storage.
- Built with HTML, CSS, and JavaScript only.

## Links

- [Chrome Web Store](https://chromewebstore.google.com/detail/hiyd/hkeklhoojnogpfmiikadpcmkmpldhpce)
- [Hiyd website](https://hiyd.uk), home of the Hiyd app
- [GitHub](https://github.com/thechelsuk/ext-chrome-hiyd)
- [Privacy policy](https://hiyd.uk/privacy/)

## Help

Raise an [issue on GitHub](https://github.com/thechelsuk/ext-chrome-hiyd/issues) or reach out on [socials](https://links.thechels.uk).

## Support

Hiyd is free and maintained in my spare time. If you can support me and continued ongoing development, you can through [GitHub Sponsors](https://github.com/sponsors/thechelsuk) or [Ko-fi](https://ko-fi.com/thechelsuk).

Made with ♥ in the UK by [thechels.uk](https://thechels.uk). See my [other projects](https://thechels.uk/projects).
