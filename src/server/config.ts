import AWS from 'aws-sdk';

AWS.config.update({
    region: "ap-southeast-1",
    accessKeyId: 'AKIA4LKF2CRSQ2SKO34S',
    secretAccessKey: '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'
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default dynamoDb;