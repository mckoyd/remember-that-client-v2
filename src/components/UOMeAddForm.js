import React from 'react';
import { connect } from 'react-redux';
import '../styles/uome-add-form.css';
import {required, nonEmpty} from '../validators';
import LandingInput from '../components/LandingInput';
import { toggleUomeAddForm, postUome } from '../actions/uomes';
import { Field, reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  modalFormView: state.uomes.modalFormView
});

export class UOMeAddForm extends React.Component {
  render() {
    return(
      <div id="uome-add-form" 
        className={`modal ${this.props.modalFormView ? 'visible': ''}`}>
        <div className="modal-content">
          <button className="btn" 
            id="uome-home-btn" 
            onClick={() => this.props.dispatch(toggleUomeAddForm())}>go back
          </button>
          <form onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(postUome(values));
            this.props.reset();
          })}>
            <fieldset>
              <legend>ADD YOUR UOME HERE</legend>
              <label htmlFor="uomeName">Who Owes You</label>
              <Field type="text" 
                component={LandingInput}
                name="uomeName"
                id="uomeName" 
                className="inputBox" 
                placeholder="enter a name" 
                validate={[required, nonEmpty]}
              />
              <label htmlFor="uomeAmount">What Do You Owe</label>
              <Field type="number" 
                name="uomeAmount"
                component={LandingInput} 
                id="uomeAmount" 
                className="inputBox" 
                placeholder="enter an amount" 
                validate={[required, nonEmpty]}
              />
              <button type="submit" 
                name="add-btn" 
                id="uome-add-btn">Add UOMe
              </button>
            </fieldset>
          </form>
        </div> 
      </div>
    );
  }
}


export default connect(mapStateToProps)(reduxForm({
  form: 'addUOMe', destroyOnUnmount: false
})(UOMeAddForm));