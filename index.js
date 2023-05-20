const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
    res.json(['a', 'b', 'c']);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port);

console.log(`App listening on ${port}`);