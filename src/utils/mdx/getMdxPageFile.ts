import path from 'path';
import fs from 'fs';

export const pagesPath = path.join(process.cwd(), 'pages');

export const getMdxPageFile = (name: string) => {
  return fs.readFileSync(path.join(pagesPath, name));
};
