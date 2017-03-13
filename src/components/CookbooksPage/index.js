import React from 'react';
import Cookbooks from '../Cookbooks';
import source from './testData';
export default () => (
  <div>
    <h1>Cookbooks</h1>
    <Cookbooks data={source.data} />
  </div>
);
