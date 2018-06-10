import React from 'react';
import '../styles/landing-iou-section.css';

export const LandingIOUSection = () => (
  <article className='landing-section'>
    <img className='landing-image' src={'https://compeap.com/wp-content/uploads/remember.jpg'} alt='Post-it note with `remember` written on it' /> 
    <div className='landing-iou'>
      <header>
        <h2>Remember IOU'S!</h2>
        <p>and UOMe'S & Receipts</p>
      </header>
      <p>
      Keep track of who you owe, who owes you, and important receipts...<br />
      Sign up above...<br/>
      Already a member? Login and checkout your dashboard...
      </p>
    </div>
  </article>
);