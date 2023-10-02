const express = require('express');
const router = express.Router();
const transcriptionController = require('../controllers/transcription.controllers');

router.post("/create/:videoId", transcriptionController.transcribeVideo);

module.exports = router;
