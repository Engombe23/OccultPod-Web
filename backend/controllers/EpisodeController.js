const Episode = require('../models/EpisodeModel');
const asyncHandler = require('express-async-handler');

// Episode Rest API

const getEpisode = asyncHandler(async(req, res) => {
  try {
    const episodes = await Episode.find(({})).sort({pubDate: -1});
    res.status(200).json(episodes);
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

const getEpisodeById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const episode = await Episode.findById(id);
    res.status(200).json(episode);
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

const updateEpisode = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const episode = await Episode.findByIdAndUpdate(id, req.body);
    if(!episode){
      return res.status(400).send(`Episode not found with ID ${id}`)
    }
    const updatedEpisode = await Episode.findById();
    res.status(200).json(updatedEpisode);
    console.log('Episode Updated');
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

module.exports = {
  getEpisode,
  getEpisodeById,
  updateEpisode
}