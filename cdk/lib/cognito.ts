import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';


export class CognitoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userpool = new cognito.UserPool(this, 'UserPool', {
      userPoolName: 'userpool',
      signInAliases: {
        email: true,
      },
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: 'You need to verify your email',
        emailBody: 'Thanks for signing up Your verification code is {####}', // # This placeholder is a must if code is selected as preferred verification method
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const appClient = userpool.addClient('AppClient', {
      userPoolClientName: 'appclient',
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
    });
  }
}
