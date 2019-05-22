const format = (data) => {
    return data.results.map((film) => {
        return {
            id: film.id,
            name: film.title,
            averageVote: film.vote_average,
            description: film.overview
        };
    });
};
  
module.exports = {
    format
};
