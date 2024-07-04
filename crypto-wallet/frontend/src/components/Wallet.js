import React, { useState } from 'react';
import { createEthereumWallet, createBitcoinWallet, createDogecoinWallet } from '../services/blockchainService';

const Wallet = () => {
    const [wallet, setWallet] = useState(null);

    const handleCreateWallet = async (type) => {
        let newWallet;
        if (type === 'ethereum') {
            newWallet = await createEthereumWallet();
        } else if (type === 'bitcoin') {
            newWallet = await createBitcoinWallet();
        } else if (type === 'dogecoin') {
            newWallet = await createDogecoinWallet();
        }
        setWallet(newWallet);
    };

    return (
        <div>
            <h2>Create Wallet</h2>
            <button onClick={() => handleCreateWallet('ethereum')}>Create Ethereum Wallet</button>
            <button onClick={() => handleCreateWallet('bitcoin')}>Create Bitcoin Wallet</button>
            <button onClick={() => handleCreateWallet('dogecoin')}>Create Dogecoin Wallet</button>
            {wallet && (
                <div>
                    <h3>Wallet Details</h3>
                    <p>Address: {wallet.address}</p>
                    <p>Private Key: {wallet.privateKey}</p>
                </div>
            )}
        </div>
    );
};

export default Wallet;
