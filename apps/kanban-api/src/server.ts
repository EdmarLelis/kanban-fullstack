import 'dotenv/config';
import express, { type Express } from 'express';
import router from './routes/index.js';

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`kanban-api is UP at ${port}!`));
