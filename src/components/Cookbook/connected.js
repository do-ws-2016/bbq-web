import { compose, mapProps } from 'recompose';
import Component from './index';
import withData from './withData';
import loading from '../../hoc/loading';
const enhance = compose(
  withData,
  loading,
  mapProps(ownerProps => ({
    initialValues: Object.assign({}, ownerProps.data.cookbook, {
      recipes: ownerProps.data.cookbook.recipes.map(r => r._id),
    }),
    recipes: ownerProps.data.recipes,
  }))
);
export default enhance(Component);