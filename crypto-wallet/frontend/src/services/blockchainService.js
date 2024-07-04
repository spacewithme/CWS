import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blockchain';

export const createEthereumWallet = async () => {
    const response = await axios.get(`${API_URL}/create-ethereum-wallet`);
    return response.data;
};

export const getEthereumBalance = async (address) => {
    const response = await axios.get(`${API_URL}/ethereum-balance/${address}`);
    return response.data.balance;
};

export const createBitcoinWallet = async () => {
    const response = await axios.get(`${API_URL}/create-bitcoin-wallet`);
    return response.data;
};

export const getBitcoinBalance = async (address) => {
    const response = await axios.get(`${API_URL}/bitcoin-balance/${address}`);
    return response.data.balance;
};

export const createDogecoinWallet = async () => {
    const response = await axios.get(`${API_URL}/create-dogecoin-wallet`);
    return response.data;
};

export const getDogecoinBalance = async (address) => {
    const response = await axios.get(`${API_URL}/dogecoin-balance/${address}`);
    return response.data.balance;
};
