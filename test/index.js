var expect = require('chai').expect,
    callbackError

describe('callback-error', function() {
  it('should load', function(done) {
    callbackError = require('..')
    done()
  })

  var expected = ["hello", "world"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = callbackError(expected)
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString)
    done()
  })
})
