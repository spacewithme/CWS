import React, { useState } from 'react';
import { getEthereumBalance, getBitcoinBalance, getDogecoinBalance } from '../services/blockchainService';

const Balance = () => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(null);

    const handleCheckBalance = async (type) => {
        let newBalance;
        if (type === 'ethereum') {
            newBalance = await getEthereumBalance(address);
        } else if (type === 'bitcoin') {
            newBalance = await getBitcoinBalance(address);
        } else if (type === 'dogecoin') {
            newBalance = await getDogecoinBalance(address);
        }
        setBalance(newBalance);
    };

    return (
        <div>
            <h2>Check Balance</h2>
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <button onClick={() => handleCheckBalance('ethereum')}>Check Ethereum Balance</button>
            <button onClick={() => handleCheckBalance('bitcoin')}>Check Bitcoin Balance</button>
            <button onClick={() => handleCheckBalance('dogecoin')}>Check Dogecoin Balance</button>
            {balance !== null && (
                <div>
                    <h3>Balance</h3>
                    <p>{balance}</p>
                </div>
            )}
        </div>
    );
};

export default Balance;
