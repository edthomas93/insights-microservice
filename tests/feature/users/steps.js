// cucumber / Gherkin and chai for test steps and assertions
const { When, Then, setDefaultTimeout } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../../config');

setDefaultTimeout(20 * 1000);

chai.should();

When('I call the POST users route', async function () {
  this.response = await rp({
    url: `${config.thisService.url}/users`,
    method: 'POST',
    resolveWithFullResponse: true
  });
  this.responseBody = JSON.parse(this.response.body);
});

Then('The POST users route should return a status code of {int}', function (statusCode) {
  this.response.statusCode.should.equal(statusCode);
});

Then('The response body should be an Object', function () {
  this.responseBody.should.be.an('object');
});

Then('The response body should be new user details', function () {
  this.responseBody.should.have.property('id');
  this.responseBody.should.have.property('username');
  this.responseBody.should.have.property('password');
  this.responseBody.should.have.property('favourites');
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