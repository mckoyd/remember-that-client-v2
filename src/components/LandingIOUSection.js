import React from 'react';
import '../styles/landing-iou-section.css';

const IOUImage = require('../images/landing-iou-image.jpg');
export const LandingIOUSection = () => (
  <article className='landing-section'>
    <img className='landing-image' src={IOUImage} alt='Guy holding a dollar close up' /> 
    <div className='landing-iou'>
      <header>
        <h2>Remember IOU'S!</h2>
        <p>and UOMe'S & Receipts</p>
      </header>
      <p>
      Keep track of who you owe, who owes you, and important receipts...<br />
      Want to check it out...sign up <span>here</span><br/>
      Already a member? <span>Login</span> and checkout your dashboard...
      </p>
    </div>
  </article>
);