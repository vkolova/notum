const assert = require('chai').assert ;

function add(a,b){
	return a+b;
}

describe('First Simple Test',function(){
	it('It should Return 5',function(){
		assert(2+3,5);
	});
});

describe('Unit Testing With Functions',function(){
	it('It Should Return 6+7',function(){
		assert(add(6,7),13);
	});
});
