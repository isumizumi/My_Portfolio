# My_Portfolio: Part 5
## Database People Skills


Description:

This part is about create database people skill using Mongoose.

## Specification

1. User has many skill.
2. Skill can be added to users.
3. User can provide a value for every skill they have.
4. Skill must be unique, can not duplicated.

##

#### List of api routes:

**Route**            |    **HTTP**   | **Description**
---------------------|---------------|------------------------
/api                 | GET           | get all user
/api                 | POST          | create one data user
/api/:id             | GET           | get a user
/api/:id             | PUT           | update data user
/api/:id             | DELETE        | delete data user
/api/seed            | POST          | seed data user
/api/skill/:id       | PUT           | update data skill
/api/skill/:id       | DELETE        | delete data skill


### **Usage**

> npm install <br>
> npm run dev <br>
> sudo service mongod start
