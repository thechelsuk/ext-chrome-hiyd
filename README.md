# Hiyd Browser Extension

Hiyd is a Chromium browser extension that lets you capture highlighted text and web page metadata, saving it as a Markdown file with Jekyll front matter. It is designed for users who want to quickly save and organize web clippings in a portable, readable format.

## Features

- Capture highlighted text from any web page using a context menu or keyboard shortcut.
- Automatically collect metadata: date, page title, author, URL, description, and tags.
- Save output as a Markdown file with Jekyll-compatible front matter.
- Each line of highlighted text is quoted in Markdown (using "> ").
- Maintains lists, tables, images, and spacing in Markdown format.
- File is named as `yyyy-mm-dd-title.md` (date and sanitized page title).
- Choose a default save location and auto-save option in settings.
- Simple, clean UI and UX.

## Usage

1. Install the extension in your Chromium-based browser.
2. Go to the extension's options page to set your default save location.
3. Highlight text on any web page.
4. Right-click and select "Hiyd Capture" in the context menu.
5. The extension will prompt you to save a Markdown file.

## Requirements & Approach

- Uses Manifest V3 and latest Chromium extension APIs.
- No user data is collected or stored.
- Built with HTML, CSS, and JavaScript only.

## Links

- [GitHub](https://github.com/hiyd-uk/hiyd-extension)
- [Website](https://hiyd.uk)
