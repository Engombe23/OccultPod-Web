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

const getEpisodeById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const episode = await Episode.findById(id);
    res.status(200).json(episode);
  }
  catch (error){
    console.log(error);
    res.status(400).send('Error message');
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
    console.log(error);
    res.status(400).send('Error message');
  }
})

module.exports = {
  getEpisode,
  getEpisodeById,
  updateEpisode
}