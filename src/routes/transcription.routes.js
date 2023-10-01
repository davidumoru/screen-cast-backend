const express = require('express');
const router = express.Router();
const transcriptionController = require('../controllers/transcriptionController');

// Create a transcription
router.post('/create', transcriptionController.createTranscription);

// Get transcriptions by video ID
router.get('/:videoId', transcriptionController.getTranscriptionByVideoId);

module.exports = router;
