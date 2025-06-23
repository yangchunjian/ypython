import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: "zh-CN",
  title: "YPython",
  description: "Python项目文档",
  bundler: viteBundler(),
  
  
  theme: hopeTheme({
    // 主题配置
    hostname: "https://aia.fun",
    
    author: {
      name: "YPython Team",
      url: "https://github.com/yangchunjian/ypython",
    },
    
    iconAssets: "fontawesome-with-brands",
    
    logo: "/logo.png",
    
    repo: "yangchunjian/ypython",
    
    docsDir: "docs",
    
    // 导航栏
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "示例",
        link: "/examples/",
      },
    ],
    
    // 侧边栏
    sidebar: {
      "/guide/": "structure",
      "/api/": "structure",
      "/examples/": "structure",
    },
    
    // 页脚
    footer: "MIT Licensed | Copyright © 2024-present YPython Team",
    
    // 显示页脚
    displayFooter: true,
    
    // 插件配置
    plugins: {
      // 搜索插件
      search: {
        locales: {
          "/": {
            placeholder: "搜索文档",
          },
        },
      },
      
      // 代码复制
      copyCode: {
        showInMobile: true,
      },
      
      // 图片预览
      photoSwipe: {
        selector: ".theme-default-content :not(a) > img",
      },
      
      // 阅读时间
      readingTime: {
        wordPerMinute: 300,
      },
      
      // 版权信息
      copyright: {
        author: "YPython Team",
        license: "MIT",
      },
    },
  }),
  
  // 插件
  plugins: [
    // 其他插件可以在这里添加
  ],
}); 