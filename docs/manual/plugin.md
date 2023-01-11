# 插件对象

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