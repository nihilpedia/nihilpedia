import fs from 'fs';
import { getMdxPageFile, pagesPath } from '@/utils/mdx/getMdxPageFile';

export const getMdxAllPage = () => {
  return fs.readdirSync(pagesPath)
    .filter((path) => /\.mdx$/.test(path))
    .map((fileName) => {
      const source = getMdxPageFile(fileName);
      console.log(source);
    });
};
