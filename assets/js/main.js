"use strict";

// MODULES ---------------------------------------------------------------
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
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[1][0] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[1][2] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[2][0] === "x" &&
            gameBoardMatrix[2][1] === "x" &&
            gameBoardMatrix[2][2] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][0] === "x" &&
            gameBoardMatrix[1][0] === "x" &&
            gameBoardMatrix[2][0] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][1] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[2][1] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][2] === "x" &&
            gameBoardMatrix[1][2] === "x" &&
            gameBoardMatrix[2][2] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][0] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[2][2] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][2] === "x" &&
            gameBoardMatrix[1][1] === "x" &&
            gameBoardMatrix[2][0] === "x"
        ) {
            console.log("X player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][0] === "y" &&
            gameBoardMatrix[0][1] === "y" &&
            gameBoardMatrix[0][2] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[1][0] === "y" &&
            gameBoardMatrix[1][1] === "y" &&
            gameBoardMatrix[1][2] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[2][0] === "y" &&
            gameBoardMatrix[2][1] === "y" &&
            gameBoardMatrix[2][2] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][0] === "y" &&
            gameBoardMatrix[1][0] === "y" &&
            gameBoardMatrix[2][0] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][1] === "y" &&
            gameBoardMatrix[1][1] === "y" &&
            gameBoardMatrix[2][1] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][2] === "y" &&
            gameBoardMatrix[1][2] === "y" &&
            gameBoardMatrix[2][2] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][0] === "y" &&
            gameBoardMatrix[1][1] === "y" &&
            gameBoardMatrix[2][2] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else if (
            gameBoardMatrix[0][2] === "y" &&
            gameBoardMatrix[1][1] === "y" &&
            gameBoardMatrix[2][0] === "y"
        ) {
            console.log("Y player wins.");
            gameController.endGame();
        } else {
            console.log("Not yet a winner");
        }
    };

    const fillMatrixCell = function (row, column, playerID) {
        gameBoardMatrix[row][column] = playerID;
        console.log(gameBoardMatrix);
    };

    return { fillMatrixCell, checkBoardState };
})();

const gameController = (function () {
    let gameState = true;
    let currentPlayer = true;
    // Always start with player 1
    const gameLoop = function (player1ID, player2ID) {
        do {
            const positionTofill = currentPlayer
                ? prompt(
                      `Player X, which position you want to fill? ("row,column". Rows and columns go from 0 to 2)`
                  )
                : prompt(
                      `Player Y, which position you want to fill? ("row,column". Rows and columns go from 0 to 2)`
                  );

            const getPositionNumbersRegExp = new RegExp(/\d/, "g");
            const positionsArray = positionTofill.match(
                getPositionNumbersRegExp
            );

            positionsArray[0] = +positionsArray[0];
            positionsArray[1] = +positionsArray[1];

            if (currentPlayer) {
                gameBoard.fillMatrixCell(
                    positionsArray[0],
                    positionsArray[1],
                    player1ID
                );
                currentPlayer = false;
            } else {
                gameBoard.fillMatrixCell(
                    positionsArray[0],
                    positionsArray[1],
                    player2ID
                );
                currentPlayer = true;
            }

            gameBoard.checkBoardState();
        } while (gameState);
    };

    const endGame = function () {
        gameState = false;
    };
    return { gameLoop, endGame };
})();

// FACTORY FUNCTIONS -----------------------------------------------------

const playerFactory = function (id) {
    return { id };
};

const xPlayer = playerFactory("x");
const yPlayer = playerFactory("y");

// Initializing Game -----------------------------------------------------
// gameController.gameLoop(xPlayer.id, yPlayer.id);