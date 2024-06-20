// models/Movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
    unique: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
