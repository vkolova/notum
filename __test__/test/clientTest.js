const assert = require('chai').assert ;
const expect = require('chai').expect ;
const should = require('should');
const request = require('request');
const util = require('util');

const getUsers = require('../../server/api/user').getUsers ;

var baseUrl = "http://127.0.0.1:3001";

var formData = { username : 'testUsername' , password : 'testPass' , email : 'test@test.com' } ;

describe('Saving New User',function(){
	it('It Should Insert A New User To DB',function(){
		request.post({
			uri:baseUrl+'/sign-up',
			form:formData
		},function(err,resp,body){
			var respBody = JSON.parse(body)
			expect(resp.statusCode).to.equal(200)
			expect(respBody.success).to.equal(true)
		});
	});
});
