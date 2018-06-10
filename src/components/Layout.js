import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Landing } from './Landing';

export class Layout extends React.Component{
  render() {
    return(
      <div>
        <Route exact path='/' component={Landing} />
      </div>
    );
  }
}

export default withRouter(Layout);