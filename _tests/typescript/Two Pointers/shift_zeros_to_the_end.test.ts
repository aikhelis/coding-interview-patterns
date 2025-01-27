import { expect, test, suite } from "vitest";
import { shift_zeros_to_the_end } from "../../../typescript/Two Pointers/shift_zeros_to_the_end";
import { shift_zeros_to_the_end_naive } from "../../../typescript/Two Pointers/shift_zeros_to_the_end_naive";

suite("shift_zeros_to_the_end", () => {
    const testCases = [
        { nums: [0, 1, 0, 3, 2], expected: [1, 3, 2, 0, 0] }, // array with multiple zeros
        { nums: [], expected: [] }, // empty array
        { nums: [0], expected: [0] }, // array with one 0
        { nums: [1], expected: [1] }, // array with one 1
        { nums: [0, 0, 0], expected: [0, 0, 0] }, // array with all 0s
        { nums: [1, 3, 2], expected: [1, 3, 2] }, // array with all non-zeros
        { nums: [1, 1, 1, 0, 0], expected: [1, 1, 1, 0, 0] }, // array with all zeros already at the end
        { nums: [0, 0, 1, 1, 1], expected: [1, 1, 1, 0, 0] }, // array with all zeros at the end
    ];
    
    test.each(testCases)("shift_zeros_to_the_end($nums) -> $expected", 
                        ({ nums, expected }) => {
        shift_zeros_to_the_end(nums)
        expect(nums).toEqual(expected)
    });

    test.each(testCases)("shift_zeros_to_the_end_naive($nums) -> $expected",
                        ({ nums, expected }) => {
        shift_zeros_to_the_end_naive(nums)
        expect(nums).toEqual(expected)
    });
});
