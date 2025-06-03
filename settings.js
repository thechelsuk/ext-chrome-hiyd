// settings.js for Hiyd extension
// Save and load settings from chrome.storage

document.addEventListener("DOMContentLoaded", () => {
    const saveLocation = document.getElementById("saveLocation");
    const form = document.getElementById("settings-form");
    const pickLocation = document.getElementById("pickLocation");

    // Load settings
    chrome.storage.sync.get(["saveLocation"], (data) => {
        if (data.saveLocation) saveLocation.value = data.saveLocation;
    });

    // Save settings
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // No message, just save the last chosen folder (if any)
        chrome.storage.sync.get(["saveLocation"], (data) => {
            if (data.saveLocation) {
                chrome.storage.sync.set({ saveLocation: data.saveLocation });
            }
        });
    });

    // Directory picker (File System Access API, Chromium only)
    if (pickLocation) {
        pickLocation.addEventListener("click", async () => {
            if (window.showDirectoryPicker) {
                try {
                    const dirHandle = await window.showDirectoryPicker();
                    // Save the folder name directly
                    chrome.storage.sync.set({ saveLocation: dirHandle.name });
                } catch (e) {
                    // User cancelled or not supported
                }
            } else {
                // Optionally show a message or fallback
            }
        });
    }
});
