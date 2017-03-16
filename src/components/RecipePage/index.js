import React from 'react';
import Content from '../Content';

export default props => (
  <Content header="Recipe">
    <h1>{props.id}</h1>
    {console.log(props)}
  </Content>
);
