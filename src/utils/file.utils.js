const fs = require('fs');
const path = require('path');

const videoUploadDir = path.join(__dirname, '../../public/videos');

exports.saveFile = (file) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(videoUploadDir, file.originalname);
    const fileStream = fs.createWriteStream(filePath);

    fileStream.on('error', (error) => {
      reject(error);
    });

    fileStream.on('finish', () => {
      resolve(filePath);
    });

    fileStream.end(file.buffer);
  });
};
