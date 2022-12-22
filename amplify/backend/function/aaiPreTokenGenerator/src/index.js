/* Amplify Params - DO NOT EDIT
AUTH_AWSAUTHENTICATIONINS1096FB38_USERPOOLID
ENV
REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
exports.handler = async (event, context, callback) => {
  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        attribute_key2: 'attribute_value2',
        attribute_key: 'attribute_value'
      },
      claimsToSuppress: ['email']
    }
  }

  // Return to Amazon Cognito
  return event
}
