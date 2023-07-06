import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';


export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handlerFunction = new lambda.Function(this, 'lambda', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'api.lambda_handler',
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    const api = new apigateway.LambdaRestApi(this, 'apigw', {
    handler: handlerFunction,
    endpointTypes: [apigateway.EndpointType.REGIONAL],
    });
  }
}
