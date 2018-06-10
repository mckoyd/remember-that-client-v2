import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { toggleLoginModal } from '../actions';
import '../styles/login-form.css';

const mapStateToProps = state => ({
  loginModal: state.main.modals.loginModal
});

export const LoginForm = props => (
  <div id='login-form'
    className={`modal${props.loginModal ? ' visible' : ''}`}
    aria-hidden={!props.loginModal}
    aria-labelledby='login-form'
    aria-describedby='login-form'>
    <div className='modal-content'>
      <button className='home-btn' aria-label='close'
        onClick={() => props.dispatch(toggleLoginModal())}>go back</button>
      <form onSubmit={() => props.handleSubmit(() => props.reset)}>
        <fieldset>
          <legend aria-label='Log In Here'>LOG IN HERE</legend>
          <hr />
          <label htmlFor='login-username' aria-label='Username'>So What Do We Call You?</label>
          <Field type='text' component='input'
            name='login-username' id='login-username'
            className='input-box' placeholder='enter your username' required/>
          <label htmlFor="login-password" aria-label='Password'>And What Is Your Password?</label>
          <Field type='password' component='input'
            name='login-password' id='login-password'
            className='input-box' placeholder='enter your password' required/>
          <button type='submit' name='login-btn' aria-label='Login Button' id='login-btn'>Start Remembering!</button>
          <hr />
        </fieldset>
      </form>
      <p>Not a member, sign up <span>here</span></p>
    </div>
  </div>
);

export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('username', 'password'))
})(LoginForm));