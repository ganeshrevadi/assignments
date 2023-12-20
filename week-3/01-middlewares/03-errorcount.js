const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

const ErrorHandler = (err, req, res, next) => {

  if (err) {
    errorCount++;
    res.status(404).send(err.message)
  } else {
    next()
  }
}

const invalidRouteHandlerMiddleware = (req, res) => {
  res.status(404).send('Invalid route/method entered')
  errorCount += 1
}


app.get('/user', function(req, res, next) {
  // Wrap the code that may throw an exception in a try-catch block:
  throw new Error('User not found');
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

app.use('/', invalidRouteHandlerMiddleware)
app.use(ErrorHandler)



module.exports = app;
