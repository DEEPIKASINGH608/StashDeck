const fs = require('fs').promises;
const path = require('path');
const { v4:uuid4 } = require("uuid");


async function commitRepo() {
    console.log("Commit command called");
}


module.exports = { commitRepo };