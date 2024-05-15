const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
let numOfSquares = 16;

// make square divs based on num^2
function makeSquare (numOfSquares) {

    for (let i = 0; i < numOfSquares**2; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
}

makeSquare(numOfSquares);

// style it with flex 
function style () {
    const squares = document.querySelectorAll('.square');
    const squareWidth = 959/numOfSquares;
    const squareHeight = 959/numOfSquares;
    squares.forEach((square) => {
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
    });
}

style();

// made for when hover, color changes on square
function changeColor (eachSquare) {
    eachSquare.style.backgroundColor = 'black';
}

// changes color dynamically
container.addEventListener('mouseover', (event) => {
    const target = event.target;

    if (target.classList.contains('square')) {
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
    style();
});

