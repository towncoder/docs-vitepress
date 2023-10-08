import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/docs-vitepress/",
    title: "TownCoder",
    description: "沉淀技术 分享人生",
    ignoreDeadLinks: true,
    themeConfig: {
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                // @ts-ignore
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        // 开启搜索
        search: {
            provider: 'local'
        },
        // 页脚
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
        },
        // 顶部导航
        nav: [
            {text: '首页', link: '/'},
        ],

        sidebar: [
            {
                items: [
                    {
                        text: 'CodeBook', link: '/code/',
                        collapsed: true,
                        items: [
                            {
                                text: '计算机基础',
                                collapsed: true,
                                items: [
                                    {text: 'Linux命令', link: '/code/base/01-命令操作大全'},
                                    {text: '操作系统', link: '/code/base/操作系统'},
                                    {text: '计算机网络', link: '/code/base/计算机网络'},
                                ]
                            },
                            {
                                text: '并发编程',
                                collapsed: true,
                                items: [
                                    {text: '并发编程-掘金', link: '/code/juc/并发编程-掘金'},
                                    {text: '实战应用', link: '/code/juc/02-实战应用'},
                                    {
                                        text: 'ScheduledExecutorService详解',
                                        link: '/code/juc/03-ScheduledExecutorService详解'
                                    },
                                ]
                            },
                            {
                                text: 'Java虚拟机',
                                collapsed: true,
                                items: [
                                    {text: 'Java应用发布时CPU抖动', link: '/code/jvm/01-Java应用发布时CPU抖动'},
                                    {text: '调优工具', link: '/code/jvm/02-调优工具'},
                                    {text: 'Tomcat打破双亲委派', link: '/code/jvm/03-Tomcat打破双亲委派'},
                                    {text: '04-对象大小计算.md', link: '/code/jvm/04-对象大小计算.md'},
                                    {text: '大厂学院-JVM.md', link: '/code/jvm/大厂学院-JVM.md'},
                                ]
                            },
                            {
                                text: '数据存储',
                                collapsed: true,
                                items: [
                                    {
                                        text: '00-jk-后端存储实战.md',
                                        link: '/code/database/00-jk-后端存储实战.md'
                                    },
                                    {
                                        text: '01-MySql',
                                        collapsed: true,
                                        items: [
                                            {text: '00-参考文章.md', link: '/code/database/01-MySql/00-参考文章.md'},
                                            {
                                                text: '01-Innodb存储引擎.md',
                                                link: '/code/database/01-MySql/01-Innodb存储引擎.md'
                                            },
                                            {text: '02-MySQL日志.md', link: '/code/database/01-MySql/02-MySQL日志'},
                                            {text: '03-MySQL调优.md', link: '/code/database/01-MySql/03-MySQL调优'},
                                            {
                                                text: '04-主从分库分表.md',
                                                link: '/code/database/01-MySql/04-主从分库分表.md'
                                            },
                                            {
                                                text: '05-MySQL的各种锁.md',
                                                link: '/code/database/01-MySql/05-MySQL的各种锁.md'
                                            },
                                            {
                                                text: '06-MySQL的存储.md',
                                                link: '/code/database/01-MySql/06-MySQL的存储.md'
                                            },
                                            {
                                                text: '07-执行计划详解.md',
                                                link: '/code/database/01-MySql/07-执行计划详解.md'
                                            },
                                            {
                                                text: '08-集群高可用.md',
                                                link: '/code/database/01-MySql/08-集群高可用.md'
                                            },
                                            {text: '09-隔离级别.md', link: '/code/database/01-MySql/09-隔离级别.md'},
                                        ]
                                    },
                                    {
                                        text: '02-Redis',
                                        collapsed: true,
                                        items: [
                                            {text: '01.安装&源码.md', link: '/code/database/02-Redis/01.安装&源码.md'},
                                            {
                                                text: '02-redis7从0到1.md',
                                                link: '/code/database/02-Redis/02-redis7从0到1.md'
                                            },
                                            {
                                                text: '03-生产高可用.md',
                                                link: '/code/database/02-Redis/03-生产高可用.md'
                                            },
                                            {text: '04-扩展应用.md', link: '/code/database/02-Redis/04-扩展应用.md'},
                                            {text: '05-解决方案.md', link: '/code/database/02-Redis/05-解决方案.md'},
                                        ]
                                    },
                                    {
                                        text: '03-MongoDB',
                                        collapsed: true,
                                        items: [
                                            {text: '并发编程-掘金', link: '/code/database/并发编程-掘金'},
                                        ]
                                    },
                                    {
                                        text: '04-ElasticSearch',
                                        collapsed: true,
                                        items: [
                                            {text: '并发编程-掘金', link: '/code/database/并发编程-掘金'},
                                        ]
                                    },
                                    {
                                        text: '05-ClickHouse',
                                        collapsed: true,
                                        items: [
                                            {text: '并发编程-掘金', link: '/code/database/并发编程-掘金'},
                                        ]
                                    },
                                ]
                            },
                            // {
                            //     text: '并发编程',
                            //     collapsed: true,
                            //     items: [
                            //         {text: '并发编程-掘金', link: '/code/juc/并发编程-掘金'},
                            //         {text: '实战应用', link: '/code/juc/02-实战应用'},
                            //         {
                            //             text: 'ScheduledExecutorService详解',
                            //             link: '/code/juc/03-ScheduledExecutorService详解'
                            //         },
                            //     ]
                            // },
                        ]
                    },
                    {
                        text: 'CodeLife', link: '/life/',
                        collapsed: true,
                        items: [
                            {
                                text: '美食',
                                collapsed: true,
                                items: [
                                    {text: 'Linux命令', link: '/code/base/01-命令操作大全'},
                                    {text: '操作系统', link: '/code/base/操作系统'},
                                    {text: '计算机网络', link: '/code/base/计算机网络'},
                                ]
                            },
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/towncoder'},
            // 自定义icon
            // {
            //   icon: {
            //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            //   },
            //   link: 'https://www.npmjs.com/package/front-end-notes'
            // }
        ]
    }
})
