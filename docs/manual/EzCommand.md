# 命令支持库

有时候需要让插件对某个命令做出处理 (如 `/ping github.com`), 可以使用命令支持库的功能来注册相关命令。

::: tip
要使用命令支持库的功能，请安装[命令支持前置插件](https://github.com/nkxingxh/MiraiEz/blob/main/plugins/MiraiEzCommand.php)。
:::

**尝试一下**

[命令注册示例插件](https://github.com/nkxingxh/MiraiEz/blob/main/plugins/exampleCmdReg.php)

## 命令注册

如果你只想处理某些命令，你可以使用该命令注册命令处理函数。

::: tip
命令与参数经过解析后将以数组的形式传入处理函数。你可以专注于实现你想要的功能而无需过多关注命令与参数的解析。
:::

**定义**

```php
cmdRegister($func, ...$commands): bool
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| func  | mixed | false | 要注册的 匿名函数 (Closure) 或 方法名 (必须是**公有**方法) |
| commands | string | false | 要注册的命令 (支持多级, 可传入多个) |

**命令**

命令必须以 `/` 作为开头，否则将跳过处理。命令可包含多段，使用单个空格分隔。

使用尖括号 `<消息类型>` 可以匹配指定的[消息类型](https://github.com/project-mirai/mirai-api-http/blob/master/docs/api/MessageType.md#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B)，不使用尖括号则作为文本命令进行匹配。

*例如匹配图片 `<Image>`、匹配 At `<At>`、匹配表情 `<Face>`。*

对于文本命令，将不区分大小。

::: tip 通配
使用 `<Plain>` 匹配任意文本, 使用 `*` 匹配任意类型。
:::

一些命令示例:

 - 纯文本命令，如 `/example cmd`
 - 混合命令，如 `/example <At>`
 - 带引用命令，如 `/example <Quote>`
 - 包含通配的命令，如 `/example *`

::: tip 消息类型
支持注册文本消息与其他类型消息共存的命令，且可以存在多个不同类型的消息。如 `/example <At> <Image> <Quote>`。
:::

::: tip 命令匹配机制
命令的匹配机制为匹配开头，只需要注册的命令与当前命令的开头匹配将会触发处理函数。如消息 `/example <At> ...` 可以触发注册了 `/example` 命令的处理函数。
:::

::: tip 带引用消息
如果消息中带引用 (Quote), 命令支持库在解析时会将其移至最后进行匹配。
你如果需要注册带引用的命令，请确保 `<Quote>` 位于最后。
:::

::: warning 注意
当注册的命令存在其他类型消息时，务必注意这些参数的顺序。参数顺序不一致将不会触发对应的处理函数。
假设消息为 `/example <At> <Image>`, 则不能触发 `/example <Image> <At>` 的处理函数。
:::

## 处理函数

::: tip
我们推荐开发者使用匿名函数 (Closure) 作为命令处理函数。
:::

注册匿名函数 (Closure) 或在插件类内定义**公有**函数，用于处理注册的命令。

_下面以一个匿名函数为例进行展示_

```php
function ($_DATA, $argc, $args) {...}
```

| 参数 | 类型 | 说明 |
| ---- | --- | ---- |
| _DATA | Array | webhook 上报的完整数据 (已解码 JSON) |
| argc | int | 参数数量 |
| args | Array | 解析后的参数数组 |

**返回**

::: warning 注意
请小心地使用**拦截**这一特性，这可能会导致其他插件或处理函数无法按预期完成其任务。
:::

- 返回 `(int) 1` 拦截当前消息或事件，将不再继续执行其他 **hook 处理函数** (包括其他插件的)。
- 返回 `(int) 2` 拦截当前命令，将不再继续执行其他**命令处理函数** (包括其他插件的)。
- 返回其他值无特殊效果。
