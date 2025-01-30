function zero_striping_hash_sets(matrix: number[][]): void {
    if (!matrix || !matrix[0]) 
        return;
    const m = matrix.length, n = matrix[0].length;
    const zero_rows = new Set<number>(), zero_cols = new Set<number>();
    // Pass 1: Traverse through the matrix to identify the rows and
    // columns containing zeros and store their indexes in the 
    // appropriate hash sets.
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                zero_rows.add(r);
                zero_cols.add(c);
            }
        }
    }
    // Pass 2: Set any cell in the matrix to zero if its row index is 
    // in 'zero_rows' or its column index is in 'zero_cols'.
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (zero_rows.has(r) || zero_cols.has(c)) {
                matrix[r][c] = 0;
            }
        }
    }
}