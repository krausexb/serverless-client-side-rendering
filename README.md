# How to deploy

You might need to re-create node-modules folders that were not committed for obvious reasons.

1. Enter the cdk repository and run `cdk deploy`
2. Run `npm run build` in the website folder and upload the content in the `build` folder to the S3 bucket.
3. Visit the website through the CloudFront Distribution DNS name
