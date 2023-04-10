const bcrypt = require('bcryptjs');
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

const db = new DynamoDB();

exports.handler = async(event) => {
    const {
        email,
        password,
        username,
    } = JSON.parse(event.body);
    const hash = bcrypt.hashSync(password, 12);
    const user = marshall({
        email,
        username,
        password: hash,
    });
    const response = await db.putItem({
        TableName: 'celebrities',
        Item: user
    });
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(response.$metadata)
    }
}