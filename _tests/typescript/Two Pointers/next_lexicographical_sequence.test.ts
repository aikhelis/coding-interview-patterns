import { expect, test } from "vitest";
import { next_lexicographical_sequence } from "../../../typescript/Two Pointers/next_lexicographical_sequence";
    
const testCases = [
    { s: "abcd", expected: "abdc" }, // "abdc" is the next sequence in lexicographical order after rearranging "abcd".
    { s: "dcba", expected: "abcd" }, // Since "dcba" is the last sequence in lexicographical order, we return the first sequence: "abcd".
    { s: "a", expected: "a" }, // Tests a string with a single character.
    { s: "aaaa", expected: "aaaa" }, // Tests a string with a repeated character.
    { s: "ynitsed", expected: "ynsdeit" }// Tests a string with a random pivot character.
];

test.each(testCases)("next_lexicographical_sequence($s) -> $expected", 
    ({ s, expected }) => {
        expect(next_lexicographical_sequence(s)).toBe(expected);
    }
);
