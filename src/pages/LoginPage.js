import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userManager from '../services/UserManager';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function LoginPage({handleLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const {id} = useParams();

    const handleUsername = (event) => {
        let res = event.target.value;
        res.trim();
        setUsername(res);
        setError('');
    }

    const handlePass = (event) => {
        let res = event.target.value;
        setPassword(res);
        setError('');
    }

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        userManager.login(username.trim(), password).then((res) => {
            if(res){
                navigate("/home");
                setIsFormValid(true);
                setError('');
                handleLogin();
            }else{
                setIsFormValid(false);
                setError('There is not user with these phragments.');
            }
        })
    };

    useEffect(() => {
        if (!isFormValid) {
            console.log(isFormValid);
        }
    }, [isFormValid]);

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form>
                <input
                    type="username"
                    id="username"
                    placeholder="Enter your username"
                    required
                    onChange={handleUsername}
                />
                <br />
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={handlePass}
                />
                <br />
                <div className='error-message' style={{ visibility: error ? 'visible' : 'hidden' }}>
                    {error && error}
                </div>
                <button className='login-btn' onClick={handleSubmit}>Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">New Registration</Link></p>
        </div>
    );
}

export default LoginPage;





