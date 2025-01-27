import { expect, test, suite } from "vitest";
import { largest_container } from "../../../typescript/Two Pointers/largest_container";
import { largest_container_brute_force } from "../../../typescript/Two Pointers/largest_container_brute_force";

suite("largest_container", () => {
    const testCases = [
        { nums: [2, 7, 8, 3, 7, 6],  expected: 24 }, // array with multiple containers, 4x6=24
        { nums: [], expected: 0 }, // empty array

        { nums: [1], expected: 0 }, // array with a single element
        { nums: [0, 1, 0], expected: 0 }, // array with no container

        { nums: [3, 3, 3, 3], expected: 9 }, // array with all same elements    
        { nums: [1, 2, 3], expected: 2 }, // array with strictly increasing elements
        { nums: [3, 2, 1], expected: 2 }, // array with strictly decreasing elements
    ];
    test.each(testCases)("largest_container($nums) -> $expected", 
                        ({ nums, expected }) => {
        expect(largest_container(nums)).toBe(expected);
    });

    test.each(testCases)("largest_container_brute_force($nums) -> $expected",
                                    ({ nums, expected }) => {
        expect(largest_container_brute_force(nums)).toBe(expected);
    });
});
