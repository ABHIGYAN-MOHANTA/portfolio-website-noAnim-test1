import React from "react";
import "./Home.css";
import Timeline from "./Timeline";


function Home() {
  return (
    <div className="container-fluid">
      <div className="intro col-lg-6">
        <h2>Hello! My Name is Abhigyan Mohanta.</h2>
        <h4>Beginner</h4>
        <p class="intro-p">
          I just finished up with my High School! Will be joining University
          soon. I am very passionate about Computer Science. Happy Coding!
        </p>
       
        <img
          className="profile-pic"
          src="https://pbs.twimg.com/media/Fkza1xIaEAAj5jA?format=jpg&name=large"
          alt="Profile Pic"
          width="600"
          height="600"
        ></img>
       
        <div class="intro-icons">
          <h4>Socials:</h4>
          <a href="https://twitter.com/MohantaAbhigyan" class="fa fa-twitter"> </a>
          <a href="https://github.com/ABHIGYAN-MOHANTA" class="fa fa-github"> </a>
          <a href="https://www.youtube.com/channel/UCNh2M7dsGe_iaho_JP-khCA" class="fa fa-youtube"> </a>
          <a href="https://www.linkedin.com/in/abhigyan-mohanta/" class="fa fa-linkedin"> </a>
          <a href="https://www.buymeacoffee.com/?source=fba1&utm_source=FriendlyGAd&utm_medium=BmcAdSearch&utm_campaign=April2020&gclid=EAIaIQobChMI1daJm53J-gIVVg8rCh17xAp8EAAYASAAEgK4IPD_BwE" class="fa fa-coffee"> </a>
        </div>
      </div>

      <div className="timeline col-lg-6">
        <div className="timeline-in container">
          <h1 className="timeline-heading">Experience Timeline</h1>
          <div className="timeline-inn container">
         
            <Timeline />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
