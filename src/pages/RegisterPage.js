import React, { useState } from 'react';
import './RegisterPage.css';
import userManager from '../services/UserManager';
import { useNavigate } from "react-router-dom";
import localStorageManager from '../services/LocalStorageManager';
import { useEffect } from 'react';

function RegisterPage() {
  const [username, setUsername] = useState('');
  // const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOver18, setIsOver18] = useState(false);

  const handleUsername = (event) => {
    let res = event.target.value;
    res.trim();
    setUsername(res);
    setError('');
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
            setError('Username already exists');
          }
        })
    }
  }, [username])

  useEffect(() => {
    if (username && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError('The password and confirm password must be equal.');
        setIsFormValid(false);
      }
      else {
        setIsFormValid(true);
      }
    }
    else {
      setIsFormValid(false);
    }
  }, [password, confirmPassword, username])

  useEffect(() => {
    if (!isFormValid) {
      console.log(isFormValid);
    }
  }, [isFormValid]);

  // const handleUserAge = (event) => {
  //   let res = event.target.value;
  //   setAge(res);
  // }

  const handlePass = (event) => {
    let res = event.target.value;
    setPassword(res);
    setError('');
    setIsFormValid(false);
  }

  const handleConfirmPass = (event) => {
    let res = event.target.value;
    setConfirmPassword(res);
    setError('');
    setIsFormValid(false);
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userManager.register(username, password, confirmPassword)
      .then(() => {
        navigate("/login");
        setIsFormValid(true);
        setError('');
      })
      .catch((error) => {
        localStorageManager.getItem('errorMessage')
          .then((errorMessage) => {
            setError(errorMessage);
          });
      });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleAgeCheck = (event) => {
    setIsOver18(event.target.checked);
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
        
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          onChange={handlePass}
        />
        <br />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Enter your confirm password"
          required
          onChange={handleConfirmPass}
        />
        <br />
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
        <div className='error-message' style={{ visibility: error ? 'visible' : 'hidden' }}>
          {error && error}
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
        <button className='register-btn' disabled={!isFormValid} onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;





