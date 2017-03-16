import { gql, graphql } from 'react-apollo';
const query = gql`
query Recipies {
  recipes{
    _id
    title
    description
    tags
    sequence{
      title
      duration
      intensity
      method
    }
  }
}
`;
export default graphql(query);
