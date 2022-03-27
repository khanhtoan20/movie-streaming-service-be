import express from 'express';
import movieSchema from '../models/movie.js';

var router = express.Router();

router.post('/', async (req, res, next) => {
    const genre = new movieSchema(req.body);
    genre.save(function (err) {
        console.log(err);
    });
})

export { router as genreRouter }
