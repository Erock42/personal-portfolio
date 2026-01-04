const express = require('express');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 5503;

// Create an Express app
const app = express();

// Serve static files from the build folder (compiled React app)
// Serve build at root (optional) and at /personal-portfolio to match built asset URLs
app.use(express.static(path.join(__dirname, 'build')));
app.use('/personal-portfolio', express.static(path.join(__dirname, 'build')));

// Example API route (optional)
app.get('/personal-portfolio', (req, res) => {
  res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Endpoint to receive web-vitals metrics from the frontend for local testing
app.post('/analytics', express.json(), (req, res) => {
  // For now just log the metrics server-side so tools like Insomnia can inspect them
  console.log('Received web-vitals metric:', req.body);
  res.status(204).end();
});

// For single-page apps, serve index.html for any other route
// Fallback for SPA: serve index.html for any route not handled above
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Increase max header size and create HTTP server
const server = http.createServer({ maxHttpHeaderSize: 65536 }, app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
