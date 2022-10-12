const assert = require("assert");
const Calculate = require("../index.js");

describe('Calculate', () => {
    describe('.factorial', () => {
        it('returns the result of 5!', () => {
            // Setup
            const inputNum = 5;
            const expectedFactorial = 120;

            // Exercise
            const result = Calculate.factorial(inputNum);

            // Verification
            assert.strictEqual(result, expectedFactorial);
        });

        it('returns the factorial of a number other than 5', () => {
            // Setup
            const inputNum = 3;
            const expectedFactorial = 6;

            // Exercise
            const result = Calculate.factorial(inputNum);

            // Verification
            assert.strictEqual(result, expectedFactorial);
        });

        it('returns 1 when your input is 0', () => {
            // Setup
            const inputNum = 0;
            const expectedFactorial = 1;

            // Exercise
            const result = Calculate.factorial(inputNum);

            // Verification
            assert.strictEqual(result, expectedFactorial);
        });
    });
});