演示地址：
https://ehide9.github.io/zh-blog/

---

本来准备通过AI生成前端页面的代码，但尝试了几次生成的结构和样式都不是很满意，同时我期望文章内容以Markdown格式编写，此时VitePress+AI编程进行定制化修改就是一个不错的选择。并且其纯静态输出、无需后端的特性，可以配合GitHub Pages实现低成本快速部署。

AI编程工具：https://docs.trae.cn/ide/get-started-with-trae

前端框架：https://vitepress.dev/zh/guide/getting-started

部署：GitHub Page

<h3 id="Cwchy"><font style="color:rgb(60, 60, 67);">初始化项目</font></h3>
<font style="color:rgb(60, 60, 67);">首先安装并初始化VitePress项目</font>

```python
npm add -D vitepress@next
npx vitepress init
```

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774253208985-c138d258-e505-41b7-a0bc-b83f1a2e5735.png)

目录结构：

```python
├── doc/                 # 文档目录，VitePress 项目的主要内容
│   ├── .vitepress/      # VitePress 配置目录
│   │   ├── cache/       # 构建缓存目录
│   │   └── config.mts   # VitePress 配置文件
│   ├── api-examples.md  # API 示例文档
│   ├── index.md         # 网站首页
│   └── markdown-examples.md  # Markdown 示例文档
├── package-lock.json    # npm 依赖锁定文件
└── package.json         # 项目配置文件
```

<h3 id="TooSZ">需求实现</h3>
<h4 id="ondm2">导航栏</h4>
我们期望的导航栏目录应该包含一下内容：

首页            前端            后端            其他  
                   -Vue           -Java           建站教程  
                   -TypeScript

借助AI修改代码并生成示例md文件，发现路由配置在config.mts中，确认无误后保留修改

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774257857394-0d5474ed-4236-422a-9131-40c780d1368e.png)

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774258267198-83eab905-3a4e-477d-b4cd-24f3e0e0f3c2.png)

<h4 id="c5MVZ">主页</h4>
修改主页内容，可以直接把需要修改的内容圈出，并把图片给ai分析

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774258874261-6b837038-cfe5-4c67-8451-7b589fb48067.png)

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774259511976-1e0d7dff-b965-4d94-9cd1-4317469ce5bf.png)

可以看到是通过index文件修改，调整一下具体内容，同时修改一下首页字体样式，并确认修改

```python
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZH-Blog"
  text: "个人技术博客"
  tagline: 分享技术和个人成长
  image:
    src: /vitepress-logo-large.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 网站说明
      link: /other/introduction
    - theme: alt
      text: 建站教程
      link: /other/tutorial

features:
  - title: 前端技术
    details: 记录Vue、TypeScript等前端技术的学习心得和实践经验
  - title: 后端开发
    details: 分享Java等后端技术的基础知识和进阶技巧
  - title: 技术分享
    details: 交流编程思想、工具使用和项目实战经验
---


```

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774261267093-ab290688-104d-4f6f-a5c7-687d50618b99.png)

注意点：VitePress使用 theme 目录来管理样式，所以给AI提示词最好要加上说明，否则代码容易生成错位置

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774261346334-6f19f08a-4ffd-4a2f-a374-7492393cf76f.png)

<h4 id="u7kX2">搜索栏</h4>
提示词：[https://vitepress.dev/zh/reference/default-theme-search](https://vitepress.dev/zh/reference/default-theme-search) 参考官方文档为网站添加搜索功能

生成代码如下

```python
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
```

验证：

![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774262439001-18cb1c2f-d980-417d-baef-2e74d91fdee9.png)

<h4 id="SXTdG">侧边栏更新</h4>
```python
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
```

<h4 id="pY8hy">修改gitHub链接</h4>
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774318876311-361df8ff-6064-4924-ac3d-85b1a042369c.png)

<h3 id="yVxGw">部署到github page</h3>



