import React from 'react';
import { connect } from 'react-redux';
import '../styles/uome-table.css';
import { deleteUome } from '../actions/uomes';

const mapStateToProps = state => ({
  uomes: state.uomes.uomeDetails
});

export const UOMeTable = props => {
  const uomeRow = props.uomes.map((uome, i) => 
    <tr key={i}>
      <td key={`${uome.id}name`}>
        <details>
          <summary>{uome.uomeName}</summary>
          <button type='submit' 
            name='delete-btn' 
            className='delete-btn' 
            onClick={() =>props.dispatch(deleteUome(uome))}>delete uome
          </button>
          <button type='button' name='uome-details-btn' 
            className='uome-details-btn' onClick={() => console.log('Details coming soon!')}>view details</button>
        </details>
      </td>
      <td key={`${uome.id}amount`}>
        $ {uome.uomeAmount.toLocaleString(undefined,
          {'minimumFractionDigits':2,'maximumFractionDigits':2})}
      </td>
    </tr>
  );
  return(
    <section className='uome-table'>
      <table>
        <thead className='uome-header'>
          <tr>
            <th>Who Owes You</th>
            <th>What They Owe</th>
          </tr>
        </thead>
        <tbody>
          {uomeRow}
        </tbody>
      </table> 
    </section>
  );
};

export default connect(mapStateToProps)(UOMeTable);