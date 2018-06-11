import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = state => ({
  authenticating: state.auth.loading,
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error
});
export default () => Component => {
  const RequiresLogin = (props) => {
    const {authenticating, loggedIn, error, ...passThroughProps} = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn || error) {
      return <Redirect to="/" />;
    }
    return <Component {...passThroughProps} />;
  };
  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;
  return connect(mapStateToProps)(RequiresLogin);
};