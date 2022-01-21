import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllMdxCategories } from '@/utils/mdx';
import { IPage } from '@/types';

export const getMdx = async (name: string): Promise<IPage> => {
  const docs = getAllMdxCategories().filter((doc) => {
    return doc.slug === name.replace(' ', '_');
  });

  const {
    frontMatter, content,
  } = docs[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
      ],
      rehypePlugins: [],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
  };
};
