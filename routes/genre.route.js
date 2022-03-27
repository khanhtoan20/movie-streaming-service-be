import express from 'express';
import genreController from '../controller/genre.controller.js';
import genreFetch from '../fetches/genre.fetch.js';
var router = express.Router();


router.get('/fetch', async (req, res, next) => {
    let result = await genreFetch.getAllGenres();
    return res.json(result);
})

router.get('/', async (req, res, next) => {
    let result = await genreController.getAllGenre();
    return res.json(result);
})

router.post('/', async (req, res, next) => {
    let name = req.body.name;
    let result = await genreController.save(name);
    return res.json(result);
})

export { router as genreRouter }
