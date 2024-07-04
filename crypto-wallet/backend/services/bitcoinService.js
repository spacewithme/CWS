const bitcoin = require('bitcoinjs-lib');
const fetch = require('node-fetch');
const bitcoinNetwork = bitcoin.networks.bitcoin;

const createBitcoinWallet = () => {
    const keyPair = bitcoin.ECPair.makeRandom({ network: bitcoinNetwork });
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoinNetwork });
    const privateKey = keyPair.toWIF();
    return { address, privateKey };
};

const getBitcoinBalance = async (address) => {
    const response = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`);
    const data = await response.json();
    return data.balance / 1e8; // Convert satoshi to BTC
};

module.exports = { createBitcoinWallet, getBitcoinBalance };
