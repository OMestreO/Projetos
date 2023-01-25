import path from 'path';
import sqlite3 from 'sqlite3';

import getDirname from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

class Database {
  constructor() {
    this.conn = new sqlite3.Database(path.resolve(__dirname, 'database.db'));
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.conn.run(sql, params, function (err) {
        if (err) {
          console.error(`Error running "${sql}"`);
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.conn.all(sql, params, (err, rows) => {
        if (err) {
          console.error(`Error running "${sql}"`);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default new Database();
