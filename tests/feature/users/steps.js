// cucumber / Gherkin and chai for test steps and assertions
const { When, Then, Given } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../../config');
require('../../../src/index');
const User = require('../../../src/models/user');

chai.should();

Given('the database is empty', async () => {
  await User.deleteMany({});
})

When('I call the POST users route', async function () {
  this.response = await rp({
    url: `${config.thisService.url}/users/signup`,
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: {
      username: 'Tom',
      password: 'password'
    },
    resolveWithFullResponse: true,
    json: true
  });
});

Then('The POST users route should return a status code of {int}', function (statusCode) {
  this.response.statusCode.should.equal(statusCode);
});

Then('The response body should be an Object', function () {

  this.response.body.should.be.an('object');
});

Then('The response body should be new user details', function () {
  this.response.body.should.have.property('id');
  this.response.body.should.have.property('username');
  this.response.body.should.have.property('password');
  this.response.body.should.have.property('favourites');
});

When('I call the GET users route', async function () {
  this.response = await rp({
    url: `${config.thisService.url}/users`,
    method: 'GET',
    resolveWithFullResponse: true
  });
  this.responseBody = JSON.parse(this.response.body);
});

Then('The GET users route should return a status code of {int}', function (statusCode) {
  this.response.statusCode.should.equal(statusCode);
});

Then('The response body should be a list of users', function () {
  this.responseBody.forEach((user) => {
    user.should.have.property('id');
    user.should.have.property('name');
    user.should.have.property('password');
    user.should.have.property('favourites');
  });
});