import { siteData } from '@/data/config.data';
import { IH2 } from '@/types';

export const generateToc = (contents: HTMLDivElement, tocData: IH2[]) => {
  const contentsArray = Array.from(contents.children);
  const headingContents = contentsArray.filter((node) => node.className.includes('wiki-heading'));

  for (let i = 0; i < headingContents.length; i++) {
    headingContents[i].id = `toc${i}`;
  }

  headingContents.map((item) => {
    const { innerText: text, id, children, } = item as HTMLDivElement;
    const spanData = children[0];
    let link: string;

    if (spanData.children.length !== 0) {
      const linkData = spanData.children[0] as HTMLAnchorElement;
      console.log(spanData.children);
      console.log(linkData.href.includes(`${siteData.siteUrl}/`));
      let linkString = linkData.href.replace(`${siteData.siteUrl}/`, '');
      linkString += linkData.pathname;
      link = decodeURI(linkString);
    } else {
      link = '';
    }

    console.log('link >> ', link);

    if (item.nodeName === 'H2') {
      tocData.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H3' && tocData.length > 0) {
      tocData[tocData.length - 1].items.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H4' && tocData.length > 0) {
      const subData = tocData[tocData.length - 1].items;

      subData[subData.length - 1].items.push({
        id,
        text,
        name: item.nodeName,
        link,
        items: [],
      });
    } else if (item.nodeName === 'H5' && tocData.length > 0) {
      const subData = tocData[tocData.length - 1].items;
      const subsubData = subData[subData.length - 1].items;

      subsubData[subsubData.length - 1].items.push({
        id,
        text,
        name: item.nodeName,
        link,
      });
    }
  });

  return tocData;
};
