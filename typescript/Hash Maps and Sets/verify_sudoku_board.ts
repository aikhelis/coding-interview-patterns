function verify_sudoku_board(board: number[][]): boolean {
    // Create hash sets for each row, column, and subgrid to keep 
    // track of numbers previously seen on any given row, column, or 
    // subgrid.
    const row_sets: Set<number>[] = Array.from({ length: 9 }, () => new Set());
    const column_sets: Set<number>[] = Array.from({ length: 9 }, () => new Set());
    const subgrid_sets: Set<number>[][] = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === 0) 
                continue;
            // Check if 'num' has been seen in the current row, 
            // column, or subgrid.
            if (row_sets[r].has(num)) 
                return false;
            if (column_sets[c].has(num)) 
                return false;
            if (subgrid_sets[Math.floor(r / 3)][Math.floor(c / 3)].has(num)) 
                return false;
            // If we passed the above checks, mark this value as seen 
            // by adding it to its corresponding hash sets.
            row_sets[r].add(num);
            column_sets[c].add(num);
            subgrid_sets[Math.floor(r / 3)][Math.floor(c / 3)].add(num);
        }
    }
    return true;
}