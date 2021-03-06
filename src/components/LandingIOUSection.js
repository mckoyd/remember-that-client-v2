import React from 'react';
import {connect} from 'react-redux';
import {toggleSignupModal, toggleLoginModal} from '../actions';
import '../styles/landing-iou-section.css';

const IOUImage = require('../images/landing-iou-image.jpg');
const mapStateToProps = state => ({
  loginModal: state.main.modals.loginModal,
  signupModal: state.main.modals.signupModal
});
export const LandingIOUSection = props => (
  <article className='landing-section'>
    <img className='landing-image' src={IOUImage} alt='Guy holding a dollar close up' /> 
    <div className='landing-iou'>
      <header>
        <h2>Remember IOU'S!</h2>
        <p>and UOMe'S & Receipts</p>
      </header>
      <p>
      Keep track of who you owe, who owes you, and important receipts...<br />
      Want to check it out...sign up <span onClick={() => 
          props.dispatch(toggleSignupModal())}>here</span><br/>
      Already a member? <span onClick={() => 
          props.dispatch(toggleLoginModal())}>Login</span> and checkout your dashboard...
      </p>
    </div>
  </article>
);

export default connect(mapStateToProps)(LandingIOUSection);