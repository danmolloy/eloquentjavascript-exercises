var size = 8;

var board = "";

for (i = 0; i < size*size; i++) {

  if (i % size == 0 && board.length > 0)
    board += "\n";
  if (board.length % 2 != 0)
    board += "#";
  else
  board += " ";

}

console.log(board);
