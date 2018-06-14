import React from 'react';
import {connect} from 'react-redux';
import { DashboardTopNav } from './DashboardTopNav';
import DashboardHeader from './DashboardHeader';
import { IOUBanner } from './IOUBanner';
import IOUTotal from './IOUTotal';
import IOUTable from './IOUTable';
import IOUAddForm from './IOUAddForm';
import requiresLogin from './RequiresLogin';

import { fetchIous } from '../actions/ious';
import { fetchUomes } from '../actions/uomes';
import { fetchReceipts } from '../actions/receipts';

import '../styles/dashboard.css';

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
      </div>
    );
  }
}


export default requiresLogin()(connect(mapStateToProps)(Dashboard));