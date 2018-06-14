import React from 'react';
import { connect } from 'react-redux';
import '../styles/iou-total.css';
import { toggleIouAddForm } from '../actions/ious';

const mapStateToProps = state => ({
  iouTotal: state.ious.iouDetails.map(iou => iou.iouAmount).reduce((a,b) => 
    a + b, 0),
  iouNames: state.ious.iouDetails.map(iou => iou.iouName)
});

export const IOUTotal = props => {
  return(
    <section className='iou-total'>
      <div>
        <h2>{props.iouNames.length > 0 ? 
          `You currently owe $${props.iouTotal.toLocaleString(undefined,
            {'minimumFractionDigits':2,'maximumFractionDigits':2})}`
          : 'You\'re in the clear.'}<br />
        {props.iouNames.length > 0 ? `to ${props.iouNames.length} people.` 
          : 'Unless you remember something we don\'t'}<br />
        <button type='button' 
          name='add-form-btn' 
          onClick={() => props.dispatch(toggleIouAddForm())}>Add an IOU</button>
        </h2>
      </div>
    </section>
  );};

export default connect(mapStateToProps)(IOUTotal);