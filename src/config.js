module.exports = {
  express: {
    port: parseInt(process.env.EXPRESS_PORT, 10) || 3000
  },
  films: {
    url: process.env.FILMS_URL || 'http://localhost:4000/films'
  },
  // defines the application environment
  environment: process.env.ENVIRONMENT,
  project: process.env.NAME || process.env.npm_package_name,
  // db URIs
  db: {
    url: process.env.DB_URL || 'mongodb://user:password12@ds259806.mlab.com:59806/testfilm'
  },
  secret: 'OneDirectionAreUnderrated'
};
