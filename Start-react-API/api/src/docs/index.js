import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

import getDirname from '../utils/getDirname.js';

const router = Router();

const __dirname = getDirname(import.meta.url);
const swaggerDocument = YAML.load(path.resolve(__dirname, 'swagger.yaml'));

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default router;
