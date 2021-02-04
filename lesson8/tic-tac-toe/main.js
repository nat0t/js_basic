const checkWinner = (model) => {
  let winner = null;

  const equals3 = (a, b, c) => {
    return (a == b && b == c && a != '');
  }

  // tie
  if (model[0].includes('') == false && model[1].includes('') == false && model[2].includes('') == false) {
    winner = 'nobody';
  }

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(model[i][0], model[i][1], model[i][2])) {
      winner = model[i][0];
    }
  }

  // vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(model[0][i], model[1][i], model[2][i])) {
      winner = model[0][i];
    }
  }

  // diagonal
  if (equals3(model[0][0], model[1][1], model[2][2])) {
    winner = model[0][0];
  }
  if (equals3(model[0][2], model[1][1], model[2][0])) {
    winner = model[0][2];
  }
  return winner;
};

const game = () => {
  const model = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const playerX = 'X';
  const playerO = 'O';
  let currentPlayer = playerX;

  function createField() {
    const $table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
      const $tr = document.createElement('tr');
      $tr.dataset.index = i;

      for (let j = 0; j < 3; j++) {
        const $td = document.createElement('td');
        $td.dataset.index = j;
        $tr.appendChild($td);
      }

      $table.appendChild($tr);
    }
    return $table;
  }

  $body = document.getElementsByTagName('body')[0];
  $body.appendChild(createField()).addEventListener('click', (e) => {
    const row = e.target.parentNode.dataset.index;
    const column = e.target.dataset.index;
    // check if td assigned
    if (model[row][column] === '') {
      model[row][column] = currentPlayer;
      e.target.innerHTML = currentPlayer;
    }

    const winner = checkWinner(model);
    if (winner) {
      alert(`Winner: ${winner}`);
    }

    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  });
}

window.onload = () => {
  game();
};
