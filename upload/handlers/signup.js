const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

const db = new DynamoDB();

exports.handler = async(event) => {
    const {
        email,
        password,
        username,
    } = JSON.parse(event.body);
    const userId = uuidv4();
    const hash = bcrypt.hashSync(password, 12);
    const user = marshall({
        email,
        userId,
        username,
        password: hash,
    });
    const respose = await db.putItem({
        TableName: 'celebrities',
        Item: user
    });
    // return response;
    // return {
    //     statusCode: 200,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': '*',
    //     },
    //     body: JSON.stringify(response.$metadata)
    // }
}