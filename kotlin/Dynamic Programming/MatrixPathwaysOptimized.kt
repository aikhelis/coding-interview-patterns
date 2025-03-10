fun matrixPathwaysOptimized(m: Int, n: Int): Int {
    // Initialize 'prevRow' as the DP values of row 0, which are all 1s.
    var prevRow = IntArray(n) { 1 }
    // Iterate through the matrix starting from row 1.
    for (r in 1 until m) {
        // Set the first cell of 'currRow' to 1. This is done by
        // setting the entire row to 1.
        val currRow = IntArray(n) { 1 }
        for (c in 1 until n) {
            // The number of unique paths to the current cell is the sum
            // of the paths from the cell above it ('prevRow[c]') and
            // the cell to the left ('currRow[c - 1]').
            currRow[c] = prevRow[c] + currRow[c - 1]
        }
        // Update 'prevRow' with 'currRow' values for the next
        // iteration.
        prevRow = currRow
    }
    // The last element in 'prevRow' stores the result for the
    // bottom-right cell.
    return prevRow[n - 1]
}
