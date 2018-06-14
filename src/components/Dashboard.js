import React from 'react';
import {connect} from 'react-redux';
import { DashboardTopNav } from './DashboardTopNav';
import DashboardHeader from './DashboardHeader';
import { IOUBanner } from './IOUBanner';
import IOUTotal from './IOUTotal';
import IOUTable from './IOUTable';
import IOUAddForm from './IOUAddForm';
import { UOMeBanner } from './UOMeBanner';
import requiresLogin from './RequiresLogin';

import { fetchIous } from '../actions/ious';
import { fetchUomes } from '../actions/uomes';
import { fetchReceipts } from '../actions/receipts';

import '../styles/dashboard.css';
import UOMeTotal from './UOMeTotal';
import UOMeTable from './UOMeTable';
import UOMeAddForm from './UOMeAddForm';
import { ReceiptBanner } from './ReceiptBanner';
import ReceiptTotal from './ReceiptTotal';
import ReceiptTable from './ReceiptTable';
import ReceiptAddForm from './ReceiptAddForm';

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  name: `${state.auth.currentUser.firstName} ${state.auth.currentUser.lastName}`
});

export class Dashboard extends React.Component{
  componentWillMount(){
    this.props.dispatch(fetchIous());
    this.props.dispatch(fetchUomes());
    this.props.dispatch(fetchReceipts());
  }
  
  render(){
    return(
      <div>
        <DashboardTopNav />
        <DashboardHeader />
        <IOUBanner />
        <div className='side-by-side'>
          <IOUTotal />
          <IOUTable />
        </div>
        <IOUAddForm />
        <UOMeBanner />
        <div className='side-by-side alt-row'>
          <UOMeTotal />
          <UOMeTable />
        </div>
        <UOMeAddForm />
        <ReceiptBanner />
        <div className='side-by-side'>
          <ReceiptTotal />
          <ReceiptTable />
        </div>
        <ReceiptAddForm />
      </div>
    );
  }
}


export default requiresLogin()(connect(mapStateToProps)(Dashboard));