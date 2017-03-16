import { gql, graphql } from 'react-apollo';

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
export default graphql(query);