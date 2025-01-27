import { expect, test } from 'vitest'
import {is_palindrome_valid} from '../../../typescript/Two Pointers/is_palindrome_valid';


const testCases = [
    { s: 'a dog! a panic in a pagoda.', expected: true },
    { s: 'abc123', expected: false }, 

    { s: '', expected: true }, // empty string
    { s: 'a', expected: true }, // single character
    { s: 'aa', expected: true }, // palindrome with two characters
    { s: 'ab', expected: false }, // non-palindrome with two characters
    { s: 'aba', expected: true }, // palindrome with three characters
    { s: 'abba', expected: true }, // palindrome with four characters

    { s: '!, (?)', expected: true }, // palindrome no alphanumeric characters
    { s: '12.02.2021', expected: true }, // palindrome with punctuation and numbers
    { s: '21.02.2021', expected: false }, // non-palindrome with punctuation and numbers
    { s: 'hello, world!', expected: false } // non-pilindrom with punctuation
];

test.each(testCases)('is_palindrome_valid($s) -> $expected', 
                                ({ s, expected }) => {
    expect(is_palindrome_valid(s)).toBe(expected);
});
