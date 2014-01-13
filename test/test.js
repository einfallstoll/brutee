var assert = require('assert')
var brutee = require('../lib/brutee.js')

describe('Brutee', function(){
	describe('#brutee()', function(){
		it('should return a for the first permutation', function(){
			assert.equal('a', brutee('abc', 0));
		})
		it('should return b for the second permutation', function(){
			assert.equal('b', brutee('abc', 1));
		})
		it('should return c for the third permutation', function(){
			assert.equal('c', brutee('abc', 2));
		})
		it('should return aa for the fourth permutation', function(){
			assert.equal('aa', brutee('abc', 3));
		})
		it('should return cc for the eleventh permutation', function(){
			assert.equal('cc', brutee('abc', 11));
		})
		it('should return abc for the thrity-third permutation', function(){
			assert.equal('abc', brutee('abc', 33));
		})
		it('should return b for the fourth permutation', function(){
			assert.equal('a5', brutee(['a', 5], 4));
		})
	})
})
