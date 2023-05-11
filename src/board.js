import Icon from "./assets/knight.png";

const board = () => {
  const startLocation = [0, 0];
  const coordinates = [];
  const chessTable = document.createElement("table");

  chessTable.setAttribute("class", "center");
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("tr");
    const rowCoord = Math.abs(i - 7);
    // row.textContent = rowCoord;
    for (let z = 0; z < 8; z++) {
      const tableCell = document.createElement("td");
      const colCoord = z;
      // tableCell.textContent = colCoord;
      if ((i + z) % 2 == 0) {
        tableCell.setAttribute("class", "cell white");
        row.appendChild(tableCell);
        coordinates.push(rowCoord);
        coordinates.push(colCoord);
        tableCell.dataset.coordinates = coordinates;
        coordinates.splice(0, 2);
      } else {
        tableCell.setAttribute("class", "cell black");
        row.appendChild(tableCell);
        coordinates.push(rowCoord);
        coordinates.push(colCoord);
        tableCell.dataset.coordinates = coordinates;
        coordinates.splice(0, 2);
      }
    }
    chessTable.appendChild(row);
  }

  const cellNodes = chessTable.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (startLocation.toString() === cellNode.dataset.coordinates) {
      const knightImg = document.createElement("img");
      knightImg.src = Icon;
      cellNode.appendChild(knightImg);
    }
  });
  document.body.appendChild(chessTable);
};

const resetBoard = (function () {
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    location.reload();
  });
}());

export default board;
