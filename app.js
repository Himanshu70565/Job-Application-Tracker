const yargs = require("yargs");
const jobDatabase = require("./jobs");

// add command
yargs.command({
  command: "add",
  describe: "add new job to the database",
  builder: {
    company: {
      describe: "company name",
      demandOption: true,
      type: "string",
    },
    post: {
      describe: "post applied",
      demandOption: true,
      type: "string",
    },
    jobId: {
      describe: "job Id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    jobDatabase.addJob(
      argv.company.toLowerCase(),
      argv.post.toLowerCase(),
      argv.jobId.toLowerCase()
    );
  },
});

// read command
yargs.command({
  command: "read",
  describe: "read from database",
  builder: {
    company: {
      describe: "company name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    jobDatabase.readJob(argv.company.toLowerCase());
  },
});

// update command
yargs.command({
  command: "update",
  describe: "update in database",
  builder: {
    company: {
      describe: "company name",
      demandOption: true,
      type: "string",
    },
    post: {
      describe: "post applied",
      demandOption: true,
      type: "string",
    },
    status: {
      describe: "application status",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    jobDatabase.updateJob(argv.company.toLowerCase(), argv.jobId.toLowerCase(), argv.status.toLowerCase());
  },
});

// list command
yargs.command({
  command: "list",
  describe: "listing all applied jobs",
  handler(argv) {
    jobDatabase.listJobs();
  },
});

yargs.parse();
