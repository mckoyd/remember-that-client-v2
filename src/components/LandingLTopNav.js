import React from 'react';
import '../styles/landing-left-nav.css';

const logo = require('../images/rememberThatIcon.ico');
export const LandingLTopNav = () => (
  <div className='left-nav'>
    <img src={logo}
      alt='A post-it note with `Remember THAT!` written in bold'
      onClick={() => console.log('`Remember THAT!` logo link ready.')} />
    <p onClick={() => console.log('`Remember THAT!` text link ready.')}>
      RememberTHAT!
    </p>
  </div>
);