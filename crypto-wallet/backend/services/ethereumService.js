const Web3 = require('web3');

// Replace 'YOUR_INFURA_PROJECT_ID' with your actual Infura project ID
const web3 = new Web3('https://mainnet.infura.io/v3/8a9b30ac388647138789057e70c12652');

const createEthereumWallet = () => {
    const account = web3.eth.accounts.create();
    return account;
};

const getEthereumBalance = async (address) => {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
};

module.exports = { createEthereumWallet, getEthereumBalance };
