const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

exports.handler = async(event) => {
    // const {
    //     email,
    //     password,
    //     username,
    // } = JSON.parse(event);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify({ data: event })
    }
}