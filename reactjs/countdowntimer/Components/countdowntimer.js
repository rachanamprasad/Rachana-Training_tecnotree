import { useState, useEffect } from "react";

function CountdownTimer() {
  const [countdown, setCountdown] = useState("");

  // Set the target date and time for the countdown
  const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

  useEffect(() => {
    // Update the countdown every second
    const x = setInterval(() => {

      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = countDownDate - now;

      // Calculate days, hours, minutes and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the countdown in the container
      setCountdown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      // If the countdown is over, display a message
      if (timeRemaining < 0) {
        clearInterval(x);
        setCountdown("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(x);
  }, [countDownDate]);

  return (
    <>
      <center>
        <h1>Countdown Timer</h1><br />
        <p>Countdown to New Year's Eve:2024</p><br />
        <div class="date" id="countdown">{countdown}</div><br />
      </center>
    </>
  );
}

export default CountdownTimer;
