class Computer {

    weaponList = ["rock", "paper", "scissors", "lizard", "spock"]
    constructor() {
        this.name = "Computer";
        this.weapon = "";
    }

    setWeapon() {
        const random = Math.floor(Math.random() * this.weaponList.length);
        this.weapon = this.weaponList[random];
    }

    getWeapon() {
        return this.weapon;
    }
}

export default Computer;