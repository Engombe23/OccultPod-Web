const express = require('express');
const router = express.Router();
const {getPlatform, getPlatformById, createPlatform, updatePlatform} = require('../controllers/PlatformController');

router.get('/', getPlatform);
router.get('/:id', getPlatformById);
router.post('/', createPlatform);
router.put(':/id', updatePlatform);

module.exports = router;