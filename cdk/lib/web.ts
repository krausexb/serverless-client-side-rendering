import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';



export class WebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const staticWebsiteBucket = new s3.Bucket(this, 'StaticWebsiteBucket', {
    });

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'MyOriginAccessIdentity', {
        comment: 'OAI for Static Website',
    });

    new cloudfront.Distribution(this, 'StaticWebsiteDistribution', {
        defaultRootObject: 'index.html',
        defaultBehavior: {
            origin: new origins.S3Origin(staticWebsiteBucket, {
                originAccessIdentity: originAccessIdentity,
        })},
    });
  }
}
