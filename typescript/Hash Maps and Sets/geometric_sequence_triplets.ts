function geometric_sequence_triplets(nums: number[], r: number): number {
    const left_map: { [key: number]: number } = {};
    const right_map: { [key: number]: number } = {};
    let count = 0;
    // Populate 'right_map' with the frequency of each element in the array.
    for (const x of nums) 
        right_map[x] = (right_map[x] || 0) + 1;
    // Search for geometric triplets that have x as the center.
    for (const x of nums) {
        // Decrement the frequency of x in right_map' since x is now being
        // processed and is no longer to the right.
        right_map[x] -= 1;
        if (x % r === 0) {
            const left_value = x / r;
            const right_value = x * r;
            count += (left_map[left_value] || 0) * (right_map[right_value] || 0);
        }
        // Increment the frequency of x in leftMap since it'll be a part of the
        // left side of the array once we iterate to the next value of x.
        left_map[x] = (left_map[x] || 0) + 1;
    }
    return count;
}