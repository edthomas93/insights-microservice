const chai = require('chai');
const { Then } = require('cucumber');

chai.should();

Then('The response body should be an Array', function () {
    this.responseBody.should.be.an('array');
});

Then('The response body should be an Object', function () {
    this.response.body.should.be.an('object');
  });

  Then('The response body should be user details and session key', function () {
    this.response.body.should.have.property('id');
    this.response.body.should.have.property('username');
    this.response.body.should.not.have.property('password');
    this.response.body.should.have.property('sessionkey');
  });

  Then('The route should return a status code of {int}', function (statusCode) {
    this.response.statusCode.should.equal(statusCode);
  });