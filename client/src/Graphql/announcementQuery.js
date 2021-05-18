import { gql } from '@apollo/client'

export const ANNOUNCEMENT_QUERY = gql`
query {
  announcements {
    _id
    topic
    detail
    timestamp
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
