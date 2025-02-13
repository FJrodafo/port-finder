// Import the 'http' module from Node.js, which allows creating an HTTP server.
const http = require('node:http');
// Import the 'findAvailablePort' function from the '@fjrodafo/port-finder' module to find an available port.
const { findAvailablePort } = require('@fjrodafo/port-finder');

// Set the desired port.
// It will use the value from the environment variable 'PORT' if available, otherwise, it defaults to port 3000.
const desiredPort = process.env.PORT ?? 3000;

// Create an HTTP server.
// The callback function handles incoming requests and responses.
const server = http.createServer((req, res) => {
    // Log the URL of the incoming request to the console.
    console.log('Request received!', req.url);
    // Send a response back to the client with the message 'Hello, World!'.
    res.end('Hello, World!');
});

// Call the 'findAvailablePort' function with the desired port.
// It returns a promise that resolves with an available port.
findAvailablePort(desiredPort).then(port => {
    // Once we have an available port, start the server listening on that port.
    server.listen(port, () => {
        // Log a message indicating the server is successfully listening on the available port.
        console.log(`Server listening on port http://localhost:${port}`);
    });
});
