import { expect, test, suite } from 'vitest'
import {triplet_sum} from '../../../typescript/Two Pointers/triplet_sum';
import {triplet_sum_brute_force} from '../../../typescript/Two Pointers/triplet_sum_brute_force';

suite('triplet_sum', () => {
    const testCases = [
        { nums: [0, -1, 2, -3, 1], expected: [[-3, 1, 2], [-1, 0, 1]] }, // multiple distinct triplets

        { nums: [],         expected: [] }, // empty array
        { nums: [0],        expected: [] }, // single element
        { nums: [1, -1],    expected: [] }, // two elements
        { nums: [1, 0, 0],  expected: [] }, // no triplet in a three element array
        { nums: [0, 0, 0],  expected: [[0, 0, 0]] }, // single triplet
        { nums: [0, 0, 1, -1, 1, -1], expected: [[-1, 0, 1]] } //duplicate triplets
    ];

    test.each(testCases)('triplet_sum($nums) -> $expected', 
                                    ({ nums, expected }) => {
        const result = triplet_sum(nums);
        expect(result.sort().map(triplet => triplet.sort())).toEqual(
            expected.sort().map(triplet => triplet.sort())
        );
    });

    test.each(testCases)('triplet_sum_brute_force($nums) -> $expected', 
                                    ({ nums, expected }) => {
        const result = triplet_sum_brute_force(nums);
        expect(result.sort().map(triplet => triplet.sort())).toEqual(
            expected.sort().map(triplet => triplet.sort())
        );
    });
});