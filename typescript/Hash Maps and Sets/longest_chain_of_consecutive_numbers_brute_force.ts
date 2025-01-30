function longest_chain_of_consecutive_numbers_brute_force(nums: number[]): number {
    if (nums.length === 0)
        return 0;
    let longest_chain = 0;
    // Look for chains of consecutive numbers that start from each number.
    for (const num of nums) {
        let current_num = num;
        let current_chain = 1;
        // Continue to find the next consecutive numbers in the chain.
        while (nums.includes(current_num + 1)) {
            current_num += 1;
            current_chain += 1;
        }
        longest_chain = Math.max(longest_chain, current_chain);
    }
    return longest_chain;
}