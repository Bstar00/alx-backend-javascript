const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP response header with a status code of 200 (OK)
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app so it can be used in other modules
module.exports = app;
