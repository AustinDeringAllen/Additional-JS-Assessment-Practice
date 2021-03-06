"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.
const isOdd = function(input) {
    return (isNaN(input)) ? false : input % 2 != 0
}


//TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'
const isVowel = function(input) {
    const vowels = "aAeEiIoOuU";
    return (vowels.indexOf(input) !== -1) ? true : false;
}

//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.
const combineStrings = function(inputOne,inputTwo) {
    return (typeof inputOne === 'string' && typeof inputTwo === 'string') ? inputOne + inputTwo : false
}

//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.
const sumArgs = function(inputOne, inputTwo, inputThree) {
    return (typeof inputOne === 'number' && typeof inputTwo === 'number' && typeof inputThree === 'number') ? inputOne + inputTwo + inputThree : false
}

//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"
const truncateString = function(string, number) {
    if(typeof string === 'string' && typeof number === 'number') {
        return (number >= string.length) ? "" : string.slice(0, string.length - number)
    } else {
        return false;
    }
}

//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.
const reverseSign = function(number) {
    return (!isNaN(parseFloat(number))) ? parseFloat(number) * -1 : false;
}

//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.
const makeUppercase = function(string) {
    return (isNaN(parseFloat(string)) && typeof string === 'string') ? string.toUpperCase() : false;
}

//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.
const isMultiple = function(numberOne, numberTwo) {
    return ((numberOne % numberTwo === 0 || numberTwo % numberOne === 0) && numberOne !== numberTwo);
}

//TODO: Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.
const canPurchase = function(billAmount, availableCash) {
    return billAmount < availableCash;
}

//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`
const getInitials = function(first, last) {
    if((typeof first === 'string' && typeof last === 'string') && (isNaN(parseFloat(first)) && isNaN(parseFloat(last)))) {
        if(first === '' || last === '') {
            return false
        } else {
            return `${first[0]}.${last[0]}.`
        }
    } else {
        return false
    }
}