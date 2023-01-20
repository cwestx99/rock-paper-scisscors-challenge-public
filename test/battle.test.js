import { expect } from "chai";
import Battle from "../src/battle.js"

describe('Battle tests', () => {

    describe('Battle takes on the correct players', () => {
        it('should have 2 players', () => {
            const players = ["testPlayer1", "testPlayer2"]
            const battle = new Battle(players);
            expect(battle.players.length).equal(2);
        });

        // it('should have 2 players, when only one name is added', () => {
        //     const players = ["testPlayer1"]
        //     const battle = new Battle(players);
        //     expect(battle.players.length).equal(2);
        // });

        it('should contain a Player with name "testPlayer1"', () => {
            const mockPlayer = {
                name: "testPlayer1",
                weapon: ""
            }
            const battle = new Battle(mockPlayer);
            expect(battle.players).to.deep.include(mockPlayer);
        });

        // it('should contain a Computer player, when only one name is added', () => {
        //     const mockPlayer = {
        //         name: "testPlayer1",
        //         weapon: ""
        //     }
        //     const mockComputer = {
        //         name: "Computer",
        //         weapon: ""
        //     }

        //     const battle = new Battle(mockPlayer);
        //     console.log(battle)
        //     expect(battle.players).to.include(mockComputer);
        // });
    });

    describe('Game logic tests', () => {

        describe('Rock tests', () => {

            const playerOne = {
                name: "playerOne",
                weapon: "rock",
                getWeapon: function () { return this.weapon }
            };

            it('should draw if 2 rocks are played', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "rock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("DRAW!")
            });

            it('should win if played against scissors', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "scissors",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should win if played against lizard', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "lizard",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should lose if played against paper', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "paper",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });

            it('should lose if played against spock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "spock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });

        });

        describe('Paper tests', () => {

            const playerOne = {
                name: "playerOne",
                weapon: "paper",
                getWeapon: function () { return this.weapon }
            };

            it('should draw if 2 papers are played', () => {
                const playerTwo = {
                    name: "playerTwo",
                    name: "playerTwo",
                    weapon: "paper",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("DRAW!")
            });

            it('should win if played against rock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "rock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should win if played against spock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "spock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should lose if played against scissors', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "scissors",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });

            it('should lose if played against lizard', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "lizard",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });
        });

        describe('Scissors tests', () => {

            const playerOne = {
                name: "playerOne",
                weapon: "scissors",
                getWeapon: function () { return this.weapon }
            };

            it('should draw if 2 scissors are played', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "scissors",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("DRAW!")
            });

            it('should win if played against paper', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "paper",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should win if played against lizard', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "lizard",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should lose if played against rock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "rock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });

            it('should lose if played against spock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "spock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });
        });

        describe('Lizard tests', () => {

            const playerOne = {
                name: "playerOne",
                weapon: "lizard",
                getWeapon: function () { return this.weapon }
            };

            it('should draw if 2 lizard are played', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "lizard",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("DRAW!")
            });

            it('should win if played against paper', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "paper",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should win if played against spock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "spock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should lose if played against rock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "rock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });

            it('should lose if played against scissors', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "scissors",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });
        });

        describe('Spock tests', () => {

            const playerOne = {
                name: "playerOne",
                weapon: "spock",
                getWeapon: function () { return this.weapon }
            };

            it('should draw if 2 spock are played', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "spock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("DRAW!")
            });

            it('should win if played against rock', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "rock",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should win if played against scissors', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "scissors",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerOne!")
            });

            it('should lose if played against paper', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "paper",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });

            it('should lose if played against lizard', () => {
                const playerTwo = {
                    name: "playerTwo",
                    weapon: "lizard",
                    getWeapon: function () { return this.weapon }
                };
                const players = [playerOne, playerTwo]
                const battle = new Battle(players)
                expect(battle.getResult()).to.include("THE WINNER IS playerTwo!")
            });
        });
    });
});