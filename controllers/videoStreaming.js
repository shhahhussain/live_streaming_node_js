const fs = require("fs");

module.exports = {
  videoPlayer: async (req, res) => {
    try {
      const videoPath = "./controllers/rain.mp4";
      const videoStat = fs.statSync(videoPath);
      const fileSize = videoStat.size;
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, head);
        file.pipe(res);
      }
    } catch (error) {
      res.internalError(error);
    }
  },
};
