import { compose } from 'recompose';
import Component from './index';
import withData from './withData';
import loading from '../../hoc/loading';
const enhance = compose(withData, loading);
export default enhance(Component);
