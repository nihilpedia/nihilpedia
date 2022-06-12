import { ReactNode } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ISiteMeta {
  title: string;
  url: string;
  description?: string;
  keywords?: string;
  type?: string;
}

export interface ISiteMetaProps {
  children?: ReactNode;
  meta: ISiteMeta;
  docSlugs?: string[];
}

export interface IChildren {
  children: ReactNode;
}

export interface IFrontMatter {
  title: string;
  categories: string;
  tags: string[];
  createdAt: (Date | number);
  updatedAt: (Date | number)
}

export interface IAllPage {
  frontMatter: IFrontMatter;
  content: string;
  slug: string;
}

export interface IPage {
  frontMatter: IFrontMatter;
  source: MDXRemoteSerializeResult;
}

export interface IRecentPage {
  docs: IAllPage[];
  docSlugs: string[];
}

export interface IH6 {
  id: string;
  text: string;
  name: 'H6';
  link: string;
}

export interface IH5 {
  id: string;
  text: string;
  name: 'H5';
  link: string;
  items?: IH6[];
}

export interface IH4 {
  id: string;
  text: string;
  name: 'H4';
  link: string;
  items?: IH5[];
}

export interface IH3 {
  id: string;
  text: string;
  name: 'H3';
  link: string;
  items?: IH4[];
}

export interface IH2 {
  id: string;
  text: string;
  name: 'H2';
  link: string;
  items?: IH3[];
}
