const Transcription = require('../models/transcription.models');

// Handle transcription creation
exports.createTranscription = async (req, res) => {
  try {

    res.status(201).json({ message: 'Transcription created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve transcription by video ID
exports.getTranscriptionByVideoId = async (req, res) => {
  try {

    res.status(200).json(transcriptions);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Transcriptions not found' });
  }
};
