import { IH2 } from '@/types';

const generateLink = (a: HTMLSpanElement, indexString: string) => {
  a.innerText = indexString;

  return a;
};

export const generateToc = (contents: HTMLDivElement, h2Data: IH2[]) => {
  let h2 = 0;
  let h3 = 0;
  let h4 = 0;
  let h5 = 0;
  let h6 = 0;

  const contentsArray = Array.from(contents.children);
  const headingContents = contentsArray.filter((node) => node.className.includes('wiki-heading'));

  for (let i = 0; i < headingContents.length; i++) {
    headingContents[i].id = `toc${i}`;
  }

  headingContents.map((item) => {
    const { id, children, } = item as HTMLDivElement;
    const aData = children[0] as HTMLAnchorElement;
    const spanData = children[1] as HTMLSpanElement;

    const text = spanData.innerText;
    let link: string;

    if (spanData.children.length !== 0) {
      link = decodeURI(text.replace(/[ ]/g, '_'));
    } else {
      link = '';
    }

    if (item.nodeName === 'H2') {
      h2++;
      generateLink(aData, `${h2}.`);

      h3 = 0;
      h4 = 0;
      h5 = 0;
      h6 = 0;

      h2Data.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H3' && h2Data.length > 0) {
      h3++;
      generateLink(aData, `${h2}.${h3}.`);

      h4 = 0;
      h5 = 0;
      h6 = 0;

      const h3Data = h2Data[h2Data.length - 1].items;

      h3Data.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H4' && h2Data.length > 0) {
      h4++;
      generateLink(aData, `${h2}.${h3}.${h4}.`);

      h5 = 0;
      h6 = 0;

      const h3Data = h2Data[h2Data.length - 1].items;
      const h4Data = h3Data[h3Data.length - 1].items;

      h4Data.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H5' && h2Data.length > 0) {
      h5++;
      generateLink(aData, `${h2}.${h3}.${h4}.${h5}.`);

      h6 = 0;

      const h3Data = h2Data[h2Data.length - 1].items;
      const h4Data = h3Data[h3Data.length - 1].items;
      const h5Data = h4Data[h4Data.length - 1].items;

      h5Data.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H6' && h2Data.length > 0) {
      h6++;
      generateLink(aData, `${h2}.${h3}.${h4}.${h5}.${h6}.`);

      const h3Data = h2Data[h2Data.length - 1].items;
      const h4Data = h3Data[h3Data.length - 1].items;
      const h5Data = h4Data[h4Data.length - 1].items;
      const h6Data = h5Data[h5Data.length - 1].items;

      h6Data.push({
        id,
        text,
        name: item.nodeName,
        link,
      });
    }
  });

  return h2Data;
};
