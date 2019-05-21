const format = (data) => {
    let result = [];

    data.results.forEach((film) => {
        const details = {
            id: film.id,
            name: film.title,
            averageVote: film.vote_average,
            description: film.overview
        };
        result.push(details);
    });
    return result;
};
  
module.exports = {
    format
};