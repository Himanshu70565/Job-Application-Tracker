#Job Application Tracker

Do you have no idea of how much job you have applied ? .Then this **Job Application Tracker** can help you out. Here you can keep track of all the job application that you have applied for.

###Who can use it ?
If you are in love with your terminal then this application is only made for you . 


>Allowed commands : 

Command for adding a new job
```
node app.js add --company='company_name' --post='post_name' --jobId='job_id'
```

Command for reading existing job in the database
```
node app.js read --company='company_name'
```

Command for reading the status of the job
```
node app.js update ---company='company_name' post='post_name' --status='updated_status'
```


Command for listing all the jobs along with their status
```
node app.js list 
```