const Platform = require('../models/PlatformModel');
const asyncHandler = require('express-async-handler');

// Platform REST API

const getPlatform = asyncHandler(async(req, res) => {
  try {
    const platforms = await Platform.find({});
    res.status(200).json(platforms);
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

const getPlatformById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const platform = await Platform.findById(id);
    res.status(200).json(platform);
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

const createPlatform = asyncHandler(async(req, res) => {
  try {
    const platform = await Platform.create(req.body);
    res.status(200).json(platform);
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

const updatePlatform = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const platform = await Platform.findByIdAndUpdate(id, req.body);
    if(!platform){
      return res.status(400).send(`Platform not found with ID ${id}`)
    }
    const updatedPlatform = await Platform.findById();
    res.status(200).json(updatedPlatform);
  }
  catch (error){
    res.status(400);
    throw new Error(error.message);
  }
})

module.exports = {
  getPlatform,
  getPlatformById, 
  createPlatform,
  updatePlatform
}