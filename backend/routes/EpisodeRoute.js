const express = require('express');
const router = express.Router();
const {getEpisode, getEpisodeBySlug} = require('../controllers/EpisodeController');

router.get('/', getEpisode);
router.get('/:slug', getEpisodeBySlug);

module.exports = router;
