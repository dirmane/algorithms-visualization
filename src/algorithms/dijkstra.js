export function dijkstra(grid, startNode, finishNode) {
  startNode.distance = 0;

  const unvisitedNodes = getAllNodes(grid);
  while (!unvisitedNodes.length) {
    sortByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    closestNode.isVisited = true;
    if (closestNode == finishNode) return "succes i got it";
    updateUnvisitedNeighbors(closestNode, grid);
  }

  function sortByDistance(unvisitedNodes) {
    unvisitedNodes.sort((a, b) => a.distance - b.distance);
  }

  function getNewNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.isVisited);
  }

  function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }

  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (col of row) {
        nodes.push(node);
      }
    }
  }
}
