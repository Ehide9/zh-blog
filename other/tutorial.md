## <font style="color:rgb(25, 27, 31);">前言&技术选型</font>
本来准备通过AI生成前端页面的代码，但尝试了几次生成的结构和样式都不是很满意，同时我期望文章内容以Markdown格式编写，此时VitePress+AI编程进行定制化修改就是一个不错的选择。并且其纯静态输出、无需后端的特性，可以配合GitHub Pages实现低成本快速部署。

AI编程工具：[https://docs.trae.cn/ide/get-started-with-trae](https://docs.trae.cn/ide/get-started-with-trae)

<font style="color:rgb(60, 60, 67);">前端框架：</font>[https://vitepress.dev/zh/guide/getting-started](https://vitepress.dev/zh/guide/getting-started)

部署：GitHub Pages

### <font style="color:rgb(60, 60, 67);">初始化项目</font>
<font style="color:rgb(60, 60, 67);">首先安装并初始化VitePress项目</font>

```python
npm add -D vitepress@next
npx vitepress init
```

<!-- 这是一张图片，ocr 内容为：VITEPRESS! TO WELCOME LD VITEPRESS INITIALIZE THE CONFIG? WHERE SHOULD VI /DOC SHOULD VITEPRESS LOOK OK FOR YOUR MARKDOWN FILES? WHERE /DOC SITE TITLE: ZH-BLOG SITE DESCRIPTION: 4 VITEPRESS SITE THEME: DEFAULT THEME FILES? USE TYPESCRIPT FOR CONFIG AND THEME YES VITEPRESS NPM SCRIPTS TO PACKAGE.JSON? ADD YES ADD A DD A PREFIX FOR VITEPRESS NPM SCRIPTS? YES PREFIX FOR VITEPRESS NPM SCRIPTS: DOCS NOW RUN NPM RUN DOCS:DEV AND START WRITING. DONE! -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774253208985-c138d258-e505-41b7-a0bc-b83f1a2e5735.png)

目录结构：

```python
├── docs/                 # 文档目录，VitePress 项目的主要内容
│   ├── .vitepress/      # VitePress 配置目录
│   │   ├── cache/       # 构建缓存目录
│   │   └── config.mts   # VitePress 配置文件
│   ├── api-examples.md  # API 示例文档
│   ├── index.md         # 网站首页
│   └── markdown-examples.md  # Markdown 示例文档
├── package-lock.json    # npm 依赖锁定文件
└── package.json         # 项目配置文件
```

### 需求实现
#### 导航栏
我们期望的导航栏目录应该包含一下内容：

首页            前端            后端            其他  
                   -Vue           -Java           建站教程  
                   -TypeScript

借助AI修改代码并生成示例md文件，发现路由配置在config.mts中，确认无误后保留修改

<!-- 这是一张图片，ocr 内容为：DOC .VITEPRESS TS CONFIQ.MTS 撤销 CTRL+BACKSPACE 变更已完成,请确认是否采纳. 保留 1/4 CTRL+ENTER IMPORT { DEFINECONFIG } FROM 'VITEPRESS' 2 // HTTPS://VITEPRESS.DEV/REFERENCE/SITE-CONFIG 3  EXPORT DEFAULT DEFINECONFIG({ 4  TITLE: "ZH-BLOG", 5 DESCRIPTION: "A VITEPRESS SITE", "个人博客网站" 6+ DESCRIPTION: 7 THEMECONFIG: 8 HTTPS://VITEPRESS.DEV/REFERENCE/DEFAULT-THEME-CONFIG 9 NAV: { TEXT: 'HOME', LINK: '/' }, { TEXT: 'EXAMPLES', LINK: '/MARKDOWN-EXAMPLES' } '首页',LINK:'/ }, 10+ TEXT: 11+ TEXT: 12+ 前端 13+ ITEMS:  TEXT: 'VUE', LINK: '/FRONTEND/VUE' 14+ TEXT:'TYPESCRIPT',LINK:'/FRONTEND/TYPESCRIPT' 15+ 16+ 17+ 18+ TEXT:'后端 19+ ITEMS: 20+ , TEXT: 'JAVA', LINK: '/BACKEND/JAVA' } 21+ 22+ 23+ 24+ 25+ 其他! TEXT: 26+ ITEMS: ', LINK: '/OTHER/TUTORIAL' } 建站教程 27+ TEXT: 1 28+ 29+ 30+ 31 32 SIDEBAR: 33  TEXT: 'EXAMPLES', 34+ 前端 TEXT: ITEMS: 35 -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774257857394-0d5474ed-4236-422a-9131-40c780d1368e.png)

<!-- 这是一张图片，ocr 内容为：首页前端?后端`其他 ZH-BLOG ZH-BLOG A VITEPRESS SITE MY GREAT PROJECT TAGLINE MARKDOWN EXAMPLES APLEXAMPLES FEATURE B FEATURE C FEATURE A LOREM IPSUM DOLOR SIT AMET,CONSECTETUR LOREM IPSUM DOLOR SIT AMET,CONSECTETUR LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT ADIPISCING ELIT ADIPISCING ELIT -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774258267198-83eab905-3a4e-477d-b4cd-24f3e0e0f3c2.png)

#### 主页
修改主页内容，可以直接把需要修改的内容圈出，并把图片给ai分析

<!-- 这是一张图片，ocr 内容为：ZH-BIOG 京 其他 首页 后端 前端 ZH-BLOG A VITEPRESS SITE MY GREAT PROJECT TAGLINE API EXAMPLES MARKDOWN EXAMPLES FEATURE C FEATURE B FEATURE A LOREM IPSUM DOLOR SIT AMET, CONSECTETUR LOREM IPSUM DOLOR SIT AMET,CONSECTETUR LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT ADIPISCING ELIT ADIPISCING ELIT -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774258874261-6b837038-cfe5-4c67-8451-7b589fb48067.png)

<!-- 这是一张图片，ocr 内容为：1个文件变更 +12 -12 +12 -12 INDEX.MD DOC/INDEX.MD 3个隐藏的行 个隐藏的行 4 5 HERO: HERO: NAME:"ZH-BLOG" NAME:"ZH-BLOG" 7 TEXT: "A VITEPRESS SITE" TEXT:"个人技术博客" TAGLINE:分享前端,后端技术和个人成长 TAGLINE: MY GREAT PROJECT TAGLINE 8 9 ACTIONS ACTIONS 10 10 THEME:BRAND THEME: BRAND 11 TEXT:开始阅读 11  TEXT: MARKDOWN EXAMPLES LINK: /MARKDOWN-EXAMPLES LINK: /FRONTEND/VUE 12 12 13 13 THEME:ALT THEME:ALT 14 14 TEXT:建站教程 TEXT:API EXAMPLES 15 LINK://OTHER/TUTORIAL LINK: /API-EXAMPLES 16 17 FEATURES: FEATURES 18 18 TITLE:前端技术 TITLE:FEATURE A DETAILS: LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT 19 19 DETAILS:记录VUE,TYPESCRIPT等前端技术的学习心得和实战经验 BA2333 20 后端开发 TITLE:后 TITLE:FEATURE B 21 DETAILS:分享JAVA等后端技术的基础知识和进阶技巧 DETAILS: LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT 22 TITLE:技术分享 TITLE:FEATURE C 23 DETAILS:交流编科思想,工具使川和项目实战经验 LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT DETAILS: 24 -->
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

<!-- 这是一张图片，ocr 内容为：INDEX.TS DOC\.VITEPRESS\THEME/INDEX.TS IMPORT DEFAULTTHEME FROM 'VITEPRESS/THEME' 1234 /STYLE.CSS IMPORT  DEFAULT DEFAULTTHEME EXPORT 也 STYLE.CSS DOC\VITEPRESS\ THEME/STYLE.CSS 123 COOT --VPHOME-HERO-NAME-COLOR:TRANSPARENT; --VP-HOME-HERO-NAME-BACKGROUND: -WEBKIT-LINEAR-GRADIENT(120DEG, #BD34FE,# 4} 5 -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774261267093-ab290688-104d-4f6f-a5c7-687d50618b99.png)

注意点：VitePress使用 theme 目录来管理样式，所以给AI提示词最好要加上说明，否则代码容易生成错位置

<!-- 这是一张图片，ocr 内容为：验证结果 开发服务器已成功启动,运行在 HTTP://LOCALHOST:5173/.现在,ZH-BLOG 名称应该会显 (蓝色)的渐变效果. 示为从 #BD34FE(紫色)到#41D1FF 技术说明 推荐做法:使用THEME目录来管理样式,这是VITEPRESS官方推荐的方式 自动加载:VITEPRESS会自动识别 THEME/INDEX.TS 文件并加载相关样式 模块化:这种方式更便于管理和扩展主题样式 如果您需要进一步调整样式,可以直接修改 THEME/STYLE.CSS 文件. 产物汇总 3个文件已更改 +10 -3 查看变更 -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774261346334-6f19f08a-4ffd-4a2f-a374-7492393cf76f.png)

#### 搜索栏
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

<!-- 这是一张图片，ocr 内容为：首页 ZH-BLOG 其他 CTRL K 后端 SEARCH SEARCH TO NAVIGATE ESC TO CLOSE TO SELECT ZH-BIOG -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774262439001-18cb1c2f-d980-417d-baef-2e74d91fdee9.png)

#### 侧边栏更新
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

#### 修改gitHub链接


<!-- 这是一张图片，ocr 内容为：91 SOCIALLINKS: SOCIALLINKS: ICON: 'GITHUB', LINK: 'HTTPS://GITHUB.COM/EHIDE9/ZH-BLOG' 92 ICON:'GITHUB',LINK:'HTTPS://GITHUB.COM/VUEJS/VITEPRESS'] 93 -->
![](https://cdn.nlark.com/yuque/0/2026/png/32453020/1774318876311-361df8ff-6064-4924-ac3d-85b1a042369c.png)

### 部署到github page




