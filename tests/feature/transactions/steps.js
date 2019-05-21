// cucumber / Gherkin and chai for test steps and assertions
const { When, Then, setDefaultTimeout } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../../config');

setDefaultTimeout(20 * 1000);

chai.should();

When('I call the GET transactions route', async function() {
  this.response = await rp({
    url: `${config.thisService.url}/transactions`,
    method: 'GET',
    resolveWithFullResponse: true
  });
  this.responseBody = JSON.parse(this.response.body);
});

Then('The the GET transactions route should return a status code of {int}', function (statusCode) {
  this.response.statusCode.should.equal(statusCode);
});

Then('The response body should have {int} transactions', function (length) {
  this.responseBody.length.should.equal(length);
});

Then('The response body should be a list of transactions', function () {
  this.responseBody.forEach((trx) => {
    trx.should.have.property('id');
    trx.should.have.property('amount');
    trx.should.have.property('merchant');
    trx.should.have.property('category');
    trx.should.have.property('paymentDate');
  });
});
