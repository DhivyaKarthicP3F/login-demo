/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createP3fAudit = /* GraphQL */ `
  mutation CreateP3fAudit(
    $input: CreateP3fAuditInput!
    $condition: ModelP3fAuditConditionInput
  ) {
    createP3fAudit(input: $input, condition: $condition) {
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
export const updateP3fAudit = /* GraphQL */ `
  mutation UpdateP3fAudit(
    $input: UpdateP3fAuditInput!
    $condition: ModelP3fAuditConditionInput
  ) {
    updateP3fAudit(input: $input, condition: $condition) {
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
export const deleteP3fAudit = /* GraphQL */ `
  mutation DeleteP3fAudit(
    $input: DeleteP3fAuditInput!
    $condition: ModelP3fAuditConditionInput
  ) {
    deleteP3fAudit(input: $input, condition: $condition) {
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
