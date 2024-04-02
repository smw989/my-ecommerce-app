import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      // Remove the assignment to `response` if it's not used
      await axios.post('http://localhost:5000/register', { username, password, email });
      setMessage('User registered successfully.');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Registration failed.');
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onSwitchToLogin}>Switch to Login</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default SignupForm;