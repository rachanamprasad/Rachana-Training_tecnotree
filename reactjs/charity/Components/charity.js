import React from 'react';
import { useState } from "react";
function About() {
    
    const [donationAmount, setDonationAmount] = useState(0);

    const handleDonation = (event) => {
        setDonationAmount(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Thank you for donating ${donationAmount} dollars!`);
      }
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <br></br><br></br>
            <center>
            <h1>HOME</h1>
            </center>
            <div>
            <center><img src="https://stories.thriveglobal.in/wp-content/uploads/2020/08/anoir-chafik-2_3c4dIFYFU-unsplash.jpg" alt="Example Image" width={730} height={400}></img></center>
            </div>
            <h1>Paws for Love</h1>
            <p>Charity Name was founded in 2020 with the goal of helping street dog in need. We believe that every dog has a chance to live a happy and healthy life.</p>
            <center>
            <img src="https://topleadindia.com/wp-content/uploads/2020/03/street-dog-thumb.jpg" alt="Example Image" width={530} height={300}></img>
            </center>
            <h1>Donate to Charity Name</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="donation-amount">Donation Amount:</label>
                <input type="number" id="donation-amount" value={donationAmount} onChange={handleDonation} />
                <button type="submit">Donate</button>
            </form>
            <footer>
                <p>&copy; 2023 Reliance</p>
            </footer>
        </main>
    );
}

export default About;