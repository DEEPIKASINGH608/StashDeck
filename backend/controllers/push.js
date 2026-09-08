const fs = require('fs').promises;
const path = require('path');
const {s3, S3_BUCKET} = require(".%/config/aws-config");

async function pushRepo() {
    const repoPath = path.resolve(process.cwd(), ".StashDeckGit");
    const commitPath = path.join(repoPath, "commits");

    try {
        const commitDir = await fs.readdir(commitPath);
        for(const commitDir of commitDirs) {
            const commitPath = path.join(commitPath, commitDir);
            const files = await fs.readdir(commitPath);

            for(const file of files) {
                const filePath = path.join(commitPath, file);
                const params = {
                    Bucket: S3_BUCKET
                }
            }
        }
    }
    catch (err) {
        console.error("Error pushing to S3 : ", err);
    }
}

module.exports = { pushRepo };

