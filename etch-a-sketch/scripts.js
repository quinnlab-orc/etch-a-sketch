const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
        

//let sideChoice = parseInt(prompt());
sideChoice = 16;


function drawGrid(sideChoice) {
    container.style.gridTemplateColumns = `repeat(${sideChoice}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sideChoice}, 1fr)`;



    for (let x = 0; x < sideChoice; x++) {
        for (let i = 0; i < sideChoice; i++) {
            const gridDivs = document.createElement('div');
            gridDivs.setAttribute("class", "grid");
            gridDivs.setAttribute("id", "gridID")
            let pixels = 700/sideChoice;
            gridDivs.style.width = pixels+'px';
            gridDivs.style.height = pixels+'px';

            container.appendChild(gridDivs);
            console.log('worked')
        };
    };
};

drawGrid(sideChoice);

const gridID = document.querySelectorAll('.grid');

function clearGrid() {
    container.innerHTML = '';
};


container.addEventListener('mouseover', function(e) {
    let rgb1 = Math.floor(Math.random()*255);
    let rgb2 = Math.floor(Math.random()*255);
    let rgb3 = Math.floor(Math.random()*255);
    e.target.style.background = 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 +')';
});

btn.addEventListener('click', function newGrid()  {
    clearGrid();

    let newSize = prompt("How many columns/rows do you want?")
    newSize = parseInt(newSize);
    if (newSize <= 0 ) {
        alert("Enter a number greater than 0.")
        return newGrid();
    } else {
        drawGrid(newSize);
    }
});