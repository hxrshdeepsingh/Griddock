'use client';

function createRows(canvas, draw, rows, color, width) {
  let singlePosition = canvas.width / rows;
  let globalPosition = singlePosition;

  for (let i = 1; i < rows; i++) {
    draw.beginPath();
    draw.strokeStyle = color;
    draw.lineWidth = width;
    draw.moveTo(globalPosition, canvas.height);
    draw.lineTo(globalPosition, 0);
    draw.stroke();
    globalPosition += singlePosition;
  }
}

function createCols(canvas, draw, cols, color, width) {
  let singlePosition = canvas.height / cols;
  let globalPosition = singlePosition;

  for (let i = 1; i < cols; i++) {
    draw.beginPath();
    draw.strokeStyle = color;
    draw.lineWidth = width;
    draw.moveTo(0, globalPosition);
    draw.lineTo(canvas.width, globalPosition);
    draw.stroke();
    globalPosition += singlePosition;
  }
}

export default [createRows, createCols];
