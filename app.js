const express = require('express');
const app = express();
const port = 3000

const multiRoutes = require('./routes/multiplicateRoutes.js');

app.use('/multiplicate', multiRoutes);

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}/`);
});

