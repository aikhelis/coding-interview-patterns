function pair_sum_unsorted(nums: number[], target: number): number[] {
    const hashmap = {}
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[target - nums[i]] !== undefined)
            return [hashmap[target - nums[i]], i]
        hashmap[nums[i]] = i
    }
    return []
}
