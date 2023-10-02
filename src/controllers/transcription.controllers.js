const fs = require("fs");
const Video = require("../models/video.models");
const openaiUtils = require("../utils/openai.utils");

// Handle video transcription
exports.transcribeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const videoPath = video.filePath;

    // Transcribe the video using OpenAI Whisper
    const transcription = await openaiUtils.transcribeVideo(videoPath);

    res.status(200).json({ transcription: transcription.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};