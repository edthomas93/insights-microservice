const { expect } = require('chai');
require('../../src/index');
const controllers = require('../../src/controllers');
const userResponse = require('../responses/user');
const User = require('../../src/models/user');

describe('Users Controller', () => {
  const body = {
    username: 'existinguser',
    password: 'password'
  };

  beforeEach(async () => await User.deleteMany({}));

  describe('#post user/signup', () => {
    context('SUCCESS:', () => {
      it('creates a new user', async () => {
        const result = await controllers.users.create(body);
        expect(result.username).to.eql(userResponse.username);
        result.should.have.property('token');
      });
    });
    context('ERROR', () => {
      it('fails to create user', async () => {
        const failedBody = { password: 'password' };
        try {
          await controllers.users.create(failedBody);
        } catch (error) {
          expect(error).to.not.equal(null);
        }
      });
    });
  });

  describe('#post user/signin', () => {
    context('SUCCESS:', () => {
      it('existing user signs in', async () => {
        // create new user
        const user = new User(body);
        await user.save();
        // then attempt sign in
        const result = await controllers.users.signin(body);
        expect(result.username).to.eql(userResponse.username);
        result.should.have.property('token');
      });
    });
    context('ERROR', () => {
      it('fails to sign in with incorrect password', async () => {
        try {
          // create new user
          const user = new User(body);
          await user.save();
          await controllers.users.signin({
            username: 'existinguser',
            password: 'wrongpassword'
          });
        } catch (error) {
          expect(error).to.not.equal(null); // /////unsure of quality of this testing
        }
      });
    });
  });
});
