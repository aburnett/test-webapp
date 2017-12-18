'use strict';

exports.get = function (event, context) {
    var contents = {
        "msg": "Hello, " + event.name
    };
    context.succeed({
        statusCode: 200,
        body: contents,
        headers: { 'Content-Type': 'application/json' }
    });
};
