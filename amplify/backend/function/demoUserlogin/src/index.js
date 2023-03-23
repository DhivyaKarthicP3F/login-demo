
/* Amplify Params - DO NOT EDIT
	AUTH_LOGINDEMOE89EA68B_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// user login for cognito
const { SignUpCommand,CognitoIdentityProviderClient,AdminAddUserToGroupCommand } = require( "@aws-sdk/client-cognito-identity-provider");

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

   
    const client = new CognitoIdentityProviderClient({ region: process.env.REGION });
    const Username= "manila1@gmail.com";

    const input = {
        ClientId: "20i368spi4va12m1rsreab45n3",
        Username: Username,
        Password: "PASSWORD"
       
    };

const command = new SignUpCommand(input);

try{
//const response = await client.send(command);

    const addUserGroupInput = {
        //ClientId: "20i368spi4va12m1rsreab45n3",
        Username: "p.prema@p3fusion.com",
        UserPoolId:"us-east-1_RbNTmtCyZ",
        GroupName:"tenantAdmin"
       
    };
    
    const addUserGroupCommand = new AdminAddUserToGroupCommand(addUserGroupInput);
    
    const response1 = await client.send(addUserGroupCommand); 
    
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify(response1),
    };
} catch (err) {
    console.log(err);
    return {
        statusCode: 500,
        body: JSON.stringify(err),
    };
} finally{
    client.destroy();
}
};
