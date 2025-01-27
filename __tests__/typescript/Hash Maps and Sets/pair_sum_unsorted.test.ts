import { suite, test, expect } from 'vitest';
import { pair_sum_unsorted } from "../../../typescript/Hash Maps and Sets/pair_sum_unsorted";
import { pair_sum_unsorted_two_pass } from "../../../typescript/Hash Maps and Sets/pair_sum_unsorted_two_pass";

const testCases = [
    // Test case 1: Simple case with positive numbers
    { nums: [1, 2, 3, 4], target: 5, expected: [1, 2] },
    // Test case 2: No pairs sum up to the target
    { nums: [1, 2, 3, 4], target: 10, expected: [] },
    // Test case 3: Negative numbers with a negative target
    { nums: [-1, -2, -3, -4], target: -5, expected: [1, 2] },
    // Test case 4: Mixed positive and negative numbers with a negative target
    { nums: [-10, 20, 10, -40, 50, -60, 70], target: -50, expected: [0, 3] },
    // Test case 5: Array with duplicate numbers
    { nums: [1, 2, 3, 4, 3], target: 6, expected: [1, 3] },
    // Test case 6: Empty array
    { nums: [], target: 5, expected: [] },
    // Test case 7: Single element array
    { nums: [5], target: 5, expected: [] },
    // Test case 8: Mixed positive and negative numbers with a positive target
    { nums: [-1, 3, 4, 2], target: 3, expected: [0, 2] },
];
const testCasesTwoPass = [...testCases];
testCasesTwoPass[0] = { nums: [1, 2, 3, 4], target: 5, expected: [0, 3] };
testCasesTwoPass[2] = { nums: [-1, -2, -3, -4], target: -5, expected: [0, 3] };

suite('pair_sum_unsorted', () => {
    test.each(testCases)("pair_sum_unsorted($nums, $target) -> $expected", 
                        ({ nums, target, expected }) => {
        const result = pair_sum_unsorted(nums, target);
        expect(result.sort()).toEqual(expected.sort());
    });
    
    test.each(testCasesTwoPass)("pair_sum_unsorted_two_pass($nums, $target) -> $expected",
                                    ({ nums, target, expected }) => {
        const result = pair_sum_unsorted_two_pass(nums, target);
        expect(result.sort()).toEqual(expected.sort());
    })
})
