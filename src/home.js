
import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";


import "./home.css"; // Import your CSS file

import aboutImage from "./images/about/About_Hacker.png"; // Adjust path if needed
import aboutImage2 from "./images/about/About_Event.png";
import aboutsponsors from "./images/about/About_sponsors.png";
import aboutsponsors1 from "./images/about/About_ecouncil.jpg";
import aboutsponsors2 from "./images/about/About_spark.png";
import aboutsponsors3 from "./images/about/About_hack.png";



import whocanjoinImage2 from "./images/join/join_hacker.png";

import whyjoin from "./images/join/Join_topic.png";
import whyjoinImage1 from "./images/join/Join_Hack.png";
import whyjoinImage2 from "./images/join/join_win-2.png";
import whyjoinImage3 from "./images/join/join_meet-3.png";
import whyjoinImage4 from "./images/join/join_be-4.png";

import Footer from "./footer";

import h5 from "./images/Group 1.png";
import h6 from "./images/sparkout-logo.png";




const Home = () => {

  useEffect(() => {
    const video = document.getElementById("bg-video");
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    if (video) {
      // Attempt to play the video
      video.play().catch((err) => {
        console.error("Error playing video:", err);
      });

      // Prevent fullscreen pop-out behavior
      const preventFullscreen = (e) => e.preventDefault();
      video.addEventListener("touchstart", preventFullscreen);

      return () => {
        video.removeEventListener("touchstart", preventFullscreen);
      };
    }
  }, []);
  return (

    <div class="body">

      <div class="section1" id="home">

        <div class="imageheader">
          <div class="kprlogo">
            <img class="" src="/LOGO.png" alt="kprlogo" />
          </div>
          <div class="dept">
            <img class="" src="/logo2.png" alt="dept" />
          </div>
          <div class="dept">
            <img class="" src="/logo3.png" alt="dept" />
          </div>
          <div class="dept">
            <img class="" src="/logo4.png" alt="dept" />
          </div>
          <div class="dept">
            <img src={h5} alt="Group 1" />
          </div>
          <div class="dept">
            <img src={h6} alt="Group 1" />
          </div>
        </div>
        <div class="national-container">
          <div class="nationalbox">
            <div>
              <img class="glitch-above" src="/Event-Title.png" alt="" />
            </div>
            <div>
              <img class="glitch-above2" src="/Exploitx-title.png" alt="" />
            </div>
            <div>
              <img class="glitch-above3" src="/Slogan.png" alt="" />
            </div>

          </div>
        </div>

        <div class="Notification" >
          <div class="notification-container">
            <div className="event-date-content">
              <FaCalendarAlt className="calendar-icon" />
              <span>May 26 & 27, 2026</span>
            </div>
            <div className="prizes-content">
              <p className="prizes-title">PRIZES WORTH</p>
              <p className="prizes-amount">₹50,000</p>
              <p className="reg-fee">Registration Fee: ₹500 per head</p>
            </div>
          </div>
        </div>

        <div class="btn">
          <a href="https://forms.gle/9B3RfX7jd4iyk9J58" target="_blank" rel="noopener noreferrer">
            <img src="Reg_btn.png" alt="Register" />
          </a>
        </div>
        <div className="hero-image">
          <img src="/ctf_flag.png" alt="CTF Cybersecurity Competition" />
        </div>
      </div>




      <video autoPlay muted loop playsInline id="bg-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>





      {/* About Section */}
      <section className="aboutt" id="about">
        <section className="about">
          <div className="about-content">
            <div className="about-image">
              <img src={aboutImage} alt="Hacker details" />
            </div>
            <div className="about-image2">
              <img src={aboutImage2} alt="Event details" />
            </div>
          </div>
          <div className="aboutsponsors">
            <img src={aboutsponsors} alt="Sponsors" />
          </div>

          <div className="about-content2">
            <div className="sponsors1">
              <img src={aboutsponsors1} alt="E-council" />
            </div>
            <div className="sponsors2">
              <img src={aboutsponsors2} alt="Spark" />
            </div>
            <div className="sponsors3">
              <img src={aboutsponsors3} alt="Hack" />
            </div>
          </div>

        </section>
      </section>

      <section className="countdown" id="register">
        <a
          href="https://logwork.com/countdown-timer"
          className="countdown-timer"
          data-timezone="Asia/Kolkata"
          data-date="2026-05-20 23:00"
          style={{ display: "block", marginTop: "20px", fontSize: "18px", fontWeight: "bold", color: "#14114f" }}
        >
          Registration Deadline
        </a>
        <div class="countdownregisbtn">
          <a href="https://forms.gle/9B3RfX7jd4iyk9J58" target="_blank" rel="noopener noreferrer">
            <img src="Reg_btn.png" alt="Register" />
          </a>
        </div>
        <div className="event-info">
          <p>DON'T HESITATE TO JOIN US</p>
          <p className="event-date"><strong>26, 27 May</strong> 2026</p>
        </div>
      </section>

      <section className="whocan" id="who-can-join">
        <div className="whocanjoin-title">
          WHO CAN JOIN <span className="highlight-ctf">&lt;/THE CTF&gt;</span>
        </div>
        <div className="whocanjoin-content">
          <div className="whocanjoin-text">
            <p>
              This CTF is for all infosec beginners, cybersecurity enthusiasts, and anyone eager to test their skills while saving the planet.
            </p>
            <p>
              The competition is open to students. Teams must have 2 to 4 members. Any form of cheating, collusion, or unethical behavior will lead to disqualification. Attacking event infrastructure or sharing flags and solutions with other teams is strictly prohibited.
            </p>
          </div>
          <div className="whocanjoin-image2">
            <img src={whocanjoinImage2} alt="Join hacker" />
          </div>
        </div>
      </section>



      <section className="countdown">
        <div className="whyjoin">
          <img src={whyjoin} alt="Why join" />
        </div>
        <div className="about-content2">
          <div className="sponsors1">
            <img src={whyjoinImage1} alt="Why join hack" />
          </div>
          <div className="sponsors2">
            <img src={whyjoinImage2} alt="Why join win" />
          </div>
          <div className="sponsors3">
            <img src={whyjoinImage3} alt="Why join meet" />
          </div>
          <div className="sponsors3">
            <img src={whyjoinImage4} alt="Why join be" />
          </div>
        </div>

        <div class="countdownregisbtn">
          <a href="https://forms.gle/9B3RfX7jd4iyk9J58" target="_blank" rel="noopener noreferrer">
            <img src="Reg_btn.png" alt="Register" />
          </a>
        </div>

      </section>




      <section className="footerimage">
        <div className="footer1">
          <h2 className="prize-title">PRIZE POOL</h2>
          <h1 className="prize-amount">INR: 50,000</h1>
        </div>
      </section>







      <Footer />
    </div >
  );
};

export default Home;
