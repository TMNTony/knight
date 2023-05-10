const squareRegistry = new Map();

const chessSquare = (x, y) => {
  const xPosition = x;
  const yPosition = y;
  let predecessor;

  const moves = [
    [2, 1], [2, -1],
    [-2, 1], [-2, -1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2],
  ];

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPredecessor) => {
    predecessor = predecessor || newPredecessor;
  };

  const name = () => `${x}, ${y}`;

  const possibleKnightMoves = () => moves
    .map((offset) => newSquareFrom(offset[0], offset[1]))
    .filter((square) => square !== undefined);

  const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      return chessSquare(newX, newY);
    }
  };

  if (squareRegistry.has(name())) {
    return squareRegistry.get(name());
  }
  const newSquare = {
    name, getPredecessor, setPredecessor, possibleKnightMoves,
  };
  squareRegistry.set(name(), newSquare);
  return newSquare;
};

const knightTravails = (start, finish) => {
  squareRegistry.clear();

  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.possibleKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }
  const path = [target];
  while (!path.includes(origin)) {
    const prevSquare = path[0].getPredecessor();
    path.unshift(prevSquare);
  }
  console.log(`The shortest path was ${path.length - 1} moves`);
  console.log("The moves were:");
  path.forEach((square) => console.log(square.name()));
};

export default knightTravails;
