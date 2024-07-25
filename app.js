const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('prabhas only has  two 1000crs + market in the indian cinema  '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
