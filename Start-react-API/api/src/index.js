import 'express-async-errors';

import express from 'express';
import morgan from 'morgan';

import './database/prepare.js';
import router from './router.js';
import apiDocs from './docs/index.js';
import cors from './middlewares/cors.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors);
app.use(morgan('tiny'))
app.use(express.json());
app.use(apiDocs)
app.use(router);
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
