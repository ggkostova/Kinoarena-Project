import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.scss';
import userManager from '../services/UserManager';
 
function RegisterPage() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
 
    const handleUsername = (event) =>{
        let res = event.target.value;
        setUsername(res);
    }
 
    const handleUserAge = (event) =>{
      let res = event.target.value;
      setAge(res);
    }
 
    const handlePass = (event) =>{
        let res = event.target.value;
        setPassword(res);
    }
 
    const handleConfirmPass = (event) =>{
        let res = event.target.value;
        setConfirmPassword(res);
    }
 
 
    const handleSubmit = (e) => {
      e.preventDefault();
      userManager.register(username, age, password, confirmPassword);
  };
 
  return (
    <div>
      <h1>Register</h1>
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
        <label htmlFor="age">Age:</label>
        <input  
            type="age"
            id="age" 
            placeholder="Enter your age" 
            required
            onChange={handleUserAge}
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
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input 
            type="password" 
            id="confirmPassword" 
            placeholder="Enter your confirm password" 
            required
            onChange={handleConfirmPass}
            />
        <br />
        <button className='register-btn' onClick={handleSubmit}><Link to={'/login'}>Register</Link></button>
      </form>
    </div>
  );
}
 
export default RegisterPage;





