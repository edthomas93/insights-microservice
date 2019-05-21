const { expect } = require('chai');
const nock = require('nock');
const config = require('../../src/config');
const controllers = require('../../src/controllers');
const formattedFilms = require('../responses/formattedFilms');
const films = require('../responses/films');

describe('Films Controller', () => {
  afterEach(() => nock.cleanAll());

  describe('#list', () => {
    context('SUCCESS:', () => {
      it('returns a list of films', async () => {
        // mocks the call to the Films Service
        const filmsMock = nock(config.films.url)
          .get('')
          .reply(200, films);

        const result = await controllers.films.list();

        expect(result).to.eql(formattedFilms);
        // asserts the mock was called
        filmsMock.done();
      });
    });

    context('ERROR:', () => {
      it('returns a 500 error when an error is thrown by the Films Service', async () => {
        // mocks the call to the Films Service
        const filmsMock = nock(config.films.url)
          .get('')
          .reply(500);

        try {
          await controllers.films.list();
          // ensure the catch block is called so that our assertions are run
          throw new Error();
        } catch (error) {
          expect(error.statusCode).to.equal(500);
          // asserts the mock was called
          filmsMock.done();
        }
      });
    });
  });
});
