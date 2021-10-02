// let container = document.querySelector('.container');
// let tetris = document.querySelector('.tetris');

// for (let index = 0; index < 180; index++) {
//     const element = document.createElement('div');
//     element.classList.add('element');
//     tetris.appendChild(element);
// }
// let excel = document.querySelectorAll('.element');
// let i = 0;
// for (let y = 18; y > 0; y--) {
//     for (let x = 1; x < 11; x++) {
//         excel[i].setAttribute('posy', y);
//         excel[i].setAttribute('posx', x);
//         i++;
//     }
// }
// let x = 4;
// let y = 15;


// function shift() {

//     if (event.which == 37 && x > 1) {
//         x--;
//         console.log(x);
//     }
//     if (event.which == 39 && x < 10) {
//         x++;
//         console.log(x);
//     }
//     if (event.which == 40) {
//         move();
//     }
//     if (event.which == 38) {
//         move();
//     }
// }
// document.addEventListener('keydown', shift);

// let arrayF = [
//     //палка
//     [
//         [0, 1],
//         [0, 2],
//         [0, 3]
//     ],
//     //квадрат
//     [
//         [1, 0],
//         [0, 1],
//         [1, 1]
//     ],
//     //L правая
//     [
//         [1, 0],
//         [0, 1],
//         [0, 2]
//     ],
//     //L левая
//     [
//         [-1, 0],
//         [0, 1],
//         [0, 2]
//     ],
//     //молния левая
//     [
//         [0, 1],
//         [-1, 1],
//         [-1, 2]
//     ],
//     // молния правая
//     [
//         [0, 1],
//         [1, 1],
//         [1, 2]
//     ]
// ];


// let currentF = 0;


// function creatF() {
//     currentF = getRandom();
//     let figure = [
//         document.querySelector(`[posy="${y}"][posx="${x}"]`),
//         document.querySelector(`[posy="${y+arrayF[currentF][0][1]}"][posx="${x+arrayF[currentF][0][0]}"]`),
//         document.querySelector(`[posy="${y+arrayF[currentF][1][1]}"][posx="${x+arrayF[currentF][1][0]}"]`),
//         document.querySelector(`[posy="${y+arrayF[currentF][2][1]}"][posx="${x+arrayF[currentF][2][0]}"]`)
//     ];
//     for (let index = 0; index < figure.length; index++) {
//         figure[index].classList.add('excel');

//     }
// }

// function getRandom() {
//     return Math.round(Math.random() * (arrayF.length - 1));
// }

// function move() {


//     for (let index = 0; index < excel.length; index++) {
//         excel[index].classList.remove('excel');
//     }

//     let flag = false;

//     function getPos() {

//         if (y >= 2) {
//             let figure = [
//                 document.querySelector(`[posy="${y-1}"][posx="${x}"]`),
//                 document.querySelector(`[posy="${y+arrayF[currentF][0][1]-1}"][posx="${x+arrayF[currentF][0][0]}"]`),
//                 document.querySelector(`[posy="${y+arrayF[currentF][1][1]-1}"][posx="${x+arrayF[currentF][1][0]}"]`),
//                 document.querySelector(`[posy="${y+arrayF[currentF][2][1]-1}"][posx="${x+arrayF[currentF][2][0]}"]`)
//             ];
//             for (let index = 0; index < figure.length; index++) {
//                 if (figure[index].classList.contains('set')) {
//                     flag = true;
//                 }
//             }
//         }

//     }
//     getPos();
//     if (y == 1 || flag == true) {
//         let figure = [
//             document.querySelector(`[posy="${y}"][posx="${x}"]`),
//             document.querySelector(`[posy="${y+arrayF[currentF][0][1]}"][posx="${x+arrayF[currentF][0][0]}"]`),
//             document.querySelector(`[posy="${y+arrayF[currentF][1][1]}"][posx="${x+arrayF[currentF][1][0]}"]`),
//             document.querySelector(`[posy="${y+arrayF[currentF][2][1]}"][posx="${x+arrayF[currentF][2][0]}"]`)
//         ];
//         for (let index = 0; index < figure.length; index++) {
//             figure[index].classList.add('set');
//         }
//         y = 15;
//         creatF();
//     } else {
//         y--;
//         let figure = [
//             document.querySelector(`[posy="${y}"][posx="${x}"]`),
//             document.querySelector(`[posy="${y+arrayF[currentF][0][1]}"][posx="${x+arrayF[currentF][0][0]}"]`),
//             document.querySelector(`[posy="${y+arrayF[currentF][1][1]}"][posx="${x+arrayF[currentF][1][0]}"]`),
//             document.querySelector(`[posy="${y+arrayF[currentF][2][1]}"][posx="${x+arrayF[currentF][2][0]}"]`)
//         ];
//         for (let index = 0; index < figure.length; index++) {
//             figure[index].classList.add('excel');
//         }
//     }

// }
// let interval = setInterval(move, 300);

// creatF();


//============================================================================================================================
//============================================================================================================================
//============================================================================================================================
const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ]
];

const J = [
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]
];

const L = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]
];

const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
];

const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ]
];
const cvs = document.getElementById('tetris');
const ctx = cvs.getContext('2d');
const ROW = 20;
const COL = COLUMN = 10;
const SQ = SqareSize = 20;
const VACANT = 'WHITE';
const scoreElement = document.getElementById('score');



document.addEventListener('keydown', CONTROL);

function CONTROL() {
    if (event.keyCode == 37) {
        p.moveLeft()
        dropStart = Date.now();
    } else if (event.keyCode == 38) {
        p.rotate()
        dropStart = Date.now();
    } else if (event.keyCode == 39) {
        p.moveRight()
        dropStart = Date.now();
    } else if (event.keyCode == 40) {
        p.moveDown()

    }
}

//draw sqare
function drawSqare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    ctx.strokeStyle = 'BLACK';
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}
// create the board

let board = [];
for (let r = 0; r < ROW; r++) {
    board[r] = [];
    for (let c = 0; c < COL; c++) {
        board[r][c] = VACANT;
    }
}

//draw the board

function drawBoard() {
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            drawSqare(c, r, board[r][c])
        }
    }
}
drawBoard();

const PIECES = [
    [Z, 'red'],
    [S, 'green'],
    [T, 'yellow'],
    [O, 'blue'],
    [L, 'purple'],
    [I, 'cyan'],
    [J, 'orange']
];

function randomPiece() {
    let r = Math.floor(Math.random() * PIECES.length);
    return new Piece(PIECES[r][0], PIECES[r][1]);
}

let p = randomPiece();

function Piece(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;
    this.tetrominoN = 0; // start 1 pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.x = 3;
    this.y = -2;

}

Piece.prototype.fill = function (color) {
    for (let r = 0; r < this.activeTetromino.length; r++) {
        for (let c = 0; c < this.activeTetromino.length; c++) {
            if (this.activeTetromino[r][c]) {
                drawSqare(this.x + c, this.y + r, color)
            }

        }
    }
}
Piece.prototype.draw = function () {
    this.fill(this.color);
}

Piece.prototype.unDraw = function () {
    this.fill(VACANT);
}
Piece.prototype.moveDown = function () {
    if (!this.collision(0, 1, this.activeTetromino)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {
        this.lock();
        p = randomPiece();
    }
}
let dropStart = Date.now();
let gameOver = false;

function drop() {
    let now = Date.now();
    let delta = now - dropStart;
    if (delta > 1000) {
        dropStart = Date.now();
        p.moveDown();
    }
    if (!gameOver) {
        requestAnimationFrame(drop);
    }

}
drop();

Piece.prototype.moveRight = function () {
    if (!this.collision(1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x++;
        this.draw();
    }

}

Piece.prototype.moveLeft = function () {
    if (!this.collision(-1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x--;
        this.draw();
    }

}

Piece.prototype.rotate = function () {
    let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
    let kick = 0;
    if (this.collision(0, 0, nextPattern)) {
        if (this.x > COL / 2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }
    if (!this.collision(kick, 0, 0, nextPattern)) {
        this.unDraw();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1) % this.activeTetromino.length;
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw();
    }

}
let score = 0;
Piece.prototype.lock = function () {
    for (let r = 0; r < this.activeTetromino.length; r++) {
        for (let c = 0; c < this.activeTetromino.length; c++) {
            if (!this.activeTetromino[r][c]) {
                continue;
            }
            if (this.y + r < 0) {
                alert('Game over');
                gameOver = true;
                break;
            }
            board[this.y + r][this.x + c] = this.color;
        }
    }
    for (let r = 0; r < ROW; r++) {
        let isRowFull = true;
        for (let c = 0; c < COL; c++) {
            isRowFull = isRowFull && (board[r][c] != VACANT);
            }
        if (isRowFull) {
            for (let y = r; y > 1; y--) {
                for (let c = 0; c < COL; c++) {
                    board[y][c] = board[y - 1][c];
                }
            }
            for (let c = 0; c < COL; c++) {
                board[0][c] = VACANT;
            }
            score += 10;
        }
    }
    drawBoard();
    scoreElement.innerHTML = score;
}

Piece.prototype.collision = function (x, y, piece) {
    for (let r = 0; r < piece.length; r++) {
        for (let c = 0; c < piece.length; c++) {
            if (!piece[r][c]) {
                continue;
            }
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            if (newX < 0 || newX >= COL || newY >= ROW) {
                return true;
            }
            if (newY < 0) {
                continue;
            }
            if (board[newY][newX] != VACANT) {
                return true;
            }
        }
    }
    return false;

}
// {|<|<}