import React from 'react';
import { LandingTopNav } from './LandingTopNav';
import LoginForm from './LandingLoginForm';
import { LandingHeader } from './LandingHeader';

export const Landing = () => (
  <div>
    <LandingTopNav role='navigation'/>
    <LandingHeader role='banner'/>
    <div role='main'>
      <LoginForm />
    </div>
  </div>
);