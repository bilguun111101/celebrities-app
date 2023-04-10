const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

const db = new DynamoDB();
const bcrypt = require('bcryptjs');

exports.handler = async(event) => {
    const {
        email,
        password
    } = JSON.parse(event.body);
    const Key = marshall({
        email,
    })
    const response = await db.getItem({
        TableName: 'celebrities',
        Key
    })
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(unmarshall(response))
    }
}