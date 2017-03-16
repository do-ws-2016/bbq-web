import Spinner from '../components/Spinner';
import { branch, renderComponent } from 'recompose';
const spinnerWhileLoading = isLoading =>
  branch(
    isLoading,
    renderComponent(Spinner) // `Spinner` is a React component
  );

// Now use the `spinnerWhileLoading()` helper to add a loading spinner to any
// base component
export default spinnerWhileLoading(props => props.data.loading);
