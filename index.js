'use strict';
var fs = require('fs');

 exports.get = function(event, context) {
   var contents = {
     "msg": "Hello, World"
   };
   context.succeed({
     statusCode: 200,
     body: contents.toString(),
     headers: {'Content-Type': 'application/json'}
   });
 };
