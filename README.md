# LAB - 13

## Bearer Authorization

### Author: Brandyn Vay

[![Build Status](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-13.svg?branch=master)](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-13)

### Links and Resources
* [submission PR](https://github.com/brandyn-vay-401-advanced-javascript/lab-class-13/pull/3)
* [travis](https://travis-ci.com/brandyn-vay-401-advanced-javascript/lab-class-13/builds/121183046)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?

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
