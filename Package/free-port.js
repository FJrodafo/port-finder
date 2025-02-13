// Import the 'net' module from Node.js, which allows creating TCP servers and clients.
const net = require('node:net');

// Function that returns a promise resolving with an available port.
// The 'desiredPort' parameter is the port that the user wants to check if it's available.
function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {
        // Create a TCP server using the 'net' module.
        const server = net.createServer();

        // The server tries to listen on the desired port.
        server.listen(desiredPort, () => {
            // Once the server is listening, we get the actual port in use.
            // This is useful in case the desired port is not available, and Node.js assigns another port.
            const { port } = server.address();
            // Close the server after obtaining the available port.
            server.close(() => {
                // Resolve the promise with the available port.
                resolve(port);
            });
        });

        // If an error occurs, it is handled through the 'error' event.
        server.on('error', (err) => {
            // If the error is 'EADDRINUSE', it means the port is already in use.
            // In this case, we recursively call 'findAvailablePort' passing 0 to let the system automatically assign an available port.
            if (err.code === 'EADDRINUSE') {
                // Resolve with an available port.
                findAvailablePort(0).then(port => resolve(port));
            }
            else {
                // If the error is different, we reject the promise with the error.
                reject(err);
            }
        });
    });
}

// Export the 'findAvailablePort' function so it can be used in other files.
module.exports = { findAvailablePort };
