const chai = require('chai');
const { Then } = require('cucumber');

chai.should();

Then('The response body should be an Array', function () {
    this.responseBody.should.be.an('array');
});