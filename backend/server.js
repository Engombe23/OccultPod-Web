require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const episodeRoute = require('./routes/EpisodeRoute');
const platformRoute = require('./routes/PlatformRoute');
const errorMiddleware = require('./middleware/ErrorMiddleware');
const path = require('path');

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
const port = process.env.PORT || 5000;
server.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});  

//Routes
server.use('/api/episodes', episodeRoute);
server.use('/api/platforms', platformRoute);

//Middleware
server.use(errorMiddleware);

// Deployment
const buildPath = path.join(__dirname, "../frontend/build");

if(process.env.NODE_ENV === 'production'){
  server.use(express.static(buildPath));

  server.get('*/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  server.get('/', (req, res) => {
    res.send("API is running...");
  })
}