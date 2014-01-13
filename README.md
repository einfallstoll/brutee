# brutee

One of the smallest permutation-generators out there.

## install

    $ npm install brutee

## brutee is simple

    var brutee = require('brutee');
    brutee('abc', 1'); // returns 'b'
    
### make a loop

    var brutee = require('brutee');
    for (var i = 0; i < 100; i++) {
        console.log(brutee('abc', i));
    }
    
### use an Array

    var brutee = require('brutee');
    brutee(['abcdefg', 56, true], 60); // returns 'abcdefg56trueabcdefg'
