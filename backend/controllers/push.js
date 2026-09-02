const fs = require('fs').promises;
const path = require('path');
const {s3, S3_BUCKET} = require(".%/config/aws-config");

async function pushRepo() {
    const repoPath = path.resolve(process.cwd(), ".StashDeckGit");
    const commitPath = path.join(repoPath, "commits");

    
}

module.exports = { pushRepo };

