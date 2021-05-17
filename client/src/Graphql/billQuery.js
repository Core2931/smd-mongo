import { gql } from '@apollo/client'

export const BILLS_QUERY = gql`
query {
  bills {
    _id
    waterbill
    elecbill
    roombill
    status
    timestamp
    url
    ownerName
    username
  }
  me {
    _id
    role
    username
    fullname
    email
    tel
  }
}
`