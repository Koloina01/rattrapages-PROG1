import { expect } from 'chai';
import { describe, it } from 'mocha';
import { findOdd } from '../codes/Exo2.js';

describe('findOdd', function () {
    it('should return the number that appears an odd number of times', function () {
        expect(findOdd([20, 1, 1, 2, 2, 3, 3 ,3 , 4, 5, 5, 4, 3, 2, 1, 1, 20])).to.equal(2);
    });
    it('should return 0 for an empty array', function () {
        expect(findOdd([])).to.equal(0);
    });
    it('This should return all numbers that are repeated as an odd number', function () {
        expect(findOdd([0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4])).to.equal(0, 2, 4);
    });
});