import express from 'express';
import 'dotenv/config';
import { connectToDb } from './db.js';
import userRouter from './routes/user.routes.js';
import publicationRouter from './routes/publication.routes.js';

const app = express();

const PORT = 8080;

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/publications', publicationRouter);

app.listen(PORT, async () => {
    await connectToDb();
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
