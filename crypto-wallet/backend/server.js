const express = require('express');
const cors = require('cors');
const blockchainRoutes = require('./routes/blockchainRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', blockchainRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
