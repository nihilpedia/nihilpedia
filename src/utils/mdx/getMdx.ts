import { serialize } from 'next-mdx-remote/serialize';
import remarkUnwrapImages from 'remark-unwrap-images';
import { getAllMdxCategories } from '@/utils/mdx';
import { IPage } from '@/types';

export const getMdx = async (name: string): Promise<IPage> => {
  let { docs, } = getAllMdxCategories();
  docs = docs.filter((doc) => {
    return doc.slug === name.replace(/ /g, '_');
  });

  const {
    frontMatter, content,
  } = docs[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // @ts-ignore
        remarkUnwrapImages,
      ],
      rehypePlugins: [],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
  };
};
