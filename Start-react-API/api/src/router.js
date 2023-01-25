import { Router } from 'express';

import Database from './database/Database.js';
import wait from './utils/wait.js';

const router = Router();

router.get('/posts', async (request, response) => {
  await wait();

  const posts = await Database.all('SELECT * FROM posts');
  response.json(posts);
});

router.get('/posts/most-viewed', async (request, response) => {
  await wait();

  const posts = await Database.all('SELECT * FROM posts LIMIT 3');
  response.json(posts);
});

router.post('/posts', async (request, response) => {
  await wait();

  const { content, userName } = request.body;

  if (!content || !userName) {
    return response
      .status(400)
      .json({
        code: '001',
        error: 'The properties `content` and `userName` are required!',
      });
  }

  await Database.run(
    'INSERT INTO posts(content, userName, publishedAt) VALUES(?, ?, ?)',
    [content, userName, new Date().toISOString()],
  );

  response.sendStatus(201);
});

export default router;
