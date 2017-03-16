import { compose, mapProps } from 'recompose';
import Component from './index';
import withData from './withData';
import loading from '../../hoc/loading';
const enhance = compose(
  withData,
  loading,
  mapProps(ownerProps => ({
    details: ownerProps.data.recipes,
    title: false,
  }))
);
export default enhance(Component);
