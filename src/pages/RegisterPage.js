import React, { useState } from 'react';
import './RegisterPage.css';
import userManager from '../services/UserManager';
import { useNavigate } from "react-router-dom";
import localStorageManager from '../services/LocalStorageManager';
import { useEffect } from 'react';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPassMessage, setConfirmPassMessage] = useState('');
  const [isOver18, setIsOver18] = useState(false);

  const handleUsername = (event) => {
    let res = event.target.value;
    res.trim();
    setUsername(res);

    if (res.length < 3) {
      setUsernameMessage('Username must be at least 3 characters.');
    } else {
      setUsernameMessage('');
    }
  }

  useEffect(() => {
    if (username) {
      localStorageManager.getItem('users')
        .then((users) => {
          let existingUser = users && users.find(user => user.username === username);
          if (!existingUser) {
            setUsername(username);
          } else {
            setUsername('');
            setUsernameMessage('Username is already taken.');
          }
        })
    }
  }, [username])

  useEffect(() => {
    if (password === confirmPassword) {
      setConfirmPassMessage('');
    }
  }, [password, confirmPassword, confirmPassMessage]);

  const handlePass = (event) => {
    let res = event.target.value;
    setPassword(res);
    if (res.length < 6 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/.test(res)) {
      setPasswordMessage('Password must be at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.');
    } else {
      setPasswordMessage('');
    }
  }

  const handleConfirmPass = (event) => {
    let res = event.target.value;
    setConfirmPassword(res);
  }

  const navigate = useNavigate();

  const handleAgeCheck = (event) => {
    setIsOver18(event.target.checked);
  };
  useEffect(() => {
    if (!isOver18) {
      console.log(isOver18);
    }
  }, [isOver18])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOver18 && userManager.register(username, password, confirmPassword)) {
      userManager.register(username, password, confirmPassword);
      navigate("/login");
    }
    else {
      if (password !== confirmPassword) {
        setConfirmPassMessage('The password and confirm password must be equal.');
      }
    }
  };

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <form>
        <input
          type="username"
          id="username"
          placeholder="Enter your username"
          required
          onChange={handleUsername}
        />
        <div className='username-message' style={{ visibility: usernameMessage ? 'visible' : 'hidden' }}>
          {usernameMessage && usernameMessage}
        </div>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          onChange={handlePass}
        />
        <div className='pass-message' style={{ visibility: passwordMessage ? 'visible' : 'hidden' }}>
          {passwordMessage && passwordMessage}
        </div>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Enter your confirm password"
          required
          onChange={handleConfirmPass}
        />
        <div className='username-message' style={{ visibility: confirmPassMessage ? 'visible' : 'hidden' }}>
          {confirmPassMessage && confirmPassMessage}
        </div>
        <div className='checkbox-container'>
          <input
            type="checkbox"
            id="ageCheckbox"
            className="checkbox-input"
            required
            onChange={handleAgeCheck}
            disabled={!username || !password || !confirmPassword}
          />
          <label htmlFor="ageCheckbox" className="checkbox-label">I am over 18 years old</label>
        </div>
        <button className='register-btn' onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
