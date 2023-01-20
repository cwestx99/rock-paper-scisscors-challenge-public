import express from 'express';
export const router = express.Router();

router.get('/', (req, res) => {
    const battle = req.app.locals.battle;
    const result = battle.getResult();
    res.render('result', {
        result
    });
});