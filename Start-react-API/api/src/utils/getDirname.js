import { fileURLToPath } from 'url';
import path from 'path';

export default function getDirname(url) {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);

  return __dirname;
}
