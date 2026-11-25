# Chrome Web Store listing: Hiyd 2.0.3

Paste these into the developer dashboard by hand. Update to the existing listing.

## Store listing tab

**Name** (from the manifest): Hiyd

**Summary** (from the manifest description, 132 characters at most):

Capture highlighted text and page metadata as markdown.

**Category:** Productivity > Tools

**Language:** English (UK)

**Description:**

Hiyd turns a quote from any web page into a linked quote post for your Jekyll blog.

Highlight some text, right-click and choose "Hiyd Capture". Hiyd saves a Markdown file with the quote and Jekyll front matter, ready to publish.

What it does:
- Quotes each line of your selection in Markdown ("> ").
- Collects the date, page title, author, link, description and tags from the page.
- Names the file yyyy-mm-dd-title.md and lets you choose where to save it.
- Lets you add up to 5 custom front matter items of your own.

Hiyd is the companion to the Hiyd app for iPhone and iPad: https://hiyd.uk

Privacy: Hiyd collects nothing and sends nothing anywhere. Your custom front matter is saved in Chrome's own sync storage. Privacy policy: https://hiyd.uk/privacy/

Help: raise an issue on GitHub (https://github.com/thechelsuk/ext-chrome-hiyd/issues) or reach out on socials (https://links.thechels.uk).

If you can support me and continued ongoing development: GitHub Sponsors (https://github.com/sponsors/thechelsuk) or Ko-fi (https://ko-fi.com/thechelsuk).

Made with ♥ in the UK by thechels.uk (https://thechels.uk). See my other projects: https://thechels.uk/projects

**Official URL:** https://hiyd.uk

**Homepage URL:** https://hiyd.uk

**Support URL:** https://hiyd.uk/support/

**Images:** keep the ones already on the listing. Nothing in this update changes how the capture works.

## Privacy practices tab

**Single purpose:** Save highlighted text from a web page, with the page's details, as a Markdown quote post for a Jekyll blog.

**Permission justifications:**
- `contextMenus`: adds the "Hiyd Capture" item to the right-click menu when text is selected.
- `activeTab`: reads the selection and page details from the tab where you chose "Hiyd Capture".
- `scripting`: opens the save dialog in that tab so you can save the Markdown file.
- `storage`: saves your custom front matter items.
- Host permission (content script on all sites): the quote can come from any web page, so the script that reads the selection and the page's title, author, description and keywords has to be available on every site. It only responds when you choose "Hiyd Capture".

**Remote code:** No, I am not using remote code.

**Data usage:** collects none of the listed data types. Tick all three certifications (not sold to third parties; not used for purposes unrelated to the item's single purpose; not used for creditworthiness or lending).

**Privacy policy URL:** https://hiyd.uk/privacy/

## Package

Upload `distribution.zip` from the repo root, built by `bash build-distribution.sh`.
