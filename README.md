# Code Explanation

## `uploadVideo` Function

This function handles the upload of video files to the server. When a POST request is made to the `/upload` endpoint, it does the following:

1. Retrieves the uploaded video file from the req object.
2. Saves the video file to the server using the fileUtils.saveFile function. The file path of the saved video is stored in the filePath variable.
3. Creates a new instance of the Video model with the filePath and saves it to the MongoDB database.
4. Responds with a JSON object indicating that the video was uploaded successfully, including the file path and video ID.

## `getVideoById` Function

This function retrieves a video by its ID. When a GET request is made to the `/videos/:videoId` endpoint, it does the following:

1. Attempts to find the video in the MongoDB database using Video.findById.
2. If the video is not found, it responds with a 404 error.
3. If the video is found, it sets the appropriate content type for video files ('video/mp4') in the HTTP response headers.
4. Creates a read stream from the video file path and pipes it to the response object. This allows the client to stream and view the video.


# Sending Requests

Using the url `https://screencast.onrender.com/videos` in Postman.

## Uploading a Video
1. Make a POST request (`{api}/upload`)
2. In the body section, select "form-data."
3. Add a new form-data field with the key "video"
4. Click on the "Choose Files" button and select a video file from your local machine.
5. Click the "Send" button to make the POST request to upload the video.

## Retrieving a Video
1. Make a GET request (`{api}/<videoId>`)
2. In the request URL, replace `<videoId>` with the actual ID of the video you want to retrieve.
3. Click the "Send" button to make the GET request to retrieve the video.