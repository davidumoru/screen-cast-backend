const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.transcribeVideo = async (videoPath) => {
  try {
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(videoPath),
      model: "whisper-1",
    });

    return transcription;
  } catch (error) {
    throw error;
  }
};
