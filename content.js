// content.js
// Listens for messages to capture highlighted text
function getSelectedText() {
    const selection = window.getSelection();
    return selection ? selection.toString() : "";
}

function getMetaContent(name) {
    const meta = document.querySelector(`meta[name='${name}']`);
    return meta ? meta.content : "";
}

function getPageTags() {
    // Try keywords meta, or fallback to empty string
    const keywords = getMetaContent("keywords");
    if (keywords) return keywords;
    // Try categories (not standard, but sometimes used)
    const categories =
        getMetaContent("category") || getMetaContent("categories");
    return categories || "";
}

function getPageMetadata() {
    return {
        text: getSelectedText(),
        date: new Date().toISOString().slice(0, 10),
        title: document.title || getMetaContent("title"),
        cited: getMetaContent("author"),
        link: window.location.href,
        seo: getMetaContent("description"),
        tags: getPageTags(),
    };
}

console.log("Hiyd content.js loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Hiyd content.js received message:", request);
    if (request.action === "get-highlight") {
        sendResponse(getPageMetadata());
    }
});

// Export pure functions for testing (Node.js/Jest)
if (typeof module !== "undefined" && module.exports) {
    module.exports = { getMetaContent, getPageTags };
}
