import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {LandingTopNav} from './LandingTopNav';
import {LandingHeader} from './LandingHeader';
import {LandingIOUSection} from './LandingIOUSection';
import LoginForm from './LandingLoginForm';
import SignupForm from './LandingSignupForm';

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !==null
});
export const Landing = props => 
  props.loggedIn ? 
    (<Redirect to='/dashboard' />) :
    (<div>
      <LandingTopNav role='navigation'/>
      <LandingHeader role='banner'/>
      <div role='main'>
        <LoginForm />
        <SignupForm />
        <LandingIOUSection />
      </div>
    </div>
    );

export default connect(mapStateToProps)(Landing);