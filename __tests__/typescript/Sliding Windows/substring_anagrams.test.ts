import { expect, test } from 'vitest';
import { substringAnagrams } from '../../../coding-interview-patterns/typescript/Sliding Windows/substring_anagrams';

const anagramTestCases = [
  // --- Basic Cases ---
  { s: 'a', t: 'a', expected: 1 },              // Single character match
  { s: 'af', t: 'be', expected: 0 },            // Target does not appear in source
  // --- Overlapping Occurrences ---
  { s: 'abab', t: 'ab', expected: 3 },          // Overlapping occurrences in pattern
  { s: 'aaaa', t: 'aa', expected: 3 },          // Overlapping occurrences in uniform string
  // --- Complex Cases ---
  { s: 'caabab', t: 'aba', expected: 2 },       // Non-uniform string with multiple occurrences
  { s: 'cbaebabacd', t: 'abc', expected: 2 },   // Multiple valid anagram positions
  { s: 'abc', t: 'cba', expected: 1 },          // Rotational variation
  { s: 'abacbabc', t: 'abc', expected: 4 },     // Complex overlapping scenario
  { s: 'abcabcabc', t: 'cab', expected: 7 },    // Cyclic repetitions and rotations
  // --- Edge Cases ---
  { s: '', t: 'a', expected: 0 },               // Source empty, target non-empty
  { s: 'a', t: '', expected: 0 },               // Target empty, source non-empty
  { s: '', t: '', expected: 0 },                // Both source and target empty
  { s: 'abc', t: 'abcd', expected: 0 },         // Target longer than source
//   // --- Additional Cases: Case Sensitivity and Non-Alphabetic Characters --- excluded as problem is limited to lowercase English letters
//   { s: 'AbA', t: 'aba', expected: 0 },           // Case sensitivity check
//   { s: '123@321!', t: '321', expected: 2 },      // Handling digits and punctuation
];

test.each(anagramTestCases)('substringAnagrams($s, $t) -> $expected', ({ s, t, expected }) => {
    expect(substringAnagrams(s, t)).toBe(expected);
});

// --- Non-functional tests ---
test('Performance: handle large strings', () => {
    const largeString = 'a'.repeat(10000);
    // For a string of 10000 "a"s, the number of times "aaa" occurs is 10000 - 3 + 1 = 9998.
    expect(substringAnagrams(largeString, 'aaa')).toBe(9998);
});
