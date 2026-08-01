// background.js
// Handles browser action and keyboard shortcut
console.log("Hiyd extension background.js loaded");

// Only include pure functions for unit testing
function sanitizeFilename(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

const DEFAULT_FRONT_MATTER_KEYS = [
    "date",
    "title",
    "cited",
    "link",
    "seo",
    "tags",
];

function normalizeFrontMatterDefaults(defaults) {
    if (!Array.isArray(defaults)) {
        return [];
    }

    return defaults
        .filter((item) => item && typeof item === "object")
        .map((item) => ({
            key: typeof item.key === "string" ? item.key.trim() : "",
            value: typeof item.value === "string" ? item.value.trim() : "",
        }))
        .filter((item) => item.key && item.value !== "");
}

function toMarkdown(data, customDefaults) {
    const normalizedCustom = normalizeFrontMatterDefaults(customDefaults);

    const frontMatterLines = [
        `date: ${data.date}`,
        `title: "${data.title || ""}"`,
        `cited: "${data.cited || ""}"`,
        `link: ${data.link}`,
        `seo: "${data.seo || ""}"`,
        `tags: ${data.tags || ""}`,
    ];

    // Only include custom items that do not duplicate built-in default keys
    normalizedCustom.forEach(({ key, value }) => {
        const lowerKey = key.toLowerCase();
        if (!DEFAULT_FRONT_MATTER_KEYS.includes(lowerKey)) {
            frontMatterLines.push(`${key}: "${value}"`);
        }
    });

    const frontMatter = `---\n${frontMatterLines.join("\n")}\n---\n`;
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
