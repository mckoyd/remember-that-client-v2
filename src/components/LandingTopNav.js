import React from 'react';
import { LandingLTopNav } from './LandingLTopNav';
import LandingRTopNav from './LandingRTopNav';
import '../styles/top-nav.css';

export const LandingTopNav = () => (
  <nav className='nav-bar'>
    <LandingLTopNav />
    <LandingRTopNav />
  </nav>
);