import express from 'express';
import Battle from '../src/battle.js';
import Computer from '../src/computer.js';
import Player from '../src/player.js';
export const router = express.Router();


router.post('/', (req, res) => {
    const players = req.body.player2 ? [new Player(req.body.player1), new Player(req.body.player2)] : [new Player(req.body.player1), new Computer()];
    const battle = new Battle(players);
    req.app.locals.battle = battle;
    res.redirect('/game');
})

router.get('/', (req, res) => {
    const playerOne = req.app.locals.battle.playerOne();
    const playerTwo = req.app.locals.battle.playerTwo();
    res.render('game', {
        playerOne,
        playerTwo
    });
})

