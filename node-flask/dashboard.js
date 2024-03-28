const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json())

app.get('/dashboard/jobs', async (req, res) => {
    try {
        const { year, month, country } = req.query
        const response = await axios.get('http://localhost:5000/Jobs', {
            params: {
                year,
                month,
                country
            }
        })
        res.json(response.data)
    } catch (error) {
        console.error('Error fetching job counts:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/dashboard/jobs/skill/:track_name', async (req, res) => {
    try {
        const { track_name } = req.params;
        const response = await axios.get(`http://localhost:5000/Jobs/Skill/${track_name}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching most frequent skills:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(port, () => {
    console.log(`Node.js server listening at http://localhost:${port}`);
});