'use strict';

exports.get = function (event, context, callback) {
    var contents = {
        "msg": "Hello, " + event.pathParameters.name
    };
    var res = {
        statusCode: 200,
        body: JSON.stringify(contents),
        headers: { 'Content-Type': 'application/json' }
    };
    callback(null, res);
};
