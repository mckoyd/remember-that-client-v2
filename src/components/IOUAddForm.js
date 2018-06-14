import React from 'react';
import { connect } from 'react-redux';
import '../styles/iou-add-form.css';
import {required, nonEmpty} from '../validators';
import LandingInput from '../components/LandingInput';
import { toggleIouAddForm, postIou } from '../actions/ious';
import { Field, reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  modalFormView: state.ious.modalFormView
});

export class IOUAddForm extends React.Component {
  render() {
    return(
      <div id="iou-add-form" 
        className={`modal ${this.props.modalFormView ? 'visible': ''}`}>
        <div className="modal-content">
          <button className="btn" 
            id="iou-home-btn" 
            onClick={() => this.props.dispatch(toggleIouAddForm())}>go back
          </button>
          <form onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(postIou(values));
            this.props.reset();
          })}>
            <fieldset>
              <legend>ADD YOUR IOU HERE</legend>
              <label htmlFor="name">Who Do You Owe</label>
              <Field type="text" 
                component={LandingInput}
                name="iouName"
                id="name" 
                className="inputBox" 
                placeholder="enter a name" 
                validate={[required, nonEmpty]}
              />
              <label htmlFor="amount">What Do You Owe</label>
              <Field type="number" 
                name="iouAmount"
                component={LandingInput} 
                id="amount" 
                className="inputBox" 
                placeholder="enter an amount" 
                validate={[required, nonEmpty]}
              />
              <button type="submit" 
                name="add-btn" 
                id="iou-add-btn">Add IOU
              </button>
            </fieldset>
          </form>
        </div> 
      </div>
    );
  }
}


export default connect(mapStateToProps)(reduxForm({
  form: 'addIOU', destroyOnUnmount: false
})(IOUAddForm));