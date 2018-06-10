import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { toggleSignupModal } from '../actions';
import '../styles/signup-form.css';

const mapStateToProps = state => ({
  signupModal: state.main.modals.signupModal
});

export const SignupForm = props => (
  <div id='signup-form'
    className={`modal${props.signupModal ? ' visible' : ''}`}
    aria-hidden={!props.signupModal}
    aria-labelledby='signup-form'
    aria-describedby='signup-form'>
    <div className='modal-content'>
      <button className='home-btn' aria-label='close'
        onClick={() => props.dispatch(toggleSignupModal())}>go back</button>
      <form onSubmit={() => props.handleSubmit(() => props.reset)}>
        <fieldset>
          <legend aria-label='Sign Up Here'>SIGN UP HERE</legend>
          <hr />
          <label htmlFor='first-name'>So What's Your First Name?</label>
          <Field type='text' component='input'
            name='first-name' id='first-name'
            className='input-box' placeholder='enter your first name' required/>
          <label htmlFor='last-name'>And Your Last Name?</label>
          <Field type='text' component='input'
            name='last-name' id='last-name'
            className='input-box' placeholder='enter your last name' required/>
          <label htmlFor='email-address'>Your Email Address?</label>
          <Field type='text' component='input'
            name='email-address' id='email-address'
            className='input-box' placeholder='enter your email address' required/>
          <label htmlFor='signup-username' aria-label='Username'>What Do You Want Us To Call You?</label>
          <Field type='text' component='input'
            name='signup-username' id='signup-username'
            className='input-box' placeholder='enter a username' required/>
          <label htmlFor='signup-password' aria-label='Password'>And What Do You Want Your Password To Be?</label>
          <Field type='password' component='input'
            name='signup-password' id='signup-password'
            className='input-box' placeholder='enter a password' />
          <button type='submit' name='signup-btn' aria-label='Sign Up Button' id='signup-btn'>Start Remembering!</button>
          <hr />
        </fieldset>
      </form>
      <p>Already a member, log in <span>here</span></p>
    </div>
  </div>
);

export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('username', 'password'))
})(SignupForm));