import React from 'react';
import DashboardSideNav from './DashboardSideNav';
import DashboardLTopNav from './DashboardLTopNav';
import DashboardRTopNav from './DashboardRTopNav';


import '../styles/top-nav.css';

export const DashboardTopNav = () => (
  <nav className="nav-bar">
    <DashboardLTopNav />
    <DashboardRTopNav />
    <DashboardSideNav />
  </nav>
);
