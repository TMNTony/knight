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
  const setOredecessor = (newPredecessor) => {
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
};
