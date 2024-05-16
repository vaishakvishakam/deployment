const express = require('express');
const app = express();
const port = 8100;

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



