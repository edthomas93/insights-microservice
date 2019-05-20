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

Example URL: https://api.themoviedb.org/3/discover/movie?api_key={apiKey}

So what do we want you to do? Here are some User Stories to get you started:

```
As a Film Enthusiast
So I can find a good movie to watch
I want to Search through a list of movies
```

```
As a Film Enthusiast
So I can get a sense for what to watch
I want to See the movie title, poster and an overview
```

```
As a Film Enthusiast
So I can remember what I've been browsing
I want to pick my favourite films from a list
```

```
As a Film Enthusiast
So I know which films a re good and which are bad
I want to rank movies in order
```

```
As a Film Enthusiast who can only count up to 5
So that I can remember my favourite films ever
I want to persist only my top 5 to a database
```

```
As a Film Enthusiast
So I can change my mind
I want to be able to re-order my ranking list
```

```
As a Film Enthusiast who can only count up to 5
So I can understand what is a good film or not,
I want to change a pre-determined ranking to be out of 5
```

```
As a Film Enthusiast
So I can add new films to my Top 5
Dynamically update my rankings
```
