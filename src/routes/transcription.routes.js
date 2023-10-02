const express = require('express');
const router = express.Router();
const transcriptionController = require('../controllers/transcription.controllers');

router.post("/:videoId", transcriptionController.transcribeVideo);

module.exports = router;
