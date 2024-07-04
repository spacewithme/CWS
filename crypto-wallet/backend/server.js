const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const blockchainRoutes = require('./routes/blockchainRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/blockchain', blockchainRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'your_mongo_uri_here';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
