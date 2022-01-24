import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { IAllPage, IFrontMatter } from '@/types';

export const getAllMdx = (category: string): IAllPage[] => {
  const folderPath = join(process.cwd(), 'docs', category);
  const docPaths = readdirSync(folderPath).filter((doc) => /\.mdx$/.test(doc));

  return docPaths.map((file) => {
    const source = readFileSync(join(folderPath, file), 'utf8');
    const slug = file
      .replace(/\.mdx$/, '')
      .replace(/[ ]/g, '_');
    const { data, content, } = matter(source);

    const frontMatter: IFrontMatter = {
      ...data,
      title: data.title,
      categories: data.categories,
      tags: data.tags,
      createdAt: (data.createdAt as Date).getTime() - 32400000,
      updatedAt: (data.updatedAt as Date).getTime() - 32400000,
    };

    return {
      frontMatter,
      content,
      slug,
    };
  });
};
