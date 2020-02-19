const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});
module.exports = router;

let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));