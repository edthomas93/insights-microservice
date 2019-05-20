# Example Microservice

Link to Insights Test: https://github.com/jigsawxyz/recruitment-uk

### Instructions:

#### Install:

`npm install`

#### Unit Tests:

`npm run test:unit`

#### Component Tests:

Component tests will run the full service, from going in through the router and returning a response. In component mode, all external services will be stubbed.

To run, we will need 2 terminal sessions open.

First, run the stubs:

`npm run start:stubs`

Then, run the component tests:

`npm run test:component`

#### Feature Tests

Feature tests (or Integration Tests) will run the same tests as component tests. However, in feature mode, all external services will NOT be stubbed.

To run, we will need 2 terminal sessions open.

First, run the service with the correct environment variables:

`TRANSACTIONS_URL=https://transactions.spokedev.xyz/transactions npm start`

Then, run the feature tests:

`npm run test:feature`


# User Case:

Docs: https://www.themoviedb.org/documentation/api

Example URL: https://api.themoviedb.org/3/movie/popular?api_key={apiKey}

So what do we want you to do? Here are some User Stories to get you started:

```
As a Film Enthusiast
So I can find a good movie to watch
I want to be able to GET a list of the most popular movies in the format:

{
  id: 1,
  name: 'Film Name',
  averageVote: 7.4,
  description: 'This is a film about stuff!'
}
```

```
As a Film Enthusiast
So I can read through a manageable list
I want to be able to limit the number of films that are returned
```

```
As a Film Enthusiast
So that I can see the highest rated films
I want to be able to sort my list by averageVote
```

```
As a Film Enthusiast
So that I can keep up-to-date with upcoming films
I want to be able to see a list of upcoming films
```

```
As a Film Enthusiast
So that I can search upcoming films
I want to be filter upcoming films by a minimum and maximum date
```
