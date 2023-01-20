class Player {

    constructor(name) {
        this.name = name;
        this.weapon;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }

    getWeapon() {
        return this.weapon;
    }
}

export default Player