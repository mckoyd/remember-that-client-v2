import React from 'react';
import { connect } from 'react-redux';
import {toggleLoginModal, toggleSignupModal} from '../actions';
import '../styles/landing-right-nav.css';

const mapStateToProps = state => ({
  loginModal: state.main.modals.loginModal,
  signupModal: state.main.modals.signupModal
});
export const LandingRTopNav = props => (
  <div className='right-nav'>
    <p onClick={() => 
      props.dispatch(toggleLoginModal())}>login</p>
    <p onClick={() => 
      props.dispatch(toggleSignupModal())}>signup</p>
  </div>
);

export default connect(mapStateToProps)(LandingRTopNav);