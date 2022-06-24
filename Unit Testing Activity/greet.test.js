var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

let test_name = "Chris";
let caps_name = "CHRIS";
let test_array = ["Chris", "Toni"]
let test_array2 = ["Chris", "Toni", "Mylee", "Keshav", "Bryce", "Caleb", "Rags"]

test('string value as argument', () => {
  expect(greet(test_name)).toBe("Hello, " + test_name + "!");
});

test('no value given for parameter/argument', () => {
    expect(greet()).toBe("Hello, there!");
});

test('all caps string value', () => {
    expect(greet(caps_name)).toBe("HELLO, " + caps_name + "!");
});

test('two people to be greeted', () => {
    expect(greet(test_array)).toBe("Hello, Chris, Toni!");
});

test('multiple people to be greeted', () => {
    expect(greet(test_array2)).toBe("Hello, Chris, Toni, Mylee, Keshav, Bryce, Caleb, Rags");
});