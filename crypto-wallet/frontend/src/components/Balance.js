import React, { useState } from 'react';
import axios from 'axios';

const Balance = () => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(null);

    const getBalance = async () => {
        try {
            const response = await axios.get(`/api/balance/ethereum/${address}`);
            setBalance(response.data.balance);
        } catch (error) {
            console.error('Error fetching balance', error);
        }
    };

    return (
        <div>
            <h1>Check Ethereum Balance</h1>
            <input
                type="text"
                placeholder="Enter Ethereum Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={getBalance}>Get Balance</button>
            {balance && <p>Balance: {balance} ETH</p>}
        </div>
    );
};

export default Balance;
