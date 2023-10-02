const Video = require('../models/video.models');
const fileUtils = require('../utils/file.utils');
const fs = require('fs');
const path = require('path');

// Handle video upload
exports.uploadVideo = async (req, res) => {
  try {
    const { file } = req;
    const filePath = await fileUtils.saveFile(file);
    
    const video = new Video({ filePath });
    await video.save();

    res.status(201).json({
      message: 'Video uploaded successfully',
      filePath: video.filePath,
      videoId: video._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }

    const videoPath = video.filePath;
    
    // Set the appropriate content type for video files
    res.setHeader('Content-Type', 'video/mp4');
    
    // Create a read stream and pipe it to the response object
    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
