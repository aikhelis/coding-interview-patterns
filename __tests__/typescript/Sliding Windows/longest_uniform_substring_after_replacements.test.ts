import { expect, test } from 'vitest';
import { longestUniformSubstringAfterReplacements } from '../../../coding-interview-patterns/typescript/Sliding Windows/longest_uniform_substring_after_replacements';

const uniformSubstrTestCases = [
    // --- Basic Cases ---
    { s: '', k: 2, expected: 0 },             // Empty string
    { s: 'a', k: 0, expected: 1 },            // Single character, no replacements needed
    { s: 'a', k: 2, expected: 1 },            // Single character, even with extra replacements
    // --- Already Uniform ---
    { s: 'aa', k: 0, expected: 2 },           // Uniform string, no replacements needed
    { s: 'aaaa', k: 2, expected: 4 },         // Uniform string, replacements don't matter
    // --- Mixed Characters ---
    { s: 'ab', k: 1, expected: 2 },           // Can replace one character to match the other
    { s: 'abbcb', k: 1, expected: 4 },        // Replace 'c' to extend "bbb"
    { s: 'aabccbb', k: 2, expected: 5 },      // Replace two characters to obtain "bbbbb" or "aabaa" depending on window
    { s: 'aabcdcca', k: 2, expected: 5 },     // Replace two characters to obtain "bbbbb" or "aabaa" depending on window
    { s: 'abcde', k: 2, expected: 3 },        // Best achievable window is 3 since with k=2, (3 - 1 = 2) replacements are needed
];

test.each(uniformSubstrTestCases)('longestUniformSubstringAfterReplacements("$s", $k) -> $expected', ({ s, k, expected }) => {
    expect(longestUniformSubstringAfterReplacements(s, k)).toBe(expected);
});

// --- Non-functional test: Performance test ---
test('Performance: handle large strings', () => {
    // Create a large string combining two long uniform segments.
    // For example, taking 10000 'a's followed by 10000 'b's,
    // with k = 5000 we can merge part of both segments: 
    // The first 15000 characters (10000 'a's + 5000 'b's) can become uniform.
    const simpleLarge = 'a'.repeat(10000) + 'b'.repeat(10000);
    expect(longestUniformSubstringAfterReplacements(simpleLarge, 5000)).toBe(15000);
});
