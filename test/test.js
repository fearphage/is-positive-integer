var Code = require('code')
var Lab = require('lab')

var isPositiveInteger = require('../index.js')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('is-positive-integer', function () {
  it('should return true for positive integers', function (done) {
    expect(isPositiveInteger(1)).to.equal(true)
    expect(isPositiveInteger(10)).to.equal(true)
    expect(isPositiveInteger(100)).to.equal(true)
    expect(isPositiveInteger(1000)).to.equal(true)
    done()
  })

  it('should return false for negative integers or zero', function (done) {
    expect(isPositiveInteger(0)).to.equal(false)
    expect(isPositiveInteger(-1)).to.equal(false)
    expect(isPositiveInteger(-10)).to.equal(false)
    expect(isPositiveInteger(-100)).to.equal(false)
    expect(isPositiveInteger(-1000)).to.equal(false)
    done()
  })

  it('should return false for floats', function (done) {
    expect(isPositiveInteger(1.1)).to.equal(false)
    expect(isPositiveInteger(10.1)).to.equal(false)
    expect(isPositiveInteger(100.1)).to.equal(false)
    expect(isPositiveInteger(1000.1)).to.equal(false)
    expect(isPositiveInteger(-1.1)).to.equal(false)
    expect(isPositiveInteger(-10.1)).to.equal(false)
    expect(isPositiveInteger(-100.1)).to.equal(false)
    expect(isPositiveInteger(-1000.1)).to.equal(false)
    done()
  })

  it('should return false for others', function (done) {
    expect(isPositiveInteger(Infinity)).to.equal(false)
    expect(isPositiveInteger({})).to.equal(false)
    expect(isPositiveInteger([])).to.equal(false)
    expect(isPositiveInteger('10')).to.equal(false)
    expect(isPositiveInteger('what')).to.equal(false)
    expect(isPositiveInteger(/what/)).to.equal(false)
    done()
  })
})
