import { gql } from '@apollo/client'

export const CUSTOMER_QUERY = gql`
query {
  customers {
    _id
    role
    username
    fullname
    email
    tel
  }
}
`