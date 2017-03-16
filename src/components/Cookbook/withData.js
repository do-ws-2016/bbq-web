import { gql, graphql } from 'react-apollo';
import { compose, mapProps } from 'recompose';
import loading from '../../hoc/loading';

const query = gql`
query Cookbook($id: String!){
  cookbook(_id: $id){
    title
    description
    recipes {
      _id
    }
    tags
  }
  recipes{
    id: _id
    title
  }
}
`;
export default compose(
  graphql(query),
  loading,
  mapProps(ownerProps => ({
    initialValues: Object.assign({}, ownerProps.data.cookbook, {
      recipes: ownerProps.data.cookbook.recipes.map(r => r._id),
    }),
    recipes: ownerProps.data.recipes,
  }))
);
