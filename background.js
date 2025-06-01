// background.js
// Handles browser action and keyboard shortcut
console.log("Hyd extension background.js loaded");

// Only include pure functions for unit testing
function sanitizeFilename(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function toMarkdown(data) {
    const frontMatter = `---\ndate: ${data.date}\ntitle: "${
        data.title || ""
    }"\ncited: "${data.cited || ""}"\nlink: ${data.link}\nseo: "${
        data.seo || ""
    }"\ntags: ${data.tags || ""}\n---\n`;
    // Format highlighted text as markdown quote
    const quoted = (data.text || "")
        .split("\n")
        .map((line) => "> " + line)
        .join("\n");
    return frontMatter + "\n" + quoted + "\n";
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { sanitizeFilename, toMarkdown };
}
