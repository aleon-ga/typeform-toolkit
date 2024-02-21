require('dotenv').config();
const express = require('express');
const cors = require('cors');

// App init
const app = express();

// Middlewares
app.use([
    cors(),
    express.json(),
    express.urlencoded({ extended: true })
]);

// Server port
const port = process.env.PORT || 3000;

// Start server
const server = app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = { app, server };