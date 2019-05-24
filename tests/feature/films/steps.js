// cucumber / Gherkin and chai for test steps and assertions
const { When, Then, setDefaultTimeout } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../../config');

setDefaultTimeout(20 * 1000);

chai.should();

When('I call the GET films route', async function () {
  this.response = await rp({
    url: `${config.thisService.url}/films`,
    method: 'GET',
    resolveWithFullResponse: true
  });
  this.responseBody = JSON.parse(this.response.body);
});

Then('The GET films route should return a status code of {int}', function (statusCode) {
  this.response.statusCode.should.equal(statusCode);
});

Then('The response body should have {int} films', function (length) {
  this.responseBody.length.should.equal(length);
});

Then('The response body should be a list of films', function () {
  this.responseBody.forEach((film) => {
    film.should.have.property('id');
    film.should.have.property('name');
    film.should.have.property('averageVote');
    film.should.have.property('description');
  });
});
