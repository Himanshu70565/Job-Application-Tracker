const fs = require("fs");
const chalk = require("chalk");

const addJob = (company, post, jobId) => {
  // loading all jobs from the database
  const jobs = loadJobs();

  // creating a new job object
  const job = { company, post, jobId, date: new Date(), status: "no response" };

  //   finding duplicate job
  const duplicateJobs = jobs.find((job) => {
    return job.company === company && job.post === post && job.jobId === jobId;
  });

  if (!duplicateJobs) {
    jobs.push(job);
    saveJobs(jobs);
    console.log(chalk.green.underline('Job Application added to database'));
  } else {
    console.log(chalk.red.underline("Job Application already exists"));
  }
};

const readJob = (company) => {
  const jobs = loadJobs();
  const companyJobs = jobs.filter((job) => job.company === company);

  // Printing Company Name in top
  console.log(chalk.green.underline(company.toUpperCase()));

  if (companyJobs.length !== 0) {
    // Printing all jobs corresponding to a company along with status
    companyJobs.map((job) => {
      job.post=job.post.toUpperCase();
      if (job.status === "rejected") {
        console.log(
          chalk.blue(job.post + "  " + job.jobId + "  " + job.date) +
            "    " +
            chalk.red("Rejected 😭😭😭")
        );
      } else if (job.status === "accepted") {
        console.log(
          chalk.blue(job.post + "  " + job.jobId + "  " + job.date) +
            "    " +
            chalk.green("Accepted 😎😎😎")
        );
      } else {
        console.log(
          chalk.blue(job.post + "  " + job.jobId + "  " + job.date) +
            "    " +
            chalk.yellow(job.status + " 🙄🙄🙄")
        );
      }
    });
  } else {
    console.log(chalk.underline.blue("You have never applied to this company"));
  }
};


const printHeading=()=>{
  console.log(
    chalk.underline.white('COMPANY') +
      "      " +
      chalk.white('POST APPLIED') +
      "     " +
      chalk.white('JOB ID') +
      "     " +
      chalk.white('DATE APPLIED') +
      "     " +
      chalk.white('STATUS')
  );
  console.log();
}

const listJobs = () => {
  const jobs = loadJobs();

  printHeading();

  jobs.map((job) => {
    
    job.company=job.company.toUpperCase();
    job.post=job.post.toUpperCase();
    
    if (job.status === "rejected") {
      console.log(
        chalk.underline(job.company) +
          "      " +
          chalk.blue(job.post) +
          "     " +
          chalk.blue(job.jobId) +
          "     " +
          chalk.blue(job.date) +
          "     " +
          chalk.red(job.status) +
          "😭😭😭"
      );
    } else if (job.status === "accepted") {
      console.log(
        chalk.underline(job.company) +
          "      " +
          chalk.blue(job.post) +
          "     " +
          chalk.blue(job.jobId) +
          "     " +
          chalk.blue(job.date) +
          "     " +
          chalk.green(job.status) +
          "😎😎😎"
      );
    } else {
      console.log(
        chalk.underline(job.company) +
          "      " +
          chalk.blue(job.post) +
          "     " +
          chalk.blue(job.jobId) +
          "     " +
          chalk.blue(job.date) +
          "     " +
          chalk.yellow(job.status) +
          "🙄🙄🙄"
      );
    }
    console.log();
  });
};

const updateJob = (company, jobId, status) => {
  const jobs = loadJobs();

  printHeading();

  let response = jobs.find((job) => {
    if (
      job.status !== "rejected" &&
      job.company === company &&
      job.jobId === jobId
    ) {
      job.status = status;
      return true;
    }
    return false;
  });
  if (response) {
    console.log(chalk.green("Updated job status"));
    saveJobs(jobs);
  } else {
    console.log(chalk.red("No such application has been submitted"));
    console.log(
      "Use node app.js list --company=[],to find all application to that company"
    );
  }
};

const loadJobs = () => {
  try {
    return JSON.parse(fs.readFileSync("jobs.json").toString());
  } catch (err) {
    return [];
  }
};

const saveJobs = (jobs) => {
  fs.writeFileSync("jobs.json", JSON.stringify(jobs));
};

module.exports = {
  addJob,
  listJobs,
  readJob,
  updateJob,
};
