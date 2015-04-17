/**
 * Created by Michael on 16/04/15.
 */

var assert = require('assert');
var should = require('should');

var userFacade = require('./httpRequestModule');
var nock = require('nock');
var n = nock('http://127.0.0.1/api');

var mockUsers = require('../users');

describe('API GET-request', function(){
    before(function(done){

        n.get('/users').reply(
            200,
            mockUsers
        );
        n.get('/users/quam@Loremipsum.com').reply(
            200,
            {
                "email": "quam@Loremipsum.com",
                "password": "3DBB2710-BB87-097B-3A1F-AF19AFDE5578"
            }
        );
        n.get('/users/nonexisting@email.com').reply(
            404,
            {
                error: "user not found"
            }
        );
        done();
    })

    describe('Get all (/api/users)', function(){

        it('should return a list of users with length = 9', function(done){

            userFacade.getAll(function(err, data){

                if(err){
                    throw err;
                }
                var userArr = JSON.parse(data);
                userArr.length.should.equal(9);
                done();
            })
        })
    })

    describe('get single user from email', function(){

        it('should return the person with password = 3DBB2710-BB87-097B-3A1F-AF19AFDE5578', function(done){
            var email = 'quam@Loremipsum.com';
            userFacade.get(email, function(err,data){

                if(err){
                    throw err;
                }
                var password = JSON.parse(data).password;
                password.should.equal('3DBB2710-BB87-097B-3A1F-AF19AFDE5578');
                done();
            })
        })
        it('should throw an error when provided with a wrong email', function(done){

            var email = 'nonexisting@email.com'
            userFacade.get(email, function(err,data){

                var testErr = JSON.parse(err);
                testErr.error.should.equal("user not found");
                done();
            })
        })
    })
})
describe('API POST, PUT and DELETE', function(){


})
