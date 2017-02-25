var add = require("./app.js");
var assert = require('assert');

describe('Test to see if adding right', function(){
        it("should return 30, add 10, 20", function(){
          assert.equal(add.add(10,20), 30);
        });
});
