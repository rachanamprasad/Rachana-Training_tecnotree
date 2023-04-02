import React, { useState } from 'react';

function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [usn, setUSN] = useState('');
  const [place, setPlace] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUSNChange = (event) => {
    setUSN(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Password: ${password}`);
    console.log(`USN: ${usn}`);
    console.log(`Place: ${place}`);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label >
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br /><br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br /><br />
      USN:
      <label>
        <input type="usn" value={usn} onChange={handleUSNChange} />
      </label>
      <br /><br />
      Place:
      <label>
        <input type="place" value={place} onChange={handlePlaceChange} />
      </label>
      <br /><br />
    

      <button id="submit" type="submit">Submit</button>
      <button id="cancel" type="cancel">Cancel</button>
    </form>
  );
}

export default LoginForm;
