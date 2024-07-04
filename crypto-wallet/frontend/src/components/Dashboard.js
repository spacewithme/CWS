import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/wallet">Create Wallet</Link></li>
                <li><Link to="/balance">Check Balance</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;
