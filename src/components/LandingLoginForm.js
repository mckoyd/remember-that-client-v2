import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';

const mapStateToProps = state => ({
  loginModal: state.main.modals.loginModal
});

export const LoginForm = props => (
  <div id='login-form'
    className={`modal${props.loginModal ? '' : ' hidden'}`}>
  </div>
);

export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('username', 'password'))
})(LoginForm));