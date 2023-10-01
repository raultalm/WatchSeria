function getRating(tvShow) {
    return Number.parseFloat((tvShow.vote_average / 2).toFixed(2));
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRating, randomNumber };