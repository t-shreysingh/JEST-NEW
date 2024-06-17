const utils = require('./index.js');

describe('DescribeC', () => {
    test('TestE', () => {
        expect(utils.fahrenheitToCelsius(32)).toBe(32);
    });
    test('TestF', () => {
        expect(utils.fahrenheitToCelsius(-40)).toBe(-40);
    });
});


// describe('Test celsius to fahrenheit conversion', () => {
//     test('100 degrees celsius should be 0 degrees fahrenheit', () => {
//         expect(utils.celsiusToFahrenheit(100)).toBe(212);
//     });
//     test('0 degrees celsius should be 32 degrees fahrenheit', () => {
//         expect(utils.celsiusToFahrenheit(0)).toBe(32);
//     });
// });

describe('DescribeD', () => {
    test('TestG', () => {
        const testList = ['hello', 'world'];
        expect(utils.getFirstStringFromArray(testList)).toBe('hello');
    });
    test('TestH', () => {
        // Write your test code here
        const testList = ['coding', 'craze'];
        expect(utils.getFirstStringFromArray(testList)).toBe('coding');
    });
    // test('Returns null if no strings are in the array', () => {
    //     // Write your test code here
    // });
    // test('Returns the second item if the first item is a number', () => {
    //     // Write your test code here
    // });
});