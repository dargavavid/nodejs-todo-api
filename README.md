# Todo API in Node.js

## Description
Part of Andrew Mead's Node.js tutorial on Udemy. Users can send HTTP requests to register, then save, update, delete todos.
MongoDB and Mongoose are used for storing and retrieving data, for authentication the app uses the bcrypt and jsonwebtoken modules.

## Setup
Navigate into root directory using terminal/console, then type **npm install** or **yarn install** (Linux users may have to prefix the command with *sudo* like this: *sudo npm install*). 

After installation, type **npm start** or **yarn start** to fire up the server.

## Requests
The following requests can be made to the server:

**GET:**

localhost:3000/todos --> get all todos from database

localhost:3000/todos/:id --> get todo by id from database

localhost:3000/users/me --> get current user from database

**POST:**

localhost:3000/todos --> insert new todo into database

localhost:3000/users --> register user in database

localhost:3000/users/login --> login as already existing user 

**DELETE:**

localhost:3000/todos:id --> delete todo by id from database

localhost:3000/users/me/token --> delete login token for current user (logout basically)

**PATCH:**

localhost:3000/todos:id --> update todo by id

## Data structures
Data is sent and received in JSON format. 

**User** objects must contain **email** and **password** properties:
```
{
  "email": "user@example.com",
  "password": "userpassword"
}
```
**Todo** objects must contain a **text** property:
```
{
  "text": "This is an example todo"
}
```