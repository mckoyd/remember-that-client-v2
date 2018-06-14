import React from 'react';
import { connect } from 'react-redux';
import '../styles/uome-total.css';
import { toggleUomeAddForm } from '../actions/uomes';

const mapStateToProps = state => ({
  uomeTotal: state.uomes.uomeDetails.map(uome => uome.uomeAmount).reduce((a,b) => 
    a + b, 0),
  uomeNames: state.uomes.uomeDetails.map(uome => uome.uomeName)
});

export const UOMeTotal = props => {
  return(
    <section className='uome-total'>
      <div>
        <h2>{props.uomeNames.length > 0 ? 
          `You are currently owed $${props.uomeTotal.toLocaleString(undefined,
            {'minimumFractionDigits':2,'maximumFractionDigits':2})}`
          : 'No one owes you anything.'}<br />
        {props.uomeNames.length > 0 ? `from ${props.uomeNames.length} ${props.uomeNames.length>1 ? 'people':'person'}.` 
          : 'Unless you remember something we don\'t.'}<br />
        <button type='button' 
          name='add-form-btn' 
          onClick={() => props.dispatch(toggleUomeAddForm())}>Add a UOMe</button>
        </h2>
      </div>
    </section>
  );};

export default connect(mapStateToProps)(UOMeTotal);