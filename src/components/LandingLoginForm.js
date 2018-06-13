import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import LandingInput from '../components/LandingInput';
import {toggleLoginModal} from '../actions';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import '../styles/login-form.css';

const mapStateToProps = state => ({
  loginModal: state.main.modals.loginModal
});

export class LoginForm extends React.Component{
  render(){
    let error;
    if (this.props.error){
      error = <div className="form-error">{this.props.error}</div>;
    }
    return(
      <div id='login-form'
        className={`modal${this.props.loginModal ? ' visible' : ''}`}
        aria-hidden={!this.props.loginModal}
        aria-labelledby='login-form'
        aria-describedby='login-form'>
        <div className='modal-content'>
          <button className='home-btn' aria-label='close'
            onClick={() => {this.props.reset(); this.props.dispatch(toggleLoginModal());}}>go back</button>
          <form onSubmit={this.props.handleSubmit(values => {
            const loginPromise = this.props.dispatch(login(values.loginUsername, values.loginPassword));
            return loginPromise.then(() => (!this.props.error) ? this.props.dispatch(toggleLoginModal()): undefined);
          })}>
            <fieldset>
              <legend aria-label='Log In Here'>LOG IN HERE</legend>
              <hr />
              {error}
              <label htmlFor='loginUsername' aria-label='Username'>So What Do We Call You?</label>
              <Field type='text' component={LandingInput}
                name='loginUsername' id='login-username'
                className='input-box' placeholder='enter your username' 
                validate={[required, nonEmpty]}/>
              <label htmlFor="loginPassword" aria-label='Password'>And What Is Your Password?</label>
              <Field type='password' component={LandingInput}
                name='loginPassword' id='login-password'
                className='input-box' placeholder='enter your password' 
                validate={[required, nonEmpty]}/>
              <button type='submit' name='login-btn' 
                aria-label='Login Button' id='login-btn'
                disabled={this.props.pristine || this.props.submitting}>Start Remembering!</button>
              <hr />
            </fieldset>
          </form>
          <p>Not a member, sign up <span>here</span></p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login-username', 'login-password'))
})(LoginForm));