// settings.js for Hyd extension
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
        chrome.storage.sync.set({
            saveLocation: saveLocation.value,
        });
        alert("Settings saved!");
    });

    // Directory picker (File System Access API, Chromium only)
    if (pickLocation) {
        pickLocation.addEventListener("click", async () => {
            if (window.showDirectoryPicker) {
                try {
                    const dirHandle = await window.showDirectoryPicker();
                    saveLocation.value = dirHandle.name;
                    chrome.storage.sync.set({ saveLocation: dirHandle.name });
                    // Show a confirmation message
                    let msg = document.getElementById("locationMsg");
                    if (!msg) {
                        msg = document.createElement("div");
                        msg.id = "locationMsg";
                        msg.style.marginTop = "0.5em";
                        msg.style.color = "#2a7ae2";
                        saveLocation.parentElement.appendChild(msg);
                    }
                    msg.textContent = `Selected folder: ${dirHandle.name}`;
                } catch (e) {
                    // User cancelled or not supported
                }
            } else {
                alert(
                    "Directory picker is not supported in this browser. Please enter a path manually."
                );
            }
        });
    }

    // Show confirmation if already set
    chrome.storage.sync.get(["saveLocation"], (data) => {
        if (data.saveLocation) {
            let msg = document.getElementById("locationMsg");
            if (!msg) {
                msg = document.createElement("div");
                msg.id = "locationMsg";
                msg.style.marginTop = "0.5em";
                msg.style.color = "#2a7ae2";
                saveLocation.parentElement.appendChild(msg);
            }
            msg.textContent = `Selected folder: ${data.saveLocation}`;
        }
    });
});
