import React, { useState } from 'react';
import axios from 'axios';

const Wallet = () => {
    const [wallet, setWallet] = useState(null);

    const createWallet = async () => {
        try {
            const response = await axios.post('/api/wallet/ethereum');
            setWallet(response.data);
        } catch (error) {
            console.error('Error creating wallet', error);
        }
    };

    return (
        <div>
            <h1>Create Ethereum Wallet</h1>
            <button onClick={createWallet}>Create Wallet</button>
            {wallet && (
                <div>
                    <p>Address: {wallet.address}</p>
                    <p>Private Key: {wallet.privateKey}</p>
                </div>
            )}
        </div>
    );
};

export default Wallet;
