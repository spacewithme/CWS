const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const blockchainRoutes = require('./routes/blockchainRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Replace 'YOUR_MONGODB_URI' with your actual MongoDB URI from MongoDB Compass
const uri = 'mongodb://localhost:27017/crypto_wallet';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use(express.json());

app.use('/api', blockchainRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
