const fs = require("fs").promises;
const path = require('path')

async function initRepo() {
    const repoPath = path.resolve(process.cwd(), ".StashDeck")
    const commitsPath = path.join(repoPath, "commits");

    try {
        await fs.mkdir(repoPath, { recursive: true })
    } catch(err) {
        console.error("Error initialising repository", err);
    }
}

module.exports = { initRepo };








