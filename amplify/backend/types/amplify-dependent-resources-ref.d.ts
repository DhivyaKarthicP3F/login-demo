export type AmplifyDependentResourcesAttributes = {
    "function": {
        "demoUserlogin": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "logindemodemoAdminAppLayer": {
            "Arn": "string"
        }
    },
    "auth": {
        "logindemoe89ea68b": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "tenantAdminGroupRole": "string"
        }
    },
    "api": {
        "loginDemoAPI": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}