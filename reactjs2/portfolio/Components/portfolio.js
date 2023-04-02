import React from 'react';
function Portfolio() {
    return (
      <div>
        <header>
          <h1>My Portfolio</h1>
        </header>
    
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>Hello there! I am Rachana M,currently persuing Bachelor of Engineering in Electronics and Communication stream at GSSS IETW College, Mysuru. My objective is to get an oppurtunity in an organisation where I can make the best of my potential which help in my carrier growth and organisation's growth.  </p>
    
          </section>
    
          <section id="projects">
            <h2>Projects</h2>
            <ul>
              <li><a>Water level Indicator</a></li>
              <li><a >Footstep Power Generation using Arduino</a></li>
              <li><a >Docking station for Autonomous Mobile Robot</a></li>
            </ul>
          </section>
    
          <section id="skills">
            <h2>Skills</h2>
            <ul>
              <li>C</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </section>
    
          <section id="resume">
            <h2>Resume</h2>
            <p>Download my resume <a href="#">here</a>.</p>
          </section>
    
          <section id="contact">
            <h2>Contact</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required /><br /><br />
    
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required /><br /><br />
    
              <button class='submit' type="submit">Submit</button>
              <button class='cancel' type="cancel">Cancel</button>
            </form>
          </section>
        </main>
      </div>
    );
  }
  export default Portfolio;
  