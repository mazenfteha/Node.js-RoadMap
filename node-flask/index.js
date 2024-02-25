const express = require('express')
const axios = require('axios')

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to Fetch data from Flask API
app.get('/fetch-data', async (req, res) => {
    try {
        // Make a GET request to Python Flask API
        const response = await axios.get('http://localhost:5000/data');
        // Send the received data from Flask API as response
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to fetch a single item by id from Python Flask API
app.get('/fetch-data/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:5000/data/${id}`);
        res.send(response.data);
    } catch (error) {
        console.error( `Error fetching item with id ${id}`);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Item not found');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

// Endpoint to create a new item using Python Flask API
app.post('/create-data', async (req, res) => {
    const newItem = req.body;
    try {
        const response = await axios.post('http://localhost:5000/data', newItem);
        res.send(response.data);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to update an existing item using Python Flask API
app.put('/update-data/:id', async (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    try {
        const response = await axios.put(`http://localhost:5000/data/${id}`, updatedItem);
        res.send(response.data);
    } catch (error) {
        console.error('Error updating item:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Item not found');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

// Endpoint to delete an existing item using Python Flask API
app.delete('/delete-data/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.delete(`http://localhost:5000/data/${id}`);
        res.send(response.data);
    } catch (error) {
        console.error('Error deleting item:', error);
        if (error.response && error.response.status === 404) {
            res.status(404).send('Item not found');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

app.listen(port, () => {
    console.log(`Node.js server listening at http://localhost:${port}`);
});