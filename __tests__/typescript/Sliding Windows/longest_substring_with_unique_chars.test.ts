import { expect, test } from 'vitest';
import { longestSubstringWithUniqueChars } from '../../../coding-interview-patterns/typescript/Sliding Windows/longest_substring_with_unique_chars';

const uniqueCharsTestCases = [
    // --- Basic Cases ---
    { s: '', expected: 0 },            // Empty string
    { s: 'a', expected: 1 },           // Single character
    { s: 'abcba', expected: 3 },       // Maximum substring "abc"
    // --- Repeated Characters ---
    { s: 'aa', expected: 1 },          // Two identical characters
    { s: 'bbbbb', expected: 1 },       // All characters are the same
    // --- Mixed Unique and Duplicate Characters ---
    { s: 'ab', expected: 2 },          // Two different characters
    { s: 'aba', expected: 2 },         // Duplicate at the ends
    // --- Complex Cases ---
    { s: 'pwwkew', expected: 3 },      // Maximum substring "wke"
    { s: 'dvdf', expected: 3 },        // Maximum substring "vdf" or "dvd" after adjustment
    { s: 'tmmzuxt', expected: 5 },     // Maximum substring "mzuxt"
];

test.each(uniqueCharsTestCases)('longestSubstringWithUniqueChars("$s") -> $expected', ({ s, expected }) => {
        expect(longestSubstringWithUniqueChars(s)).toBe(expected);
});

// --- Non-functional test: Performance test ---
test('Performance: handle large strings', () => {
        // Create a large string by repeating the alphabet.
        // Maximum unique substring length for a repeated alphabet is 26.
        const largeString = 'abcdefghijklmnopqrstuvwxyz'.repeat(1000);
        expect(longestSubstringWithUniqueChars(largeString)).toBe(26);
});
