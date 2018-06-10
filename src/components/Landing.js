import React from 'react';
import {LandingTopNav} from './LandingTopNav';
import {LandingHeader} from './LandingHeader';
import {LandingIOUSection} from './LandingIOUSection';
import LoginForm from './LandingLoginForm';
import SignupForm from './LandingSignupForm';

export const Landing = () => (
  <div>
    <LandingTopNav role='navigation'/>
    <LandingHeader role='banner'/>
    <div role='main'>
      <LoginForm />
      <SignupForm />
      <LandingIOUSection />
    </div>
  </div>
);