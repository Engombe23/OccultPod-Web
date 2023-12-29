const Episode = require('../models/EpisodeModel');
const asyncHandler = require('express-async-handler');

// Episode Rest API

const getEpisode = asyncHandler(async(req, res) => {
  try {
    const episodes = await Episode.find(({}));
    res.status(200).json(episodes);
  }
  catch (error){
    console.log(error);
    res.status(400).send('Error message');
  }
})

const getEpisodeBySlug = asyncHandler(async(req, res) => {
  try {
    const {slug} = req.params;
    const episode = await Episode.find(slug);
    res.status(200).json(episode);
  }
  catch (error){
    console.log(error);
    res.status(400).send('Error message');
  }
})

module.exports = {
  getEpisode,
  getEpisodeBySlug
}