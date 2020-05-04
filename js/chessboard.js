"use strict"

function renderChessboard(size) {
    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard')

    //validacija

    //logika
    for (let i=0; i<size; i++) {
    HTML = `
    <div class="row" style="height: 25%; >
            <div class="cell white" style="height: 25%</div>
            <div class="cell black" style="height: 25%></div>
            <div class="cell white" style="height: 25%</div>
            <div class="cell black" style="height: 25%></div>
        </div>`

    }

    DOMchessboard.innerHTML = HTML;
    return;
}

renderChessboard(4);