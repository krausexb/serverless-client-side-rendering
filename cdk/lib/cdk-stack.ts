import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ApiStack } from '../lib/api';
import { WebStack } from '../lib/web';
import { CognitoStack } from '../lib/cognito';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ApiStack(this, 'ApiStack', {
    });

    new WebStack(this, 'WebStack', {      
    });

    new CognitoStack(this, 'CognitoStack', {      
    });
  }
}
