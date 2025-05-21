const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public")); // Serves HTML from "public" folder

app.post("/log-ip", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("Logged IP:", ip);
  fs.appendFileSync("ips.txt", `${new Date().toISOString()} - ${ip}\n`);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
