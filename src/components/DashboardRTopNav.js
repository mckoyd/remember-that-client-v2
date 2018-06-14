import React from 'react';
import {connect} from 'react-redux';
import { toggleSideNav } from '../actions';
import '../styles/dashboard-right-nav.css';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView
});

export const DashboardRTopNav = props => {
  if (!props.dispatch) return <h1>UNCONNECTED</h1>;
  return(
    <div className="dashboard-right-nav">
      <div className="menu-icon" 
        onClick={() => props.dispatch(toggleSideNav())}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );};

export default connect(mapStateToProps)(DashboardRTopNav);