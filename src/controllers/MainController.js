const ytdl = require("ytdl-core");
const fs = require("fs");

module.exports = class MainController {
  static async send(req, res) {
    const { url } = req.query;

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    return ytdl(url, {
      format: "mp4",
      filter: "videoandaudio",
      quality: "highestaudio",
    }).pipe(res);
  }
};
