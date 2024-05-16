const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
let numOfSquares = 16;

// make square via rows and columns
function makeSquare (numOfSquares) {

    for (let i = 0; i < numOfSquares; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        container.appendChild(rows);

        // add square to each row
        for (let i =0; i< numOfSquares; i++) {
            const squares = document.createElement('div');
            squares.classList.add('squares');
            rows.appendChild(squares);
        }
    }
}

makeSquare(numOfSquares);

// made for when hover, color changes on square
function changeColor (eachSquare) {
    eachSquare.style.backgroundColor = 'black';
}

// changes color dynamically
container.addEventListener('mouseover', (event) => {
    const target = event.target;

    if (target.classList.contains('squares')) {
        changeColor(target);
    }
});

// button to reset and change grid
resetButton.addEventListener('click', () => {
    numOfSquares = prompt('Enter for number of squares, 1-100');

    while (numOfSquares > 100) {
        numOfSquares = prompt('You have entered more than 100. Enter for number of squares, 1-100');
    }

    container.innerHTML = '';
    makeSquare(numOfSquares);
});

