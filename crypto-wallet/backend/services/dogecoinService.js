const dogecoin = require('dogecoinjs-lib');
const fetch = require('node-fetch');
const dogecoinNetwork = dogecoin.networks.dogecoin;

const createDogecoinWallet = () => {
    const keyPair = dogecoin.ECPair.makeRandom({ network: dogecoinNetwork });
    const { address } = dogecoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: dogecoinNetwork });
    const privateKey = keyPair.toWIF();
    return { address, privateKey };
};

const getDogecoinBalance = async (address) => {
    const response = await fetch(`https://dogechain.info/api/v1/address/balance/${address}`);
    const data = await response.json();
    return data.balance;
};

module.exports = { createDogecoinWallet, getDogecoinBalance };
