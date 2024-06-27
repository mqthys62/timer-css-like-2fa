const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/get-time-left', (req, res) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeLeft = 60 - (currentTime % 30);
  res.json({ time_left: timeLeft });
});

app.listen(port, () => {
  console.log(`Timer API running at http://localhost:${port}`);
});
