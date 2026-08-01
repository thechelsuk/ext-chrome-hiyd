// settings.js for Hiyd extension
// Manage default front matter values for captured markdown files

const MAX_FRONT_MATTER_ITEMS = 5;
const STORAGE_KEY = "frontMatterCustom";
const BUILT_IN_KEYS = ["date", "title", "cited", "link", "seo", "tags"];

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

function createFrontMatterRow(key = "", value = "") {
    const row = document.createElement("div");
    row.className = "front-matter-row";

    const keyInput = document.createElement("input");
    keyInput.className = "front-matter-input";
    keyInput.type = "text";
    keyInput.placeholder = "Key";
    keyInput.value = key;

    const valueInput = document.createElement("input");
    valueInput.className = "front-matter-input";
    valueInput.type = "text";
    valueInput.placeholder = "Value";
    valueInput.value = value;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "front-matter-remove";
    removeButton.textContent = "Remove";
    row.appendChild(keyInput);
    row.appendChild(valueInput);
    row.appendChild(removeButton);

    const warning = document.createElement("span");
    warning.className = "row-warning";
    warning.style.display = "none";
    row.appendChild(warning);

    return row;
}

function setRowWarning(row, msg) {
    const warning = row.querySelector(".row-warning");
    if (!warning) return;
    if (msg) {
        warning.textContent = msg;
        warning.style.display = "inline";
        row.classList.add("invalid");
    } else {
        warning.textContent = "";
        warning.style.display = "none";
        row.classList.remove("invalid");
    }
}

function validateRows(container) {
    const rows = Array.from(container.querySelectorAll(".front-matter-row"));
    const counts = {};
    rows.forEach((row) => {
        const key = String(
            row.querySelectorAll(".front-matter-input")[0]?.value || "",
        )
            .trim()
            .toLowerCase();
        if (key) counts[key] = (counts[key] || 0) + 1;
    });

    let allValid = true;
    rows.forEach((row) => {
        const keyRaw = String(
            row.querySelectorAll(".front-matter-input")[0]?.value || "",
        ).trim();
        const key = keyRaw.toLowerCase();
        if (!keyRaw) {
            setRowWarning(row, "");
            return;
        }
        if (BUILT_IN_KEYS.includes(key)) {
            setRowWarning(row, `Reserved key: ${keyRaw}`);
            allValid = false;
            return;
        }
        if (counts[key] > 1) {
            setRowWarning(row, `Duplicate key: ${keyRaw}`);
            allValid = false;
            return;
        }
        setRowWarning(row, "");
    });

    return allValid;
}

function renderFrontMatterRows(container, defaults) {
    const normalized = normalizeFrontMatterDefaults(defaults);
    const rowsToRender =
        normalized.length > 0 ? normalized : [{ key: "", value: "" }];

    container.innerHTML = "";
    rowsToRender.forEach((item) => {
        container.appendChild(createFrontMatterRow(item.key, item.value));
    });
}

function updateAddButton(button, rowCount) {
    if (rowCount >= MAX_FRONT_MATTER_ITEMS) {
        button.disabled = true;
        button.textContent = "Maximum of 5 items reached";
    } else {
        button.disabled = false;
        button.textContent = "Add another item";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hiyd settings page loaded");

    const form = document.getElementById("settings-form");
    const rowsContainer = document.getElementById("front-matter-rows");
    const addButton = document.getElementById("add-front-matter");
    const status = document.getElementById("settings-status");

    if (!form || !rowsContainer || !addButton || !status) {
        return;
    }

    function loadSettings() {
        chrome.storage.sync.get([STORAGE_KEY], (result) => {
            renderFrontMatterRows(rowsContainer, result[STORAGE_KEY] || []);
            updateAddButton(addButton, rowsContainer.children.length);
        });
    }

    addButton.addEventListener("click", () => {
        if (rowsContainer.children.length >= MAX_FRONT_MATTER_ITEMS) {
            return;
        }

        rowsContainer.appendChild(createFrontMatterRow());
        updateAddButton(addButton, rowsContainer.children.length);
        validateRows(rowsContainer);
    });

    rowsContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("front-matter-remove")) {
            target.closest(".front-matter-row").remove();
            if (rowsContainer.children.length === 0) {
                rowsContainer.appendChild(createFrontMatterRow());
            }
            updateAddButton(addButton, rowsContainer.children.length);
            validateRows(rowsContainer);
        }
    });

    rowsContainer.addEventListener("input", (event) => {
        if (
            event.target &&
            event.target.classList &&
            event.target.classList.contains("front-matter-input")
        ) {
            validateRows(rowsContainer);
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // validate rows first; if invalid, prevent save
        const validNow = validateRows(rowsContainer);
        if (!validNow) {
            status.textContent =
                "Please fix duplicate or reserved keys before saving.";
            return;
        }

        const raw = Array.from(
            rowsContainer.querySelectorAll(".front-matter-row"),
        ).map((row) => ({
            key: String(
                row.querySelector(".front-matter-input")?.value || "",
            ).trim(),
            value: String(
                row.querySelectorAll(".front-matter-input")[1]?.value || "",
            ).trim(),
        }));

        const seen = new Set();
        const valid = [];
        const ignored = [];

        raw.forEach((item) => {
            if (!item.key || !item.value) return;
            const lower = item.key.toLowerCase();
            if (BUILT_IN_KEYS.includes(lower)) {
                ignored.push(item.key);
                return;
            }
            if (seen.has(lower)) {
                ignored.push(item.key);
                return;
            }
            seen.add(lower);
            valid.push({ key: item.key, value: item.value });
        });

        chrome.storage.sync.set({ [STORAGE_KEY]: valid }, () => {
            if (ignored.length > 0) {
                status.textContent = `Saved. Ignored duplicate or reserved keys: ${ignored.join(", ")}`;
            } else {
                status.textContent = "Custom defaults saved.";
            }
        });
    });

    loadSettings();
});
