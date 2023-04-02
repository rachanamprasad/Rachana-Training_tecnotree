import React, { useState } from 'react';

function MyFormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Gender: ${gender}`);
    console.log(`Date of Birth: ${dateOfBirth}`);
    console.log(`Place: ${place}`);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div><br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div><br/>
        <div>
          <label>Place:</label>
          <input type="place" value={place} onChange={(event) => setPlace(event.target.value)} />
        </div><br/>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
        </div><br/>
          <label>Gender:</label>
          <input type="radio" value="male" checked={gender === 'male'} onChange={(event) => setGender(event.target.value)} />
          <label>Male</label>
          <input type="radio" value="female" checked={gender === 'female'} onChange={(event) => setGender(event.target.value)} />
          <label>Female</label><br />
        <button class="submit" type="submit">Submit</button>
        <button class="cancel" type="cancel">Cancel</button>

      </form>
    </div>
  );
}

export default MyFormPage;
