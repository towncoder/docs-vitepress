## 端口占用

### mac

```shell
lsof -i |grep port
```

### Linux

```shell
netstat -nltp | grep port
```

## homebrew安装

https://blog.csdn.net/m0_46197393/article/details/106752367



## 使用tree命令生成目录结构

### 原生命令

Mac 系统下默认是不带这条命令的，执行下面这条命令也可以打印出树状结构。

```shell
find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
# 不想每次都输入这么长一条命令怎么办？用 alias 给这条命令指定一条别名，方法步骤如下：

# Step 1 ：创建 .bash_profile 文件
cd ~
touch .bash_profile
open .bash_profile

# Step 2：把下面的命令保存在这个文件中
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"

#Step 3：执行下面命令
source .bash_profile
```

### tree

```shell
brew install tree
```

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20221109093041677.png)

```shell
brew cleanup   # 清理旧版本安装程序
```

**使用方法**

```shell
tree                         #打印所有目录层级
tree -L 2                    #遍历2层
tree > README.md             #输出结果到 Markdown 文档 
```

### 效果

```
.
├── config-data
│   └── DEFAULT_GROUP
│       └── application-dev.yml
└── tenant-config-data
    └── 9862bd7f-2dc2-47a4-9c80-c6290c5c3e2b
        ├── DEFAULT_GROUP
        │   └── seataServer.properties
        └── dev
            └── cloud-alibaba-nacos.yml
```

## bash和zsh



## JDK版本管理

> [JDK17 下载](https://www.oracle.com/java/technologies/downloads/#jdk17-mac)

```shell
brew install jenv
```

