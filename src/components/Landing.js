import React from 'react';
import { LandingTopNav } from './LandingTopNav';
import LoginForm from './LandingLoginForm';
import { LandingHeader } from './LandingHeader';

export const Landing = () => (
  <div role='main'>
    <LandingTopNav />
    <LoginForm />
    <LandingHeader />
  </div>
);