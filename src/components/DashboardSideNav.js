import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { toggleSideNav } from '../actions';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../styles/dashboard-side-nav.css';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView,
  username: state.auth.currentUser.username
});

export class DashboardSideNav extends React.Component{ 
  render(){
    return(
      <nav id="menu" className={this.props.sideNavView ? 'visible' : ''}>
        <p onClick={() => this.props.dispatch(toggleSideNav())}>X</p>
        <ul className="links">
          <li>
            <a href="#ious" 
              onClick={() => this.props.dispatch(toggleSideNav())}>IOWEU'S
            </a>
          </li>
          <li>
            <a href="#uomes" 
              onClick={() => this.props.dispatch(toggleSideNav())}>UOME'S
            </a>
          </li>
          <li>
            <a href="#receipts" 
              onClick={() => this.props.dispatch(toggleSideNav())}>RECEIPTS
            </a>
          </li>
          <li>
            <a href="#logout" 
              onClick={() => {
                this.props.dispatch(clearAuth());
                clearAuthToken();
                this.props.dispatch(toggleSideNav());
                this.props.history.push('/');
              }
              }>LOG OUT {this.props.username}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(connect(mapStateToProps)(DashboardSideNav));