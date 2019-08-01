'use strict';

const express = require('express');
const auth = require('../auth/middleware.js');

const router = express.Router();

router.get('/home', auth(), (req, res) => {
  res.status(200).send('Welcome to The Home Page');
});

router.get('/profile', auth(), (req, res) => {
  res.status(200).send('Welcome Home');
});

router.get('/document', auth('read'), (req, res) => {
  res.status(200).send('Welcome to Your Documents');
});

router.get('/delete-doc', auth('delete'), (req, res) => {
  res.status(200).send('PEACE!!!');
});

router.get('/add', auth('create'), (req, res) => {
  res.status(200).send('Welcome to Your Creation');
});

router.get('/update', auth('update'), (req, res) => {
  res.status(200).send('Welcome to The Update Area');
});

module.exports = router;
