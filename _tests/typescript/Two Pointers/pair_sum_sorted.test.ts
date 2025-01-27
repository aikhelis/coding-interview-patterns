import { expect, test, suite } from "vitest";
import { pair_sum_sorted } from "../../../typescript/Two Pointers/pair_sum_sorted";
import { pair_sum_sorted_brute_force } from "../../../typescript/Two Pointers/pair_sum_sorted_brute_force";

suite("pair_sum_sorted", () => {
    const testCases = [
        { nums: [-5, -2, 3, 4, 6], target: 7,   expected: [2, 3] },
        { nums: [1, 1, 1], target: 2, expected: [0, 2] }, // multiple pairs, pick up from the outwards

        { nums: [], target: 0,  expected: [] }, // empty array
        { nums: [1], target: 1, expected: [] }, // single element
        { nums: [2, 3], target: 5, expected: [0, 1] }, // one pair in a two elements
        { nums: [2, 4], target: 5, expected: [] }, // no pair in a two element array
        { nums: [2, 2, 3], target: 5, expected: [0, 2] }, // duplicate elements
        { nums: [-1, 2, 3], target: 2,      expected: [0, 2] }, // negative number
        { nums: [-3, -2, -1], target: -5,   expected: [0, 1] } // negative numbers
    ];

    const testCasesBruteForce = [...testCases];
    testCasesBruteForce[1] = { nums: [1, 1, 1], target: 2, expected: [0, 1] }; // multiple pairs, pick up from the left

    test.each(testCases)("pair_sum_sorted($nums, $target) -> $expected", 
                        ({ nums, target, expected }) => {
        const result = pair_sum_sorted(nums, target);
        expect(result.sort()).toEqual(expected.sort());
    });

    test.each(testCasesBruteForce)("pair_sum_sorted_brute_force($nums, $target) -> $expected",
                                    ({ nums, target, expected }) => {
        const result = pair_sum_sorted_brute_force(nums, target);
        expect(result.sort()).toEqual(expected.sort());
    });
});
