const express = require('express');
const router = express.Router();
const transcriptionController = require('../controllers/transcription.controllers');

router.post("/create/:videoId", transcriptionController.transcribeVideo);
router.get("/:videoId", transcriptionController.getTranscription);

module.exports = router;
