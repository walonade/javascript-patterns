class Game {
    constructor(numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
    }
    
    start() {}

    haveWinner() {}

    takeTurn() {}

    end() {}

    run() {
        this.start();

        while(!this.haveWinner()) {
            this.takeTurn();
        }

        this.end();
    }
}

class TicTacToe extends Game {
    start() {

    }

    haveWinner() {

    }

    takeTurn() {
        
    }

    end() {

    }
}

const ticTacToe = new TicTacToe(2);

ticTacToe.run();