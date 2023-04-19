import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';
import userManager from '../services/UserManager';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const handleUsername = (event) =>{
        let res = event.target.value;
        setUsername(res);
    }
    
    const handlePass = (event) =>{
        let res = event.target.value;
        setPassword(res);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userManager.login(username, password);
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="username"
                    id="username"
                    placeholder="Enter your username"
                    required
                    onChange={handleUsername}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={handlePass}
                />
                <br />
                <button onClick={handleSubmit} id='login-link'><Link to={'/home'}>Login</Link></button>
            </form>
            <p>Don't have an account? <Link to="/register">New Registration</Link></p>
        </div>
    );
}

export default LoginPage;




