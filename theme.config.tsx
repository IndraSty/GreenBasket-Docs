import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const year = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <strong>GreenBasket</strong>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: `GreenBasket ${year} © IndraSty`,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – GreenBasket',
        description: 'GreenBasket | %s',
      };
    }
    return {
      titleTemplate: 'GreenBasket - E-Commerce',
      description:
        "Backend Service E-Commerce",
    };
  },
};

export default config;
