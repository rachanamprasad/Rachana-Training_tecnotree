import React, { useState } from 'react';

function PasswordChecklist() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);
  const isLengthValid = password.length >= 8;

  const isPasswordValid =
    hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isLengthValid;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isPasswordValid) {
      alert('Invalid Password!! Try again');
    } else {
      alert('Password is valid!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Please enter your password</h1>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} /><br /><br />
        <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
      </label><br />
      <button type="button" onClick={handleTogglePassword}>{showPassword ? 'Hide' : 'Show'}</button>
      <button type="submit">Submit</button>
      <button type="cancel">Cancel</button>
    </form>
  );
}

export default PasswordChecklist;