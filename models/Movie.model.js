const {model, Schema} = require('mongoose');

const MovieScheema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
})

const MovieModel = model('Movie', MovieScheema);

module.exports = MovieModel;