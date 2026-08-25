const fs = require("fs").promises;
const path = require("path");

async function addRepo() {
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const stagingPath = path.join(repoPath, "staging");

    try {

    } catch(err) {
        console.error("Error adding file: ", err);
    }
}

module.exports = { addRepo };