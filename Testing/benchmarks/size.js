// Import the 'fs' module for interacting with the file system.
const fs = require('fs');
// Import the 'path' module for handling and transforming file paths.
const path = require('path');

// Function to calculate the total size of a folder and its contents.
function calculateFolderSize(directoryPath) {
    // Initialize total size to 0.
    let totalSize = 0;

    // Helper function to read the directory and its contents recursively.
    function readDirectory(directory) {
        // Get all files and subdirectories in the current directory.
        const files = fs.readdirSync(directory);

        // Iterate over each file or directory in the list.
        for (const file of files) {
            // Construct the full path of the file or subdirectory.
            const filePath = path.join(directory, file);
            // Get the file's statistics (e.g., size, type).
            const fileStats = fs.statSync(filePath);

            // If the current item is a directory, recursively read its contents.
            if (fileStats.isDirectory()) {
                readDirectory(filePath);
            }
            else {
                // If it's a file, add its size to the total size.
                totalSize += fileStats.size;
            }
        }
    }

    // Start reading the directory provided in the 'directoryPath' argument.
    readDirectory(directoryPath);
    // Return the total size in bytes.
    return totalSize;
}

// Set the package name and construct the directory path of the package in the 'node_modules' folder.
const packageName = '@fjrodafo/port-finder';
const packageDirectory = './node_modules/' + packageName;
// Calculate the size of the package directory in bytes using the 'calculateFolderSize' function.
const sizeInBytes = calculateFolderSize(packageDirectory);
// Convert the size from bytes to kilobytes.
const sizeInKilobytes = sizeInBytes / 1024;

// Log the size of the package in kilobytes, formatted with bold text using ANSI escape codes.
console.log(`'${packageName}' package size: \x1B[1m${sizeInKilobytes.toFixed(2)}\x1B[22m kB`);
