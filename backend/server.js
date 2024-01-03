require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const episodeRoute = require('./routes/EpisodeRoute');
const platformRoute = require('./routes/PlatformRoute');

server.use(express.json());
server.use(cors());

const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
async function connect() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB!");
  } catch (error){
    console.error(error);
  }
}

// Basic Express server connection
const port = process.env.PORT;
server.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});  

//Routes
server.use('/api/episodes', episodeRoute);
server.use('/api/platforms', platformRoute);