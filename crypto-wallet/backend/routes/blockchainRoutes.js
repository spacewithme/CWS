const express = require('express');
const { createEthereumWallet, getEthereumBalance } = require('../services/ethereumService');

const router = express.Router();

router.post('/wallet/ethereum', (req, res) => {
    const wallet = createEthereumWallet();
    res.json(wallet);
});

router.get('/balance/ethereum/:address', async (req, res) => {
    try {
        const balance = await getEthereumBalance(req.params.address);
        res.json({ balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
