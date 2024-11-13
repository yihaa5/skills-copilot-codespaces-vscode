// Create web server
// Start server
// Create route to handle GET requests
// Create route to handle POST requests
// Create route to handle DELETE requests
// Create route to handle PUT requests

// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Start server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

// Create route to handle GET requests
app.get('/comments', (req, res) => {
    res.send('GET request to the homepage');
});

// Create route to handle POST requests
app.post('/comments', (req, res) => {
    res.send('POST request to the homepage');
});

// Create route to handle DELETE requests
app.delete('/comments', (req, res) => {
    res.send('DELETE request to the homepage');
});

// Create route to handle PUT requests
app.put('/comments', (req, res) => {
    res.send('PUT request to the homepage');
});