import express from 'express';
import Computer from '../src/computer.js';
export const router = express.Router();

router.get('/', (req, res) => {
    const playerOne = req.app.locals.battle.playerOne();
    res.render('turn', {
        playerOne,
    });
});

router.post('/', (req, res) => {
    const battle = req.app.locals.battle;
    const weapon = req.body.weapon;
    const playerOne = req.app.locals.battle.playerOne();
    const playerTwo = req.app.locals.battle.playerTwo();
    playerOne.setWeapon(weapon);

    if (playerTwo instanceof Computer) {
        playerTwo.setWeapon()
    } else {
        battle.switch();
    };

    if (!battle.players[0].getWeapon() || !battle.players[1].getWeapon()) {
        res.redirect('/turn')
    } else {
        res.redirect('/result')
    };
});

