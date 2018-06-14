import React from 'react';
import { connect } from 'react-redux';
import '../styles/receipt-total.css';
import { toggleReceiptAddForm } from '../actions/receipts';

const mapStateToProps = state => ({
  receiptTotal: state.receipts.receiptDetails.map(receipt => receipt.vendorAmount).reduce((a,b) => 
    a + b, 0),
  receiptNames: state.receipts.receiptDetails.map(receipt => receipt.vendorName)
});

export const ReceiptTotal = props => {
  return(
    <section className='receipt-total'>
      <div>
        <h2>{props.receiptNames.length > 0 ? 
          `You have a total of $${props.receiptTotal.toLocaleString(undefined,
            {'minimumFractionDigits':2,'maximumFractionDigits':2})} in expenses`
          : 'You\'re not keeping track of any receipts.'}<br />
        {props.receiptNames.length > 0 ? `from ${props.receiptNames.length} ${props.receiptNames.length>1 ? 'vendors':'vendor'}.` 
          : 'Unless you remember something we don\'t.'}<br />
        <button type='button' 
          name='add-form-btn' 
          onClick={() => props.dispatch(toggleReceiptAddForm())}>Add a Receipt</button>
        </h2>
      </div>
    </section>
  );};

export default connect(mapStateToProps)(ReceiptTotal);