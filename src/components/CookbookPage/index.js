import React from 'react';
import Cookbook from '../Cookbook/connected';
export default props => (
  <div>
    <h1>Cookbook</h1>
    <Cookbook id={props.id} />
  </div>
);
