function putChessmen() {
    field = document.getElementById('chessField');
    for (let i = 1; i <= field.rows.length - 2; i++) {
        for (let j = 1; j <= field.rows[i].cells.length - 2; j++) {
            // Расставляем ладьи.
            bRook = document.createElement('img');
            bRook.src = 'img/BlackRook.png'
            wRook = document.createElement('img');
            wRook.src = 'img/WhiteRook.png'
            if (j == 1 || j == (field.rows[i].cells.length - 2)) {
                if (i == 1) {
                    field.rows[i].cells[j].appendChild(bRook);
                }
                else if (i == (field.rows.length - 2)) {
                    field.rows[i].cells[j].appendChild(wRook);
                }
            }
            // Расставляем коней.
            bKnight = document.createElement('img');
            bKnight.src = 'img/BlackKnight.png'
            wKnight = document.createElement('img');
            wKnight.src = 'img/WhiteKnight.png'
            if (j == 2 || j == (field.rows[i].cells.length - 3)) {
                if (i == 1) {
                    field.rows[i].cells[j].appendChild(bKnight);
                }
                else if (i == (field.rows.length - 2)) {
                    field.rows[i].cells[j].appendChild(wKnight);
                }
            }
            // Расставляем слонов.
            bBishop = document.createElement('img');
            bBishop.src = 'img/BlackBishop.png'
            wBishop = document.createElement('img');
            wBishop.src = 'img/WhiteBishop.png'
            if (j == 3 || j == (field.rows[i].cells.length - 4)) {
                if (i == 1) {
                    field.rows[i].cells[j].appendChild(bBishop);
                }
                else if (i == (field.rows.length - 2)) {
                    field.rows[i].cells[j].appendChild(wBishop);
                }
            }
            // Расставляем ферзей.
            bQueen = document.createElement('img');
            bQueen.src = 'img/BlackQueen.png'
            wQueen = document.createElement('img');
            wQueen.src = 'img/WhiteQueen.png'
            if (j == 4) {
                if (i == 1) {
                    field.rows[i].cells[j].appendChild(bQueen);
                }
                else if (i == (field.rows.length - 2)) {
                    field.rows[i].cells[j].appendChild(wQueen);
                }
            }
            // Расставляем королей.
            bKing = document.createElement('img');
            bKing.src = 'img/BlackKing.png'
            wKing = document.createElement('img');
            wKing.src = 'img/WhiteKing.png'
            if (j == 5) {
                if (i == 1) {
                    field.rows[i].cells[j].appendChild(bKing);
                }
                else if (i == (field.rows.length - 2)) {
                    field.rows[i].cells[j].appendChild(wKing);
                }
            }
            // Расставляем пешки.
            bPawn = document.createElement('img');
            bPawn.src = 'img/BlackPawn.png'
            wPawn = document.createElement('img');
            wPawn.src = 'img/WhitePawn.png'
            if (i == 2) {
                field.rows[i].cells[j].appendChild(bPawn);
            }
            else if (i == (field.rows.length - 3)) {
                field.rows[i].cells[j].appendChild(wPawn);
            }
        }

    }
}
putChessmen();