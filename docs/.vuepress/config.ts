import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

import {
  head,
  sidebarZh
} from './configs/index.js'

export default defineUserConfig({
  // extra tags in `<head>`
  head,

  base: '/',
  lang: 'zh-CN',
  title: 'MiraiEz',
  description: '方便、快速、高效地使用 PHP 编写你自己的 Bot',
  /*markdown: {
    toc: {
      level: [2, 3]
    }
  },*/

  // configure default theme
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'nkxingxh/MiraiEz-docs',
    docsDir: 'docs',

    //navbar: false,
    sidebar: sidebarZh,

    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    notFound: ['页面未找到'],
    backToHome: '回到首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',

    tip: '提示',
    warning: '注意',
    danger: '警告',
  }),
})