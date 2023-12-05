const express = require('express');

const PORT = process.env.PORT || 3005;

const app = express();

app.listen(PORT, () => {
  console.log(`SERVER is starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.json({
    message: 'yo Seve2r',
  });
});
