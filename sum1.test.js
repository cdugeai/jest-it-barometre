const sum = require('./sum1.js')

describe('First tests for sum1', function () {
    it('1+2 should be 3', function () {
        expect(sum(1,2)).toBe(3)
    });
});