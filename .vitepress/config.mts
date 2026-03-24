import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/zh-blog/',
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "ZH-Blog",
  description: "个人博客网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.svg",
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: 'TypeScript',
            link: '/frontend/typescript'
          },
          {
            text: 'Vue3',
            link: '/frontend/Vue3'
          }
        ]
      },
      {
        text: '后端',
        items: [
          {
            text: 'Java',
            link: '/backend/java'
          }
        ]
      },
      {
        text: 'AI',
        items: [
          {
            text: 'AI概念',
            link: '/ai/AI核心概念.md'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: 'introduction',
            link: '/other/introduction'
          },
          {
            text: '建站教程',
            link: '/other/tutorial'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          {
            text: 'TypeScript',
            link: '/frontend/typescript'
          },
          {
            text: 'Vue3',
            link: '/frontend/Vue3'
          }
        ]
      },
      {
        text: '后端',
        items: [
          {
            text: 'Java',
            link: '/backend/java'
          }
        ]
      },
      {
        text: 'AI',
        items: [
          {
            text: 'AI概念',
            link: '/ai/AI核心概念'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: 'introduction',
            link: '/other/introduction'
          },
          {
            text: '建站教程',
            link: '/other/tutorial'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ehide9/zh-blog' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
