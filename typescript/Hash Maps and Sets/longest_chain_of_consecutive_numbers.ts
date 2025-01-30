function longest_chain_of_consecutive_numbers(nums: number[]): number {
    if (nums.length === 0)
        return 0;
    const num_set = new Set(nums);
    let longest_chain = 0;
    for (const num of num_set) {
        // If the current number is the smallest number in its chain, search for
        // the length of its chain.
        if (!num_set.has(num - 1)) {
            let currentNum = num;
            let currentChain = 1;
            // Continue to find the next consecutive numbers in the chain.
            while (num_set.has(currentNum + 1)) {
                currentNum += 1;
                currentChain += 1;
            }
            longest_chain = Math.max(longest_chain, currentChain);
        }
    }
    return longest_chain;
}