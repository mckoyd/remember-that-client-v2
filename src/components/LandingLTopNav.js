import React from 'react';
import {connect} from 'react-redux';
import {toggleLoginModal, toggleSignupModal} from '../actions';
import '../styles/landing-left-nav.css';

const logo = require('../images/rememberThatIcon.ico');
export const LandingLTopNav = props => (
  <div className='left-nav'>
    <img src={logo}
      alt='A post-it note with `Remember THAT!` written in bold'
      onClick={() => props.dispatch(toggleLoginModal())} />
    <p onClick={() => props.dispatch(toggleSignupModal())}>
      RememberTHAT!
    </p>
  </div>
);

export default connect()(LandingLTopNav);