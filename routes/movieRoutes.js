// routes/movieRoutes.js

const express = require('express');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movieController');
const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
