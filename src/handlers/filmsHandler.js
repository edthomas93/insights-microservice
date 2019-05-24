const format = data => data.results.map(film => ({
  id: film.id,
  name: film.title,
  averageVote: film.vote_average,
  description: film.overview
}));

module.exports = {
  format
};
