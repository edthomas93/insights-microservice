const { expect } = require('chai');
const nock = require('nock');
const config = require('../../src/config');
const controllers = require('../../src/controllers');
const users = require('../responses/users');
const user = require('../responses/user');

describe('Users Controller', () => {
  afterEach(() => nock.cleanAll());

  describe('#post', () => {
      context('SUCCESS:', () => {
          it('creates a new user', async () => {
            //mocks call to the Users Service
            const id = 1;
            const usersMock = nock(config.users.url)
              .post('', 'username=ed&password=123456')
              .reply(200, { id: id})
            
            const result = await controllers.users.user(id);

            expect(result).to.eql(user)
            //asserts the mock was called
            usersMock.done();
          });
      });
      context('ERROR:', () => {
        it('returns a 500 error when an error is thrown by the Users Service', async () => {
          // mocks the call to the Users Service
          const usersMock = nock(config.users.url)
            .post('', 'username=ed&password=123456')
            .reply(500);
  
          try {
            await controllers.users.list();
            // ensure the catch block is called so that our assertions are run
            throw new Error();
          } catch (error) {
            expect(error.statusCode).to.equal(500);
            // asserts the mock was called
            usersMock.done();
          }
        });
      });
  });

  describe('#list', () => {
    context('SUCCESS:', () => {
      it('returns a list of users', async () => {
        // mocks the call to the Users Service
        const usersMock = nock(config.users.url)
          .get('')
          .reply(200, films);

        const result = await controllers.users.list();

        expect(result).to.eql(users);
        // asserts the mock was called
        usersMock.done();
      });
    });

    context('ERROR:', () => {
      it('returns a 500 error when an error is thrown by the Users Service', async () => {
        // mocks the call to the Users Service
        const usersMock = nock(config.users.url)
          .get('')
          .reply(500);

        try {
          await controllers.users.list();
          // ensure the catch block is called so that our assertions are run
          throw new Error();
        } catch (error) {
          expect(error.statusCode).to.equal(500);
          // asserts the mock was called
          usersMock.done();
        }
      });
    });
  });
});
