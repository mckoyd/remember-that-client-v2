import React from 'react';
import { connect } from 'react-redux';
import '../styles/receipt-add-form.css';
import {required, nonEmpty} from '../validators';
import LandingInput from '../components/LandingInput';
import { toggleReceiptAddForm, postReceipt } from '../actions/receipts';
import { Field, reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  modalFormView: state.receipts.modalFormView
});

export class ReceiptAddForm extends React.Component {
  render() {
    return(
      <div id="receipt-add-form" 
        className={`modal ${this.props.modalFormView ? 'visible': ''}`}>
        <div className="modal-content">
          <button className="btn" 
            id="receipt-home-btn" 
            onClick={() => this.props.dispatch(toggleReceiptAddForm())}>go back
          </button>
          <form onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(postReceipt(values));
            this.props.reset();
          })}>
            <fieldset>
              <legend>ADD YOUR RECEIPT HERE</legend>
              <label htmlFor="vendorName">Vendor Name</label>
              <Field type="text" 
                component={LandingInput}
                name="vendorName"
                id="vendorName" 
                className="inputBox" 
                placeholder="enter a name" 
                validate={[required, nonEmpty]}
              />
              <label htmlFor="vendorAmount">Vendor Amount</label>
              <Field type="number" 
                name="vendorAmount"
                component={LandingInput} 
                id="vendorAmount" 
                className="inputBox" 
                placeholder="enter an amount" 
                validate={[required, nonEmpty]}
              />
              <button type="submit" 
                name="add-btn" 
                id="receipt-add-btn">Add Receipt
              </button>
            </fieldset>
          </form>
        </div> 
      </div>
    );
  }
}


export default connect(mapStateToProps)(reduxForm({
  form: 'addReceipt', destroyOnUnmount: false
})(ReceiptAddForm));