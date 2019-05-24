// cucumber / Gherkin and chai for test steps and assertions
const { When, Given } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../../config');
require('../../../src/index');
const User = require('../../../src/models/user');

chai.should();

Given('the database is empty', async function () {
  await User.deleteMany({});
});

Given('the account is in the database', async function () {
  this.body = {
    username: 'existinguser',
    password: 'password'
  };
  const user = new User(this.body);
  await user.save();
});

Given('the account is not in the database', async function () {
  this.body = {
    username: "doesn't exist",
    password: "secret"
  };
});

When('I call the POST signin route', async function () {
  try {
    this.response = await rp({
      url: `${config.thisService.url}/users/signin`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: this.body,
      resolveWithFullResponse: true,
      json: true
    });
  } catch (error) {
    this.response = error;
  }
});

When('I call the POST /signup route', async function () {
  this.response = await rp({
    url: `${config.thisService.url}/users/signup`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: 'newuser',
      password: 'password'
    },
    resolveWithFullResponse: true,
    json: true
  });
});
