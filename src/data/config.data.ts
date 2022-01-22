import { IConfig } from '@/types';

export const siteData: IConfig = {
  siteTitle: '니힐라 위키',
  siteDescription: '소설 집필을 위한 창작 세계관 니힐라 엔시유니아의 설정 문서 사이트',
  siteKeywords: '창작, 소설, 세계관, 설정집, 설정',
  siteType: 'website',
  siteUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilpedia.github.io',
  siteImage: '/images/site-image.png',
  siteVersion: 'v1.0.0',
};
