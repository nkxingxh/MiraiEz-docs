# 插件基础

本章节将带你了解 MiraiEz 的基本插件机制与插件编写方法。

## 匿名类插件对象

```php
pluginRegister(new class extends pluginParent
{
    const _pluginName = "examplePlugin";
    const _pluginAuthor = "nkxingxh";
    const _pluginDescription = "示例插件";
    const _pluginPackage = "top.nkxingxh.examplePlugin";
    const _pluginVersion = "1.2.0";

    public function __construct()
    {
        parent::__construct();
    }

    public function _init()
    {
        hookRegister('hook', 'FriendMessage', 'GroupMessage');
        return true;
    }

    public function hook($_DATA)
    {
        global $_PlainText;
        if ($_PlainText == "/ping") {
            replyMessage("pong");
            return;
        }
    }
});
```

## 插件注册

使用 `pluginRegister` 函数注册一个插件对象。

**定义**

```php
pluginRegister($pluginClass)
```

| 参数          | 类型  | 可选  | 说明 |
| ------------- | ----- | --------- | --- |
| pluginClass   | Class | false     | 要注册的插件对象 |

## 插件基本信息

每个插件需要包含一些基本信息常量，具体定义如下

| 常量名                | 说明          | 备注 |
| --------------------- | ------------ | ---- |
| _pluginName           | 插件显示名称  | |
| _pluginAuthor         | 插件作者      | |
| _pluginDescription    | 插件描述      | |
| _pluginPackage        | 插件包名      | 必须是唯一的 (如已加载相同包名的插件，将跳过) |
| _pluginVersion        | 插件版本      | 「PHP 规范化」的版本数字字符串 (例如: 1.0.0, 1.0.1, 1.0.2, ...) |

## 初始化函数

在插件对象内定义 `_init` 公有函数，用于初始化插件。

**定义**

```php
public function _init() {...}
```

## 挂钩注册

如果你想要插件处理某种消息或事件类型，你需要在[**初始化函数**](#初始化函数)中使用 `hookRegister` 挂钩相应的[处理函数](#处理函数)。

**定义**

```php
hookRegister($func, ...$types)
```

| 参数  | 类型      | 可选  | 说明 |
| ----- | --------- | --------- | --- |
| func  | string    | false     | 要注册的函数名 (必须是**公有**函数) |
| types | string    | false     | 要挂钩的消息或事件类型 (可传入多个) |

**上报类型**

- [消息类型](https://github.com/project-mirai/mirai-api-http/blob/master/docs/api/MessageType.md)
- [事件类型](https://github.com/project-mirai/mirai-api-http/blob/master/docs/api/EventType.md)

## 处理函数

在插件对象内定义**公有**函数，用于处理注册的消息与事件。

_下面以函数名 hook 为例进行展示_

**定义**

```php
public function hook($_DATA) {...}
```

| 参数 | 类型 | 说明 |
| ---- | --- | ---- |
| _DATA | Array | webhook 上报的完整数据 (已解码 JSON) |

## 可读取的全局变量

为了便于插件的开发，有一些预处理过的数据存储在全局变量中。你可以在插件中调用以方便开发，但是不要修改这些全局变量的值。

| 全局变量 | 类型 | 说明 |
| -------- | ---- | ---- |
| _PlainText | string | [messageChain2PlainText](./easyMirai.md#获取消息链中的文本) 函数处理得到的当前上报消息的文本内容 (仅支持上报类型为消息) |
| _ImageUrl | array | [messageChain2ImageUrl](./easyMirai.md#获取消息链中的图片地址) 函数处理得到的当前上报消息的图片地址数组 (仅支持上报类型为消息) |
| _At | array | [messageChain2At](./easyMirai.md#获取消息链中的-At) 函数处理得到的当前上报消息中被@的QQ号数组 (仅支持上报类型为消息) |

## 前置插件

如果你想把你的插件作为前置库提供给其他插件使用，则需要在插件类定义中增加一个常量。

```php
const _pluginFrontLib = true;
```

前置插件与一般插件并无太大的区别，大部分一般插件支持的功能在前置插件上也支持。

与一般插件不同的是，前置插件类不会在执行完挂钩函数后被释放，并且其他插件可以[实例化前置插件对象](./pluginsHelp.md#实例化前置插件对象)。

::: tip 前置插件开发建议
在前置插件中调用 writeLog、getConfig、saveConfig 等函数时，请不要将文件名留空 (即不要留空让这些函数自动获取插件包名)。具体原因请看 [`plugin_whoami()` 方法注意事项](./pluginsHelp.md#获取当前插件包名)
:::
