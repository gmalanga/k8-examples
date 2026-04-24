const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ text: "Hello from the Express Backend!" });
});

app.listen(5000, () => console.log('Server running on port 5000'));