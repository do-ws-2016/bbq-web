import { gql, graphql } from 'react-apollo';
const query = gql`
query Cookbooks {
  cookbooks{
    _id
    title
    description
    tags
    createdAt
    author{
      username
    }
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
}
`;
export default graphql(query);
