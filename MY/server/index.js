const express = require('express');
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use contact routes
app.use('/api/v1/portfolio', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
