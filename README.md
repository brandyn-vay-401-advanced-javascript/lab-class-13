# LAB - 13

## Bearer Authorization

### Author: Brandyn Vay

[![Build Status](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-13.svg?branch=master)](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-13)

### Links and Resources
* [submission PR](https://github.com/brandyn-vay-401-advanced-javascript/lab-class-13/pull/8)
* [travis](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-13/builds/121183046)
* [back-end](https://bv-auth-bearer-server.herokuapp.com/)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)

### Modules
#### `routes.js`
#### `users-model.js`
#### `roles-model.js`
#### `play.js`

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - mongodb://localhost:27017/auth
* `SECRET` 

#### Running the app
* `nodemon`
* Endpoint: `/signup`
  * Returns a bearer token
* Endpoint: `/signin`
  * Returns a bearer token
  
#### Tests
* How do you run tests? npm test in the terminal

#### UML
[one time jwt diagram](./assets/one-time-jwt-diagram.jpg)

#### Cheat Sheet
1. Mongo
  * show dbs - to show all databases in mongo
  * use `database name` - to go into that database
    * show collections - to show what is in the database
    * db.`collection name`.find().pretty() - to show object in the databse

2. Server
  * echo '{"username":"`name`", "password":"`password`", "role":"`role`"}' | http post :3000/`route` - this route usually is for signup
  * http :3000/`route` "authorization:bearer `token`" - this is usually for checking authintacation for the route
