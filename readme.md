<h1 align="center">Job Application Tracker</h1>
Do you have no idea of how much job you have applied ? .Then this _Job Application Tracker_ can help you out. Here you can keep track of all the job application that you have applied for.

<hr />

**Who can use it ?**
If you are in love with your terminal then this application is only made for you . 


**List of Commands** 

__Command for adding a new job__
```
node app.js add --company='company_name' --post='post_name' --jobId='job_id'
```
![alt text](/media/img/add.PNG)


__Command for reading existing job in the database__
```
node app.js read --company='company_name'
```
![alt text](/media/img/read.PNG)


__Command for reading the status of the job__
```
node app.js update ---company='company_name' post='post_name' --status='updated_status'
```
![alt text](/media/img/update.PNG)


__Command for listing all the jobs along with their status__
```
node app.js list 
```
![alt text](/media/img/list.PNG)
