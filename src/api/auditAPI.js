import { API } from 'aws-amplify';
import { createP3fAudit } from '../graphql/mutations';
import { listP3fAudits } from '../graphql/queries';


export async function createAuditRecord(resource, action, byUser, byDateTime, changesMade) {
    const auditDetails = {
        resource: resource,
        action: action,
        byUser: byUser,
        byDateTime: byDateTime,
        changesMade: changesMade
    };
    console.log("auditDetails: ", auditDetails);
    const newAudit = await API.graphql({ query: createP3fAudit, variables: { input: auditDetails } });
    console.log("newAudit: ", newAudit);
    return newAudit;
}

// list audit records with pagination
export async function listAuditRecords(filter, limit, nextToken) {
    const auditRecords = await API.graphql({ query: listP3fAudits, variables: { filter: filter, limit: limit, nextToken: nextToken } });
    return auditRecords;
}

