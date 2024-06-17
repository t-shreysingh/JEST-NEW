const utils = require('./index.js');

// describe('Test fahrenheit to celsius conversion', () => {
//     test('32 degrees fahrenheit should be 0 degrees celsius', () => {
//         expect(utils.fahrenheitToCelsius(32)).toBe(32);
//     });
//     test('-40 degrees fahrenheit should be -40 degrees celsius', () => {
//         expect(utils.fahrenheitToCelsius(-40)).toBe(-40);
//     });
// });


describe('DescribeA', () => {
    test('TestA', () => {
        expect(utils.celsiusToFahrenheit(100)).toBe(212);
    });
    test('TestB', () => {
        expect(utils.celsiusToFahrenheit(32)).toBe(32);
    });
});

describe('DescribeB', () => {
    // test('Returns the first item if it is a string', () => {
    //     const testList = ['hello', 'world'];
    //     expect(utils.getFirstStringFromArray(testList)).toBe('hello');
    // });
    // test('Returns null for an empty array', () => {
    //     // Write your test code here
    // });
    test('TestC', () => {
        // Write your test code here
        const testList = ['jursaic', 'park'];
        expect(utils.getFirstStringFromArray(testList)).toBe('jursaic');
    });
    test('TestD', () => {
        // Write your test code here
        const testList = ['test', 'case'];
        expect(utils.getFirstStringFromArray(testList)).toBe('test');
    });
});