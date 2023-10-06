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
        } else {
            console.log("Not yet a winner");
        }
    };

    const fillMatrixCell = function (row, column, playerID) {
        gameBoardMatrix[row][column] = playerID;
        console.log(gameBoardMatrix);
    };

    return { checkBoardState, fillMatrixCell };
})();

const gameController = (function () {
    let gameState = true;
    let currentPlayer = "";
    let player_1, player_2;

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

    const switchCurrentPlayer = function () {
        if (getCurrentPlayer() === "x") {
            currentPlayer = "o";
        } else {
            currentPlayer = "x";
        }
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

    const endGame = function () {
        gameState = false;
    };

    return {
        initializeGame,
        getCurrentPlayer,
        switchCurrentPlayer,
        pressedBoardButton,
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
        gameController.switchCurrentPlayer();
        changeHoverMarkImg();
        btn.disabled = "disabled";
        changeCurrentPlayerTurnImage();
        gameBoard.checkBoardState();
    } else {
        gameController.pressedBoardButton(btn);
        btn.classList.add("pressed");
        btn.firstElementChild.src = "assets/images/svg/icon-o.svg";
        gameController.switchCurrentPlayer();
        changeHoverMarkImg();
        btn.disabled = "disabled";
        changeCurrentPlayerTurnImage();
        gameBoard.checkBoardState();
    }
}

// ADDING EVENT LISTENERS ---------------------------------------------

newGameVsPlayerBtn.addEventListener("click", function () {
    changeToGameBoardWindow();
});

markSelectBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        changeSelectedMark(btn);
    });
});

gameBoardBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        placeCurrentPlayerMark(btn);
    });
});
