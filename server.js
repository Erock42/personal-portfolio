const express = require('express');
const port = process.env.PORT || 5503;
const router = express.Router();
const http = require('http');

// Set maxHttpHeaderSize option to increase the maximum header size limit
const server = http.createServer({ maxHttpHeaderSize: 65536 }, app);

// Define routes and middleware here

server.listen(5503, () => {
  console.log('Server listening on port 5503');
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

//GET route
router.get('/personal-portfolio', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});
