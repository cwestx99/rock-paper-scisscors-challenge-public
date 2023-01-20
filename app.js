import express from 'express';
import dotenv from 'dotenv';

import { router as indexRouter } from './routes/index.js'
import { router as gameRouter } from './routes/game.js'
import { router as resultRouter } from './routes/result.js'
import { router as turnRouter } from './routes/turn.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', resultRouter);
app.use('/turn', turnRouter);


const server = app.listen(port, host, () => {
    const serverHost = server.address().address;
    const serverPort = server.address().port;
    console.log(`Server is listening on http://${serverHost}:${serverPort}`);
});

export default server