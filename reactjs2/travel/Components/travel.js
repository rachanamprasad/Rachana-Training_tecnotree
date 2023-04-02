import React from "react";

function App() {
  return (
    <div> <header>
    <h1>Welcome to my Travel Page</h1>
  </header>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
          <li>
            <a href="#">Why choose us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
     

      <main>
        <section>
          <h2>About Us</h2>
          <p>We are a travel company who create unforgettable experiences</p>
        </section>

        <section>
          <h2>Places</h2>
          <ul>
            <li>
              Paris<br/>
              <img src='https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_667548661.png.webp' width="200" height="120"/>
            </li>
            <li>
              Switzerland<br/>
              <img src="https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg" width="200" height="120"/>
            </li>
            <li>
              Capetown<br/>
              <img src="https://assets.cntraveller.in/photos/60ba00e371c02e549cd45123/16:9/w_1024%2Cc_limit/CX02KD-cape-town-alamy-credited3-1366x768.jpg" width="200" heigth="200"/>
            </li>
            <li>
              Bali<br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDvjcqbvo96HpEj1TOxddOOIiazPktthbkA&usqp=CAU" width="200" height="120"/>
            </li>
            <li>
              Maldives<br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hM5j-br5Rb3Jymu1WmjfIO4T0lilrefaQQ&usqp=CAU" width="200" heigth="200"/>
            </li>
          </ul>
        </section>
        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>One stop solution for your travel needs</li>
            <li>Best management</li>
            <li>Excellent service</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
          <p>
            Email: <a href="mailto:info@mytravelpage.com">info@mytravelpage.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
 export default App;