const mongoose = require('mongoose');

const transcriptionSchema = new mongoose.Schema({
    videoId: mongoose.Schema.Types.ObjectId,
    text: String,
  });
  
  const Transcription = mongoose.model('Transcription', transcriptionSchema);
  
  module.exports = Transcription;