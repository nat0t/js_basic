function createField() {
    const ROWS = 8;
    const COLUMNS = 8;

    field = document.createElement('table');
    field.id = 'chessField';
    field.setAttribute('cellpadding', '0');
    field.setAttribute('cellspacing', '0');
    document.body.appendChild(field);

    for (let i = 1; i <= ROWS + 2; i++) {
        let row = document.createElement('tr');
        field.appendChild(row);
        for (let j = 1; j <= COLUMNS + 2; j++) {
            let cell = document.createElement('td');
            // Классы для черно-белых клеток.
            if (i % 2 != 0) {
                cell.className = (j % 2 == 0) ? 'black' : 'white';
            }
            else {
                cell.className = (j % 2 != 0) ? 'black' : 'white';
            }
            // Класс для нотации.
            if (i == 1 || i == ROWS + 2 || j == 1 || j == COLUMNS + 2) {
                cell.className = 'notation';
            }
            // Обозначения столбцов.
            if ((i == 1 || i == ROWS + 2) && (j != 1) && (j != COLUMNS + 2)) {
                cell.innerHTML = 'ABCDEFGH'[j - 2];
            }
            // Обозначения строк.
            if ((j == 1 || j == COLUMNS + 2) && (i != 1) && (i != ROWS + 2)) {
                cell.innerHTML = ROWS + 2 - i;
            }
            row.appendChild(cell);
        }

    }
}
createField();