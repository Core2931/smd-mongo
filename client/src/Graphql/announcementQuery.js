import { gql } from '@apollo/client'

export const ANNOUNCEMENT_QUERY = gql`
query {
  announcements {
    _id
    topic
    detail
    timestamp
    ownerName
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
