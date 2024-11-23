const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

// הגדרת נקודת קצה (endpoint) לקבלת בקשה
app.get('/message', (req, res) => {
    res.json({ message: 'success' });
});

// הגדרת יציאה עבור השרת
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

