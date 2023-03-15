
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// user login for cognito
const { SignUpCommand,CognitoIdentityProviderClient } = require( "@aws-sdk/client-cognito-identity-provider");

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

   
    const client = new CognitoIdentityProviderClient({ region: process.env.REGION });
    const input = {
        ClientId: "20i368spi4va12m1rsreab45n3",
        Username: "manila@gmail.com",
        Password: "PASSWORD",
        UserAttributes: [
            {
                Name: "email",
                Value: "manilaemail@gmail.com",
            },
        ],
    };

const command = new SignUpCommand(input);

try{
const response = await client.send(command);


    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify(response),
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
