//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {

if (input.length === 0)
  return input;

if (input[0].length === 0)
  return input;

const grid = input.map(str => [...str]);

const row = grid.length;
const col = grid[0].length;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] == ' ') {
      let mineCount = 0;
      // top left
      if (i > 0 && j > 0 && grid[i - 1][j - 1] === '*')
        mineCount++;
      // top middle
      if (i > 0 && grid[i - 1][j] === '*')
        mineCount++;
      // top right
      if (i > 0 && j < n - 1 && grid[i - 1][j + 1] === '*')
        mineCount++;
      // middle left
      if (j > 0 && grid[i][j - 1] === '*')
        mineCount++;
      // middle right
      if (j < n - 1 && grid[i][j + 1] === '*')
        mineCount++;
            
      // bottom left
      if (i < m - 1 && j > 0 && grid[i + 1][j - 1] === '*')
        mineCount++;
      // bottom middle
      if (i < m - 1 && grid[i + 1][j] === '*')
        mineCount++;
      // botom right
      if (i < m - 1 && j < n - 1 && grid[i + 1][j + 1] === '*')
        mineCount++;
      if (mineCount > 0)
        grid[i][j] = mineCount;
    }
  }
}
return grid.map(arr => arr.join(''));
}