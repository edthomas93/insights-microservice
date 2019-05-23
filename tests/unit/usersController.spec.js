const { expect } = require('chai');
const nock = require('nock');
require('../../src/index');
const controllers = require('../../src/controllers');
const user = require('../responses/user');
const User = require('../../src/models/user');

describe('Users Controller', () => {
  beforeEach(async () => {
    try {
      console.log('DELETING USERS ==>>');
      await User.deleteMany({})
      console.log('SUCCESSFULLY DELETED USERS ==>>');
    } catch (error) {
      console.log('ERROR ==>>', error);
    }
  });
  afterEach(() => nock.cleanAll());

  describe('#post', () => {
      context('SUCCESS:', () => {
          it('creates a new user', async () => {
            const body = {
              username: 'eddyt993',
              password: 'password'
            };
            const result = await controllers.users.create(body);
            expect(result.username).to.eql(user.username);
            result.should.have.property('sessionkey');
            result.should.have.property('id');
          });
      });
      context('ERROR', () => {
        it('fails to create user', async () => {
          const body = {
            password: 'password'
          };
          try {
            await controllers.users.create(body);
          } catch (error) {
            expect(error).to.not.equal(null);
          };
        });
      });
  });
});