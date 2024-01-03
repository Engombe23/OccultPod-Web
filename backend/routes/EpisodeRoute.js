const express = require('express');
const router = express.Router();
const {getEpisode, getEpisodeById, updateEpisode} = require('../controllers/EpisodeController');

router.get('/', getEpisode);
router.get('/:id', getEpisodeById);
router.put('/:id', updateEpisode);

module.exports = router;
