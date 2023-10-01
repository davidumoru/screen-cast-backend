const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controllers');
const multer = require('multer'); // For handling file uploads

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload a video
router.post('/upload', upload.single('video'), videoController.uploadVideo);

// Get video by ID
router.get('/:videoId', videoController.getVideoById);

module.exports = router;