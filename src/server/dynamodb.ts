import dynamoDb from "./config";

interface Item {
    id: number;
    name: string;
    score: number;
}

// Create an item in the DynamoDB table
export const createItem = (data: Item) => {
    const params = {
        TableName: 'Clicker',
        Item: data
    };

    return dynamoDb.put(params).promise();
};

// Read an item from the DynamoDB table
export const readItem = () => {
    const params = {
        TableName: 'Clicker'
    };

    return dynamoDb.scan(params).promise();
};

// // Update an item in the DynamoDB table
// const updateItem = (key, updates) => {
//     const params = {
//         TableName: '<your-table-name>',
//         Key: key,
//         UpdateExpression: 'set <your-update-expression>',
//         ExpressionAttributeValues: updates
//     };

//     return dynamoDb.updateItem(params).promise();
// };

// // Delete an item from the DynamoDB table
// const deleteItem = (key) => {
//     const params = {
//         TableName: '<your-table-name>',
//         Key: key
//     };

//     return dynamoDb.deleteItem(params).promise();
// };

// export default { createItem, readItem };
