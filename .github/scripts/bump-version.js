// .github/scripts/bump-version.js
// Increments the patch version in manifest.json and package.json

const fs = require("fs");
const path = require("path");

function bumpVersion(version) {
    const parts = version.split(".").map(Number);
    parts[2] = (parts[2] || 0) + 1;
    return parts.join(".");
}

function updateJsonFile(filePath, versionKey = "version") {
    const absPath = path.resolve(process.cwd(), filePath);
    const json = JSON.parse(fs.readFileSync(absPath, "utf8"));
    const oldVersion = json[versionKey];
    const newVersion = bumpVersion(oldVersion);
    json[versionKey] = newVersion;
    fs.writeFileSync(absPath, JSON.stringify(json, null, 2) + "\n");
    console.log(`${filePath}: ${oldVersion} -> ${newVersion}`);
}

updateJsonFile("package.json");
updateJsonFile("manifest.json");
