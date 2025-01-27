function pair_sum_unsorted_two_pass(nums: number[], target: number): number[] {
    const num_map = {}
    // First pass: Populate the hash map with each number and its 
    // index.
    for (let i = 0; i < nums.length; i++)
        num_map[nums[i]] = i
    // Second pass: Check for each number's complement in the hash map.
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (num_map[complement] !== undefined && num_map[complement] !== i) 
            return [i, num_map[complement]]
    }
    return []
}
