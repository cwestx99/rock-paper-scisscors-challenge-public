import { expect } from "chai";
import Computer from "../src/computer.js"

describe('computer tests', () => {

    it('should set a random weapon from the weaponList', () => {
        const computer = new Computer();
        computer.setWeapon();
        expect(computer.getWeapon()).to.be.oneOf(["rock", "paper", "scissors", "lizard", "spock"]);
    })
})