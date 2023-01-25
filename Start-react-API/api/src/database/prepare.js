import Database from './Database.js';

await Database.run(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    userName TEXT NOT NULL,
    publishedAt TEXT NOT NULL
  )
`);
