const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    MovieModel.find()
    .then((movies) => {
        res.render('movies.hbs', {movies})
    }).catch((err) => {
        next(err)
    });
});

router.get('/movies/:id', (req, res, next) => {
    const {id} = req.params;
    MovieModel.findById(id)
        .then((movie) => {
            console.log(movie);
            res.render('movie-detail.hbs', {movie})
        }).catch((err) => {
            next(err)
        });
});

module.exports = router;
