const fs = require('fs').promises;
const path = require('path');
const { v4:uuid4 } = require("uuid");


async function commitRepo(message) {
    const repoPath = path.resolve(process.cwd(), ".StashDeckGit");
    const stagedPath = path.join(repoPath, "staging");
    const commitPath = path.join(repoPath, "commits");


    try {

    } catch {
        
    }
}


module.exports = { commitRepo };