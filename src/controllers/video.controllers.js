const Video = require('../models/video.models');
const fileUtils = require('../utils/file.utils');

// Handle video upload
exports.uploadVideo = async (req, res) => {
  try {
    const { file } = req;
    const filePath = await fileUtils.saveFile(file);
    
    const video = new Video({ filePath });
    await video.save();

    res.status(201).json({ message: 'Video uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    res.status(200).json(video);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Video not found' });
  }
};
