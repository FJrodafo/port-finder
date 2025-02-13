// Set the package name as a string variable, representing the package to be loaded.
const packageName = '@fjrodafo/port-finder';
// Record the start time using process.hrtime() for high-resolution time measurement.
const startTime = process.hrtime();
// Require the package dynamically using the package name.
const myPackage = require(packageName);
// Record the end time after the package is loaded.
const endTime = process.hrtime(startTime);
// Calculate the time it took to load the package in milliseconds.
// 'endTime[0]' is the seconds part, and 'endTime[1]' is the nanoseconds part.
const loadTimeInMilliseconds = endTime[0] * 1000 + endTime[1] / 1e6;

// Log the loaded package object to the console.
console.log(myPackage);
// Log the loading time of the package, formatted in milliseconds and with bold text using ANSI escape codes.
console.log(`'${packageName}' loading time: \x1B[1m${loadTimeInMilliseconds.toFixed(2)}\x1B[22m ms`);
