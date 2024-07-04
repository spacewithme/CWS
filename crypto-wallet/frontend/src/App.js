import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Wallet from './components/Wallet';
import Balance from './components/Balance';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/wallet" component={Wallet} />
                <Route path="/balance" component={Balance} />
            </Switch>
        </Router>
    );
};

export default App;
