class Battle {
    constructor(newPlayers) {

        this.players = newPlayers;
        this.result = "";
    }

    playerOne() {
        return this.players[0];
    }

    playerTwo() {
        return this.players[1];
    }

    switch() {
        this.players.reverse();
    }


    getResult() {
        switch (this.players[0].getWeapon() + this.players[1].getWeapon()) {
            case "rockscissors":
            case "rocklizard":
            case "paperrock":
            case "paperspock":
            case "scissorspaper":
            case "scissorslizard":
            case "lizardpaper":
            case "lizardspock":
            case "spockrock":
            case "spockscissors":
                this.result = `THE WINNER IS ${this.players[0].name}! ${this.players[0].name} chose ${this.players[0].getWeapon()} & ${this.players[1].name} chose ${this.players[1].getWeapon()}`;
                break;
            case "rockpaper":
            case "rockspock":
            case "paperscissors":
            case "paperlizard":
            case "scissorsrock":
            case "scissorsspock":
            case "lizardscissors":
            case "lizardrock":
            case "spockpaper":
            case "spocklizard":


                this.result = `THE WINNER IS ${this.players[1].name}! ${this.players[0].name} chose ${this.players[0].getWeapon()} & ${this.players[1].name} chose ${this.players[1].getWeapon()}`;
                break;
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
            case "spockspock":
            case "lizardlizard":
                this.result = `DRAW! ${this.players[0].name} chose ${this.players[0].getWeapon()} & ${this.players[1].name} chose ${this.players[1].getWeapon()}`;
                break;
        }
        return this.result;
    };


}

export default Battle;