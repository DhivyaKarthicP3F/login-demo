/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getP3fAudit = /* GraphQL */ `
  query GetP3fAudit($id: ID!) {
    getP3fAudit(id: $id) {
      id
      resource
      action
      byUser
      byDateTime
      changesMade
      createdAt
      updatedAt
    }
  }
`;
export const listP3fAudits = /* GraphQL */ `
  query ListP3fAudits(
    $filter: ModelP3fAuditFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listP3fAudits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resource
        action
        byUser
        byDateTime
        changesMade
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
