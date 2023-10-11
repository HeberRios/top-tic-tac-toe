"use strict";

// MODULES ------------------------------------------------------------
const gameBoard = (function () {
    const gameBoardMatrix = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    const checkBoardState = function () {
        if (
            gameBoardMatrix[0][0] === "x" &&
            gameBoardMatrix[0][1] === "x" &&
            gameBoardMatrix[0][2] === "x"
        ) {
            gameBoardBtns[0].classList.add("x-winner");
            gameBoardBtns[0].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[1].classList.add("x-winner");
            gameBoardBtns[1].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[2].classList.add("x-winner");
            gameBoardBtns[2].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";

            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[1][0] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[1][2] === "x"
        ) {
            gameBoardBtns[3].classList.add("x-winner");
            gameBoardBtns[3].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[4].classList.add("x-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[5].classList.add("x-winner");
            gameBoardBtns[5].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";

            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[2][0] === "x" &&
            gameBoardMatrix[2][1] === "x" &&
            gameBoardMatrix[2][2] === "x"
        ) {
            gameBoardBtns[6].classList.add("x-winner");
            gameBoardBtns[6].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[7].classList.add("x-winner");
            gameBoardBtns[7].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[8].classList.add("x-winner");
            gameBoardBtns[8].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][0] === "x" &&
            gameBoardMatrix[1][0] === "x" &&
            gameBoardMatrix[2][0] === "x"
        ) {
            gameBoardBtns[0].classList.add("x-winner");
            gameBoardBtns[0].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[3].classList.add("x-winner");
            gameBoardBtns[3].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[6].classList.add("x-winner");
            gameBoardBtns[6].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][1] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[2][1] === "x"
        ) {
            gameBoardBtns[1].classList.add("x-winner");
            gameBoardBtns[1].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[4].classList.add("x-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[7].classList.add("x-winner");
            gameBoardBtns[7].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][2] === "x" &&
            gameBoardMatrix[1][2] === "x" &&
            gameBoardMatrix[2][2] === "x"
        ) {
            gameBoardBtns[2].classList.add("x-winner");
            gameBoardBtns[2].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[5].classList.add("x-winner");
            gameBoardBtns[5].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[8].classList.add("x-winner");
            gameBoardBtns[8].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][0] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[2][2] === "x"
        ) {
            gameBoardBtns[0].classList.add("x-winner");
            gameBoardBtns[0].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[4].classList.add("x-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[8].classList.add("x-winner");
            gameBoardBtns[8].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][2] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[2][0] === "x"
        ) {
            gameBoardBtns[2].classList.add("x-winner");
            gameBoardBtns[2].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[4].classList.add("x-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameBoardBtns[6].classList.add("x-winner");
            gameBoardBtns[6].firstElementChild.src =
                "assets/images/svg/icon-x-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToX();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][0] === "o" &&
            gameBoardMatrix[0][1] === "o" &&
            gameBoardMatrix[0][2] === "o"
        ) {
            gameBoardBtns[0].classList.add("o-winner");
            gameBoardBtns[0].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[1].classList.add("o-winner");
            gameBoardBtns[1].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[2].classList.add("o-winner");
            gameBoardBtns[2].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[1][0] === "o" &&
            gameBoardMatrix[1][1] === "o" &&
            gameBoardMatrix[1][2] === "o"
        ) {
            gameBoardBtns[3].classList.add("o-winner");
            gameBoardBtns[3].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[4].classList.add("o-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[5].classList.add("o-winner");
            gameBoardBtns[5].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[2][0] === "o" &&
            gameBoardMatrix[2][1] === "o" &&
            gameBoardMatrix[2][2] === "o"
        ) {
            gameBoardBtns[6].classList.add("o-winner");
            gameBoardBtns[6].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[7].classList.add("o-winner");
            gameBoardBtns[7].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[8].classList.add("o-winner");
            gameBoardBtns[8].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][0] === "o" &&
            gameBoardMatrix[1][0] === "o" &&
            gameBoardMatrix[2][0] === "o"
        ) {
            gameBoardBtns[0].classList.add("o-winner");
            gameBoardBtns[0].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[3].classList.add("o-winner");
            gameBoardBtns[3].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[6].classList.add("o-winner");
            gameBoardBtns[6].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][1] === "o" &&
            gameBoardMatrix[1][1] === "o" &&
            gameBoardMatrix[2][1] === "o"
        ) {
            gameBoardBtns[1].classList.add("o-winner");
            gameBoardBtns[1].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[4].classList.add("o-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[7].classList.add("o-winner");
            gameBoardBtns[7].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][2] === "o" &&
            gameBoardMatrix[1][2] === "o" &&
            gameBoardMatrix[2][2] === "o"
        ) {
            gameBoardBtns[2].classList.add("o-winner");
            gameBoardBtns[2].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[5].classList.add("o-winner");
            gameBoardBtns[5].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[8].classList.add("o-winner");
            gameBoardBtns[8].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][0] === "o" &&
            gameBoardMatrix[1][1] === "o" &&
            gameBoardMatrix[2][2] === "o"
        ) {
            gameBoardBtns[0].classList.add("o-winner");
            gameBoardBtns[0].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[4].classList.add("o-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[8].classList.add("o-winner");
            gameBoardBtns[8].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else if (
            gameBoardMatrix[0][2] === "o" &&
            gameBoardMatrix[1][1] === "o" &&
            gameBoardMatrix[2][0] === "o"
        ) {
            gameBoardBtns[2].classList.add("o-winner");
            gameBoardBtns[2].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[4].classList.add("o-winner");
            gameBoardBtns[4].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameBoardBtns[6].classList.add("o-winner");
            gameBoardBtns[6].firstElementChild.src =
                "assets/images/svg/icon-o-default.svg";
            gameController.endGame();
            gameController.turnCounterReset();
            setTimeout(showRoundWinnerWindow, 1000);
            disableBoardButtons();
            gameController.addPointToO();
            updateGameScores();
        } else {
            gameController.turnCounterIncrement();
            if (gameController.getTurnCounter() === 9) {
                gameController.turnCounterReset();
                gameController.addPointToTie();
                updateGameScores();
                setTimeout(toggleTiedRoundWindow, 1000);
            } else {
                gameController.switchCurrentPlayer();
            }
        }
    };

    const fillMatrixCell = function (row, column, playerID) {
        gameBoardMatrix[row][column] = playerID;
    };

    const resetMatrix = function () {
        for (let i = 0; i < gameBoardMatrix.length; i++) {
            for (let j = 0; j < gameBoardMatrix.length; j++) {
                gameBoardMatrix[i][j] = "";
            }
        }
    };

    return { checkBoardState, fillMatrixCell, resetMatrix };
})();

const gameController = (function () {
    let gameState = true;
    let currentPlayer = "";
    let player_1, player_2;
    let turnCounter = 0;
    const gameScores = [0, 0, 0];

    const setPlayer_1Mark = function (player_1Mark) {
        player_1 = player_1Mark;
    };

    const setPlayer_2Mark = function (player_2Mark) {
        player_2 = player_2Mark;
    };

    const setInitialPlayer = function (xMarkPlayer) {
        currentPlayer = xMarkPlayer;
    };

    const getCurrentPlayer = function () {
        return currentPlayer;
    };

    const isFirstPlayerXMark = function () {
        return player_1 === "x";
    };

    const isFirstPlayerOMark = function () {
        return player_1 === "o";
    };

    const switchCurrentPlayer = function () {
        if (getCurrentPlayer() === "x") {
            currentPlayer = "o";
        } else {
            currentPlayer = "x";
        }
    };

    const getTurnCounter = function () {
        return turnCounter;
    };

    const turnCounterIncrement = function () {
        turnCounter++;
    };

    const turnCounterReset = function () {
        turnCounter = 0;
    };

    const initializeGame = function (player_1Mark, player_2Mark, xplayerID) {
        setPlayer_1Mark(player_1Mark);
        setPlayer_2Mark(player_2Mark);
        setInitialPlayer(xplayerID);
    };

    const pressedBoardButton = function (pressedBtn) {
        if (getCurrentPlayer() === "x") {
            const positionArray = pressedBtn.dataset.rowColumn.split(",");
            const [row, column] = positionArray;
            gameBoard.fillMatrixCell(+row, +column, "x");
        } else {
            const positionArray = pressedBtn.dataset.rowColumn.split(",");
            const [row, column] = positionArray;
            gameBoard.fillMatrixCell(+row, +column, "o");
        }
    };

    const addPointToX = function () {
        gameScores[0] += 1;
    };

    const addPointToTie = function () {
        gameScores[1] += 1;
    };

    const addPointToO = function () {
        gameScores[2] += 1;
    };

    const getXScore = function () {
        return gameScores[0];
    };

    const getTieScore = function () {
        return gameScores[1];
    };

    const getOScore = function () {
        return gameScores[2];
    };

    const resetGameScores = function () {
        gameScores[0] = 0;
        gameScores[1] = 0;
        gameScores[2] = 0;
    };

    const endGame = function () {
        gameState = false;
    };

    return {
        initializeGame,
        setInitialPlayer,
        getCurrentPlayer,
        isFirstPlayerXMark,
        isFirstPlayerOMark,
        switchCurrentPlayer,
        getTurnCounter,
        turnCounterIncrement,
        turnCounterReset,
        pressedBoardButton,
        addPointToX,
        addPointToTie,
        addPointToO,
        getXScore,
        getTieScore,
        getOScore,
        resetGameScores,
        endGame,
    };
})();

// FACTORY FUNCTIONS --------------------------------------------------

const playerFactory = function (id) {
    return { id };
};

const xPlayer = playerFactory("x");
const oPlayer = playerFactory("o");

// SELECTING ELEMENTS -------------------------------------------------
// NEW GAME WINDOW
const newGameMenu = document.querySelector(".new-game-menu");
const xMarkSelectBtn = document.getElementById("x-selection-btn");
const xMarkSelectImg = xMarkSelectBtn.firstElementChild;
const oMarkSelectBtn = document.getElementById("o-selection-btn");
const oMarkSelectImg = oMarkSelectBtn.firstElementChild;
const markSelectBtns = [xMarkSelectBtn, oMarkSelectBtn];
const newGameVsPlayerBtn = document.getElementById("new-game-vs-player-btn");

// MAIN GAME WINDOW
const mainGameWindow = document.querySelector(".main-game");
const currentPlayerTurn = document.getElementById("current-player-img");
const gameBoardBtns = document.querySelectorAll(".board-cell");
const playerMarkImgs = document.querySelectorAll(".current-player-mark");
const gameResultsLeft = document.querySelector(".game-results-left");
const xMarkResultTitle = gameResultsLeft.firstElementChild;
const xMarkScore = gameResultsLeft.lastElementChild;
const gameResultsMiddle = document.querySelector(".game-results-middle");
const tiesScore = gameResultsMiddle.lastElementChild;
const gameResultsRight = document.querySelector(".game-results-right");
const oMarkResultTitle = gameResultsRight.firstElementChild;
const oMarkScore = gameResultsRight.lastElementChild;
const restartBtn = document.getElementById("restart-game-btn");
const restartWindow = document.querySelector(".restart-round-window");
const cancelRestartBtn = document.querySelector(
    ".restart-round-window>div"
).firstElementChild;
const confirmRestartBtn = document.querySelector(
    ".restart-round-window>div"
).lastElementChild;

// ROUND WINNER WINDOW
const overlay = document.querySelector(".overlay");
const roundWinnerWindow = document.querySelector(".round-result-window");
const winnerPlayerText = document.querySelector(".winner-player-text");
const winnerMarkImg = document.querySelector(".winner-mark-img");
const winnerMarkText = document.querySelector(".winner-mark-text");
const nextRoundBtn = document.querySelector(".next-round-btn");
const tiedRoundWindow = document.querySelector(".tied-round-window");
const tiedNextRoundBtn = document.querySelector(".tie-next-round-btn");

// FUNCTIONS ----------------------------------------------------------
function changeSelectedMark(btn) {
    if (btn === markSelectBtns[0]) {
        if (btn.classList.contains("selected-mark")) {
            return;
        } else {
            xMarkSelectBtn.classList.add("selected-mark");
            xMarkSelectImg.src = "assets/images/svg/icon-x-default.svg";
            oMarkSelectImg.src =
                "assets/images/svg/icon-o-default-not-selected.svg";
            oMarkSelectBtn.classList.remove("selected-mark");
        }
    } else {
        if (btn.classList.contains("selected-mark")) {
            return;
        } else {
            oMarkSelectBtn.classList.add("selected-mark");
            oMarkSelectImg.src = "assets/images/svg/icon-o-default.svg";
            xMarkSelectImg.src =
                "assets/images/svg/icon-x-default-not-selected.svg";
            xMarkSelectBtn.classList.remove("selected-mark");
        }
    }
}

function setInitialResultsText() {
    xMarkScore.textContent = "0";
    tiesScore.textContent = "0";
    oMarkScore.textContent = "0";

    if (oMarkSelectBtn.classList.contains("selected-mark")) {
        xMarkResultTitle.textContent = "x (p2)";
        oMarkResultTitle.textContent = "o (p1)";
        gameController.initializeGame(oPlayer.id, xPlayer.id, xPlayer.id);
    } else {
        gameController.initializeGame(xPlayer.id, oPlayer.id, xPlayer.id);
    }
}

function changeToGameBoardWindow() {
    newGameMenu.classList.add("hidden");
    mainGameWindow.classList.remove("hidden");
    setInitialResultsText();
}

function changeCurrentPlayerTurnImage() {
    if (gameController.getCurrentPlayer() === "x") {
        currentPlayerTurn.src =
            "assets/images/svg/icon-x-default-not-selected.svg";
    } else {
        currentPlayerTurn.src =
            "assets/images/svg/icon-o-default-not-selected.svg";
    }
}

function changeHoverMarkImg() {
    if (gameController.getCurrentPlayer() === "x") {
        playerMarkImgs.forEach(function (img) {
            if (!img.parentElement.classList.contains("pressed")) {
                img.src = "assets/images/svg/icon-x-outline.svg";
            } else {
                //Not changing the img source
            }
        });
    } else {
        playerMarkImgs.forEach(function (img) {
            if (!img.parentElement.classList.contains("pressed")) {
                img.src = "assets/images/svg/icon-o-outline.svg";
            } else {
                //Not changing the img source
            }
        });
    }
}

function placeCurrentPlayerMark(btn) {
    if (gameController.getCurrentPlayer() === "x") {
        gameController.pressedBoardButton(btn);
        btn.classList.add("pressed");
        btn.firstElementChild.src = "assets/images/svg/icon-x.svg";
        gameBoard.checkBoardState();
        changeHoverMarkImg();
        btn.setAttribute("disabled", "");
        changeCurrentPlayerTurnImage();
    } else {
        gameController.pressedBoardButton(btn);
        btn.classList.add("pressed");
        btn.firstElementChild.src = "assets/images/svg/icon-o.svg";
        gameBoard.checkBoardState();
        changeHoverMarkImg();
        btn.setAttribute("disabled", "");
        changeCurrentPlayerTurnImage();
    }
}

function disableBoardButtons() {
    gameBoardBtns.forEach(function (btn) {
        btn.setAttribute("disabled", "");
    });
}

function updateRoundWinnerWindow(winnerMark) {
    if (winnerMark === "x") {
        if (gameController.isFirstPlayerXMark()) {
            winnerPlayerText.textContent = "player 1 wins!";
        } else {
            winnerPlayerText.textContent = "player 2 wins!";
        }

        winnerMarkImg.src = "assets/images/svg/icon-x.svg";

        winnerMarkText.classList.remove("yellow-font-color");
        winnerMarkText.classList.add("cyan-font-color");
    } else {
        if (gameController.isFirstPlayerOMark()) {
            winnerPlayerText.textContent = "player 1 wins!";
        } else {
            winnerPlayerText.textContent = "player 2 wins!";
        }

        winnerMarkImg.src = "assets/images/svg/icon-o.svg";

        winnerMarkText.classList.remove("cyan-font-color");
        winnerMarkText.classList.add("yellow-font-color");
    }
}

function showRoundWinnerWindow() {
    updateRoundWinnerWindow(gameController.getCurrentPlayer());
    toggleRoundWinnerWindow();
}

function toggleRoundWinnerWindow() {
    overlay.classList.toggle("hidden");
    roundWinnerWindow.classList.toggle("hidden");
}

function toggleTiedRoundWindow() {
    overlay.classList.toggle("hidden");
    tiedRoundWindow.classList.toggle("hidden");
}

// GO TO THE NEXT ROUND IN A WINNER MODAL WINDOW (WHEN A PLAYER WINS A ROUND)
function resetBoardButtonsWinner() {
    gameBoard.resetMatrix();

    gameBoardBtns.forEach(function (btn) {
        btn.removeAttribute("disabled");
        btn.classList.remove("pressed", "x-winner", "o-winner");
    });

    gameController.setInitialPlayer(xPlayer.id);
    changeHoverMarkImg();

    toggleRoundWinnerWindow();
}

// GO TO THE NEXT ROUND IN A TIE MODAL WINDOW (WHEN THE ROUND ENDS WITH A TIE)
function resetBoardButtonsTie() {
    gameBoard.resetMatrix();

    gameBoardBtns.forEach(function (btn) {
        btn.removeAttribute("disabled");
        btn.classList.remove("pressed", "x-winner", "o-winner");
    });

    gameController.setInitialPlayer(xPlayer.id);
    changeHoverMarkImg();

    toggleTiedRoundWindow();
}

function updateGameScores() {
    xMarkScore.textContent = gameController.getXScore();
    tiesScore.textContent = gameController.getTieScore();
    oMarkScore.textContent = gameController.getOScore();
}

function resetGameScores() {
    gameController.resetGameScores();

    xMarkScore.textContent = gameController.getXScore();
    tiesScore.textContent = gameController.getTieScore();
    oMarkScore.textContent = gameController.getOScore();
}

function toggleRestartWindow() {
    overlay.classList.toggle("hidden");
    restartWindow.classList.toggle("hidden");
}

function restartGame() {
    gameBoard.resetMatrix();
    resetGameScores();

    gameBoardBtns.forEach(function (btn) {
        btn.removeAttribute("disabled");
        btn.classList.remove("pressed", "x-winner", "o-winner");
    });

    gameController.setInitialPlayer(xPlayer.id);
    changeHoverMarkImg();
    toggleRestartWindow();
}

// ADDING EVENT LISTENERS ---------------------------------------------

// CHANGE TO MAIN GAME WINDOW AFTER SELECTING THE P1 MARK
newGameVsPlayerBtn.addEventListener("click", function () {
    changeToGameBoardWindow();
});

// SELECT THE MARK FOR THE P1 MARK
markSelectBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        changeSelectedMark(btn);
    });
});

// A GAME BOARD BUTTON IS PRESSED
gameBoardBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        placeCurrentPlayerMark(btn);
    });
});

// NEXT ROUND BUTTON IN A ROUND WITH A WINNER
nextRoundBtn.addEventListener("click", resetBoardButtonsWinner);

// NEXT ROUND BUTTON IN A TIED ROUND
tiedNextRoundBtn.addEventListener("click", resetBoardButtonsTie);

// RELATED TO THE RESTART BUTTON

// THE RESTART BUTTON IS PRESSED
restartBtn.addEventListener("click", toggleRestartWindow);

// THE RESTART IS CANCELED
cancelRestartBtn.addEventListener("click", toggleRestartWindow);

// THE RESTART IS CONFIRMED
confirmRestartBtn.addEventListener("click", restartGame);
