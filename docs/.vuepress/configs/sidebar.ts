import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/': [
      {
        text: '快速部署指南',
        children: [
          '/guide/README.md',
          '/guide/setup.md'
        ],
      },
      {
        text: '插件开发参考',
        children: [
          '/manual/plugin.md',
          '/manual/core.md',
          '/manual/easyMirai.md',
          '/manual/pluginsHelp.md',
          '/manual/curl.md'
        ],
      },
      {
        text: '进阶调试与排查',
        children: [
          
        ],
      },
    ],
  }
  