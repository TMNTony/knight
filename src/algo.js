const squareRegistry = new Map();

const chessSquare = (x, y) => {
  const xPosition = x;
  const yPosition = y;
  let predecessor;

  const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];
};
