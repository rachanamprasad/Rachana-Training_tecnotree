import React from "react";


const EduPlatform = () => {
  return (
    <div>
        <header>
        <h1>Welcome to our Online Education Platform</h1>
        <p>Learn new skills from top experts in your field</p>
      </header>

      <nav>
        <ul>
        <li><a href="#">Home</a><br/></li>
        <li><a href="#">Courses</a><br/></li>
        <li> <a href="#">Profile</a><br/></li>
        <li> <a href="#">Logout</a><br/></li>
        </ul>
      </nav>
      
      <main>
        <h2>Featured Courses</h2>
    
           <form>
            <div class='course-box'>
            <h3>Web Development</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXErKY1niM3r_zWzsXWWXDfYA-OIYvqGBzw&usqp=CAU" width='200' heigth='200'/>
            <p>
              <a href='https://www.google.com/search?q=web+development+wikipedia&rlz=1C1GCEB_enIN1045IN1045&oq=web+deve&aqs=chrome.2.69i59l3j69i57j0i131i433i512j69i60l2j69i61.6159j0j7&sourceid=chrome&ie=UTF-8'>Description of course</a>
            </p>
            <button>Enroll Now</button>
            </div>
            <div class='course-box2'>
            <h3>Computer Programming</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxmHAuvf5h_2Q-n1i8s2Wc5VTLSHDSsHkmg&usqp=CAU" width='200' height='140'/>
            <p>
              <a href='https://en.wikipedia.org/wiki/Computer_programming'>Description of course</a>
            </p>
            <button>Enroll Now</button>
            </div>
            <div class='course-box3'>
            <h3>Cyber Security</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAIfoKfEe24nory4tdr7iBs5VI31HaR-h_bjdReRpZYFDp8AC-kVyjUy2kify7M9GiHg&usqp=CAU" width='200' height='140'/>
            <p>
              <a href="https://en.wikipedia.org/wiki/Computer_security">Description of course</a>
            </p>
            <button>Enroll Now</button>
            </div>
            </form>
      
      </main>
      <footer>
        <p>&copy; 2023 Online Education Platform</p>
      </footer>
    </div>
  );
};

export default EduPlatform;
