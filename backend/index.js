const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const {initRepo} = require("./controllers/init");
const {addRepo} = require("./controllers/add")

yargs(hideBin(process.argv))
    .command("init", "Initialise a new repository", {}, initRepo)
    .command("add <file>", "Add a file to repository",
        (yargs)=>{
            yargs.positional("file", {
                describe: "File to add to the staging area",
                type: "string",
            });
        },
        addRepo
    )

    .demandCommand(1, "You  need atleat one command")
    .help().argv;


