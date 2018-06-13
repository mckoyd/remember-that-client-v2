import React from 'react';
import {connect} from 'react-redux';
import '../styles/landing-left-nav.css';

const logo = require('../images/rememberThatIcon.ico');

export const DashboardLTopNav = () => (
  <div className='left-nav'>
    <img src={logo}
      alt='A post-it note with `Remember THAT!` written in bold'
      onClick={() => console.log('button works')} />
    <p onClick={() => console.log('button works')}>
      RememberTHAT!
    </p>
  </div>
);

export default connect()(DashboardLTopNav);