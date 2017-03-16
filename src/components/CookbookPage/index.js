import React from 'react';
import Cookbook from '../Cookbook/connected';
import Content from '../Content';

export default props => (
  <Content header="Cookbook">
    <Cookbook id={props.id} />
  </Content>
);
