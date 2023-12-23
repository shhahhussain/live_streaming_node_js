const fs = require("fs");

module.exports = {
  videoPlayer: async (req, res) => {
    try {
      const range = "0-";

      if (!range) {
        return res.internalError(new Error("Range header is missing"));
      }

      const videopath = "./controllers/rain.mp4";
      const videosize = fs.statSync(videopath).size;
      const chunksize = 1 * 1e6;
      const start = Number(range.replace(/\D/g, ""));
      const end = Math.min(start + chunksize, videosize - 1);
      const contentLength = end - start + 1;
      const headers = {
        "Content-Range": `bytes ${start}-${end}/${videosize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
      };
      res.writeHead(206, headers);
      const stream = fs.createReadStream(videopath, { start, end });
      stream.pipe(res);
    } catch (error) {
      res.internalError(error);
    }
  },
};
