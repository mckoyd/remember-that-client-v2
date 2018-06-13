import React from 'react';
import {connect} from 'react-redux';
import '../styles/dashboard-header.css';

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  name: state.auth.currentUser.firstName
});
export const DashboardHeader = props => (
  <header className='dashboard-header'>
    <h1>So What Do You Need To Remember, <br/> {props.name}?</h1>
  </header>
);

export default connect(mapStateToProps)(DashboardHeader);