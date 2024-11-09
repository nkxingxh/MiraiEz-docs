# 介绍

MiraiEz 可以帮助你快速开发自己的 Bot 插件。你可以在左侧浏览更多文档。

::: tip
MiraiEz 是一个 PHP 插件框架，通常不能脱离 mirai-api-http 使用。
:::

欢迎加入我们的交流群: 749709015

## 开始

你可以把 MiraiEz 看作一个 PHP 站点进行部署。

### 使用外置 Web 服务器

::: tip 重要提示
请在 Web 服务器配置中将站点运行目录设置为 `/public`，否则框架无法正常收到消息。
:::

外置 Web 服务器的安装与配置这里就不赘述了。记得配置运行目录即可。

### 使用 PHP 内置 Web 服务器

> 该 Web 服务器目的是帮助应用程序开发。
> 还可用于测试目的或在受控环境中运行的应用程序演示。
> 但并不是一个功能齐全的 Web 服务器。不应该在公共网络上使用。
>                                       —— PHP 手册 

::: tip 关于内置服务器
使用内置服务器可以加快部署流程，但我们不推荐在生产环境中使用。
:::

如果你不想安装 Nginx、Apache 一类的 Web 服务器，你可以使用 PHP 内置的 Web 服务器。

在 MiraiEz 的项目目录运行以下命令在 8000 端口上启动 Web 服务器并运行 MiraiEz。

```
php -S localhost:8000 -t public
```

### 配置

部署好 Web 服务器后，你可以开始[进行配置](./setup.md)。

## 许可

> Copyright (c) 2021-2024 NKXingXh

MiraiEz 根据 **AGPL-3.0 许可证** 进行许可，有关详细信息，请参阅 [LICENSE](https://github.com/nkxingxh/MiraiEz/blob/main/LICENSE) 文件。

**附加要求**

你必须保留每个文件顶部的版权标识。

如果你修改后进行重新分发，请在自述文件或修改的文件顶部说明你修改的部分。


## 鸣谢

[<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" width="200"/>](https://www.jetbrains.com/?from=MiraiEz)

感谢 [JetBrains](https://www.jetbrains.com/?from=MiraiEz) 为本项目提供其产品的许可证。

> Free. Built on open source. Runs everywhere.

[Visual Studio Code](https://code.visualstudio.com/) 是一款免费开源的优秀 IDE，配合扩展可以极大地提升开发效率。

## 其他

> 本框架会收集一些信息用于统计分析，这些信息包括框架版本、系统架构、插件列表与 QQ 号。其中不会包含任何隐私信息，并且我们不会向第三方共享这些数据。
