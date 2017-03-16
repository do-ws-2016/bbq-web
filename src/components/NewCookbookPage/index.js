import React from 'react';
import Cookbook from '../Cookbook';
export default props => (
  <div>
    <h1>New Cookbook</h1>
    <Cookbook
      recepies={[
        { id: 'd5e11667-2b30-415f-99b5-c6448d03ac09', title: 'Slacks' },
        { id: 'f0061733-e6e7-44d0-9215-e4516de22ee8', title: 'Sflaps' },
      ]}
    />
  </div>
);
