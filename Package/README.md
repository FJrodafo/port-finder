## Install it!

```shell
npm i @fjrodafo/port-finder
```

## Run it!

```js
// Import the module
const { findAvailablePort } = require('@fjrodafo/port-finder');
```

```js
// It will find an available port in case port 3000 is busy
findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});
```

## Environment variable

```js
// You can create an environment variable for advanced use
const desiredPort = process.env.PORT ?? 3000;

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});
```

## Links

Contribute to the repository on [GitHub](https://github.com/FJrodafo/port-finder).

Check out this package on [GitHub Packages](https://github.com/FJrodafo/port-finder/pkgs/npm/port-finder) or [npmjs](https://www.npmjs.com/package/@fjrodafo/port-finder) website!