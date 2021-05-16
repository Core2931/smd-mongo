import { gql } from "@apollo/client";


export const SUGGEST_QUERY = gql`
query {
  suggests {
    _id
    timestamp
    fullname
    detail
    tel
    username
    ownerName
  }
}
`