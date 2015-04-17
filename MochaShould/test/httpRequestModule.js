/**
 * Created by Michael on 16/04/15.
 */
var request = require('request');
var URL = 'http://127.0.0.1/api';

function _getUsers(callback){

    request(URL + '/users', function(err, response, body){

        if(err || response.statusCode != 200){

            return callback(err || body);
        }
        callback(null, body);
    })
}
function _getSingleUser(email, callback){

    request(URL + '/users/' + email, function(err, response, body){

        if(err || response.statusCode != 200){

            return callback(err || body);
        }
        callback(null, body);
    })
}

module.exports = {

    getAll: _getUsers,
    get: _getSingleUser
}