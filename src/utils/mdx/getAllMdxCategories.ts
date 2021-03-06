import { IAllPage } from '@/types';
import { getAllMdx } from '@/utils/mdx';

const categories = [
  '국가', '단체', '아이템', '인물', '종족',
  '주요 개념', '지역', '역사', '이야기', '작품',
  '세계', '우주적 존재', '유니버스', '신마수룡', '환경요소',
  '혼돈의 무리', '',
];

export const getAllMdxCategories = () => {
  let docs: IAllPage[] = [];

  for (const category in categories) {
    if (Object.prototype.hasOwnProperty.call(categories, category)) {
      docs = docs.concat(getAllMdx(categories[category]));
    }
  }

  docs = docs.sort((a, b) => {
    const beforeDate = a.frontMatter.updatedAt as number;
    const afterDate = b.frontMatter.updatedAt as number;

    return afterDate - beforeDate;
  });

  return {
    docs,
    slugs: docs.map((doc) => doc.slug),
  };
};
