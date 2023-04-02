import React from 'react';
class Home extends React.Component {
render() {
    return(
      <div>
          <header>
          <h2> PHOTO DUMP </h2>
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav> 
          </header>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <center>
                <div class = "bx">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArDSjtx6IPBuMGsyf1KCD0VsNIo_TaUdblg&usqp=CAU" alt="Example Image" width={500}></img>
                </div>
                  <h2>BEAUTIFUL FLOWERS</h2>
                  <p>We are a team of professional photographers who specialize in capturing the beauty of the world through our lenses.</p>
                  <a href="#gallery">View Our Work</a></center>
              <div class="gallery" id="gallery">
                  <h3>My Work</h3>
                  <br></br>
                  <div class="gallery-container">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSontC2ErkSdb2igLkguhZNFp3ZyQasNoLdA&usqp=CAU" alt="Example Image"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63RLdy5xXq9EXFh-Sk9PG4ikqnMRZK-S9lg&usqp=CAU" alt="Example Image"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMiWK1bkq-seUP-p8d3bxoemrgdSOQS9IEg&usqp=CAU" alt="Example Image"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oR-AEi7DngzLRVS4uRuXtAkbKXEtjyVlpw&usqp=CAU" alt="Example Image"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYl_9fatjGklX2LcfHvGP7GTjJdvghwUvZQ&usqp=CAU" alt="Example Image"></img>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkDB3WBoOWIcDmOdhBEyRp2lgm8FpBfFNtg&usqp=CAU" alt="Example Image"></img>
               </div>
              </div>
         </div>
  )
}
}
export default Home;