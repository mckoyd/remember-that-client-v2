import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import LandingInput from '../components/LandingInput';
import {toggleSignupModal} from '../actions';
import {registerUser} from '../actions/user';
import {login} from '../actions/auth';
import '../styles/signup-form.css';
import {required, nonEmpty, matches, length, isTrimmed, email} from '../validators';

const passwordLength = length({min: 10, max: 72});
const userLength = length({min: 4, max: 72});
const matchesPassword = matches('signupPassword');
const mapStateToProps = state => ({
  signupModal: state.main.modals.signupModal
});

export class SignupForm extends React.Component{
  render(){
    return(
      <div id='signup-form'
        className={`modal${this.props.signupModal ? ' visible' : ''}`}
        aria-hidden={!this.props.signupModal}
        aria-labelledby='signup-form'
        aria-describedby='signup-form'>
        <div className='modal-content'>
          <button className='home-btn' aria-label='close'
            onClick={() => this.props.dispatch(toggleSignupModal())}>go back</button>
          <form onSubmit={this.props.handleSubmit(values => {
            const {firstName, lastName, emailAddress, signupUsername: username, signupPassword: password} = values;
            const user = {firstName, lastName, emailAddress, username, password};
            const registerPromise = this.props.dispatch(registerUser(user));
            return registerPromise.then(() => this.props.dispatch(login(username, password)))
              .then(() => (!this.props.error) ? this.props.dispatch(toggleSignupModal()) : undefined);})
          }>
            <fieldset>
              <legend aria-label='Sign Up Here'>SIGN UP HERE</legend>
              <hr />
              <label htmlFor='firstName'>So What's Your First Name?</label>
              <Field type='text' component={LandingInput}
                name='firstName' id='first-name'
                className='input-box' placeholder='enter your first name'
                validate={[required, nonEmpty, isTrimmed]}/>
              <label htmlFor='lastName'>And Your Last Name?</label>
              <Field type='text' component={LandingInput}
                name='lastName' id='last-name'
                className='input-box' placeholder='enter your last name'
                validate={[required, nonEmpty, isTrimmed]}/>
              <label htmlFor='emailAddress'>Your Email Address?</label>
              <Field type='text' component={LandingInput}
                name='emailAddress' id='email-address'
                className='input-box' placeholder='enter your email address'
                validate={[required, nonEmpty, isTrimmed, email]}/>
              <label htmlFor='signupUsername' aria-label='Username'>What Do You Want Us To Call You?</label>
              <Field type='text' component={LandingInput}
                name='signupUsername' id='signup-username'
                className='input-box' placeholder='enter a username'
                validate={[required, nonEmpty, isTrimmed, userLength]}/>
              <label htmlFor='signupPassword' aria-label='Password'>And What Do You Want Your Password To Be?</label>
              <Field type='password' component={LandingInput}
                name='signupPassword' id='signup-password'
                className='input-box' placeholder='enter a password' 
                validate={[required, passwordLength, isTrimmed]}/>
              <label htmlFor='confirmPassword' aria-label='confirmPassword'>Can You Confirm That?</label>
              <Field type='password' component={LandingInput}
                name='confirmPassword' id='confirm-password'
                className='input-box' placeholder='enter a password' 
                validate={[required, nonEmpty, matchesPassword]}/>
              <button type='submit' name='signup-btn' 
                aria-label='Sign Up Button' id='signup-btn'
                disabled={this.props.pristine || this.props.submitting}>Start Remembering!</button>
              <hr />
            </fieldset>
          </form>
          <p>Already a member, log in <span>here</span></p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'signupForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('username', 'password'))
})(SignupForm));