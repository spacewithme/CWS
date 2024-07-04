const express = require('express');
const { createEthereumWallet, getEthereumBalance } = require('../services/blockchainService');
const { createBitcoinWallet, getBitcoinBalance } = require('../services/bitcoinService');
const { createDogecoinWallet, getDogecoinBalance } = require('../services/dogecoinService');

const router = express.Router();

// Ethereum routes
router.get('/create-ethereum-wallet', (req, res) => {
    const wallet = createEthereumWallet();
    res.json(wallet);
});

router.get('/ethereum-balance/:address', async (req, res) => {
    const balance = await getEthereumBalance(req.params.address);
    res.json({ balance });
});

// Bitcoin routes
router.get('/create-bitcoin-wallet', (req, res) => {
    const wallet = createBitcoinWallet();
    res.json(wallet);
});

router.get('/bitcoin-balance/:address', async (req, res) => {
    const balance = await getBitcoinBalance(req.params.address);
    res.json({ balance });
});

// Dogecoin routes
router.get('/create-dogecoin-wallet', (req, res) => {
    const wallet = createDogecoinWallet();
    res.json(wallet);
});

router.get('/dogecoin-balance/:address', async (req, res) => {
    const balance = await getDogecoinBalance(req.params.address);
    res.json({ balance });
});

module.exports = router;
