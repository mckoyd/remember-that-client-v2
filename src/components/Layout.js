import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';

import {refreshAuthToken} from '../actions/auth';

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});
export class Layout extends React.Component{
  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()), 60*60*1000
    );
  }
  stopPeriodicRefresh(){
    if(!this.refreshInterval){
      return;
    }
    clearInterval(this.refreshInterval);
  }
  componentDidUpdate(prevProps){
    if(!prevProps.loggedIn && this.props.loggedIn){
      this.startPeriodicRefresh();
    } else if(prevProps.loggedIn && !this.props.loggedIn){
      this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }
  render() {
    return(
      <div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Layout));