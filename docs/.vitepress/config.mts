import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-vitepress/",
  title: "TownCoder",
  description: "沉淀技术 分享人生",
  themeConfig: {
    // 开启搜索
    search: {
      provider: 'local'
    },
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: 'CodeBook', link: '/code/index' ,
            items: [
              { text: '计算机基础',  items: [
                  { text: '操作系统', link: '/code/base/操作系统' },
                  { text: '计算机网络', link: '/code/base/计算机网络' }
                ]},
              { text: '并发编程', items: [
                  { text: '并发编程-掘金', link: '/code/juc/并发编程-掘金' },
                  { text: 'Life', link: '/api-examples' }
                ]}
            ]},
          { text: 'CodeLife', link: '/life/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
