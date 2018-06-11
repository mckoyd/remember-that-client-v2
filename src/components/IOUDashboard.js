import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './RequiresLogin';
import { clearAuth, clearUser } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  console.log(currentUser);
  return {
    username: currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};
export class IOUDashboard extends React.Component{
  render(){
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <button onClick={() => {
          this.props.dispatch(clearAuth()); this.props.dispatch(clearUser());
          clearAuthToken();
        }}>Log out</button>
      </div>
    );
  }
}

export default requiresLogin()(connect(mapStateToProps)(IOUDashboard));