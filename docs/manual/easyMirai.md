# 便捷功能库

## 消息与事件

### 快速回复

```php
replyMessage($messageChain, $quote = 0, $at = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | int | true | 要引用的消息 ID (0 为不引用, true 为引用当前上报的消息, 其他整数值则为消息ID) |
| at | int | true | 要 @ 的人 (0 为不 @, true 为自动 @, 其他整数值则为 qq 号或频道 tiny_id) |

**返回值**

请参考对应的[消息发送函数](./core.md#消息发送与撤回)

### 获取当前消息发送者

也可用于获取当前事件的触发者。

```php
getCurrentSenderId()
```

**返回值**

成功返回 `int` 值, 失败返回 `false`

### 获取当前消息所在群

也可用于获取发生当前事件的群。

```php
getCurrentGroupId()
```

**返回值**

成功返回 `int` 值, 失败返回 `false`

### 获取当前 Target

这个函数会优先尝试[获取当前消息所在群](#获取当前消息所在群)，如果失败则尝试[获取当前消息发送者](#获取当前消息发送者)。

```php
getCurrentTarget()
```

**返回值**

成功返回 `int` 值, 失败返回 `false`

### 判断上报类型是否为消息

```php
isMessage($type = true)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| type | string | true | 要判断的上报类型 (留空则为当前上报的消息类型) |

**返回值**

`bool` 上报类型是否为消息 (群聊消息、好友消息、临时消息、频道消息)

## 消息链相关

### 获取消息链中的文本

```php
messageChain2PlainText($messageChain = null)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array | true | 要从其获取文本的消息链 (留空则为当前上报的消息链) |

**返回值**

`string` 文本消息内容

### 获取消息链中的图片地址

```php
messageChain2ImageUrl($messageChain = null)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array | true | 要从其获取文本的消息链 (留空则为当前上报的消息链) |

**返回值**

`array` 包含图片 URL 的数组

### 获取消息链中的 At

```php
messageChain2At($messageChain = null)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array | true | 要从其获取文本的消息链 (留空则为当前上报的消息链) |

**返回值**

::: tip
如果存在 `@全体成员`，将会使用 -1 作为其 QQ 号。
:::

`array` 包含被 @ 的 QQ 号的数组

### 获取消息链中的语音地址

```php
messageChain2Voice($messageChain = null)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array | true | 要从其获取文本的消息链 (留空则为当前上报的消息链) |

**返回值**

`array` 包含语音 URL 的数组

### 获取消息链中的引用

```php
messageChain2Quote($messageChain = null)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array | true | 要从其获取文本的消息链 (留空则为当前上报的消息链) |

**返回值**

`array` [Quote 消息](https://github.com/project-mirai/mirai-api-http/blob/master/docs/api/MessageType.md#quote)

### 获取消息链中的文件 ID

```php
messageChain2FileId($messageChain = null)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array | true | 要从其获取文本的消息链 (留空则为当前上报的消息链) |

**返回值** 

- <Badge type="tip" text="成功" vertical="middle" /> `string` 文件 ID
- <Badge type="danger" text="失败" vertical="middle" /> `bool` 无文件返回 false

### 生成消息链

```php
getMessageChain($PlainText = '', $Images = '', $AtTarget = 0)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| PlainText | string | true | 消息文本 |
| Images | array, string | true | 图片链接或 Base64 (可以使用数组传入多张) |
| AtTarget | array, int | true | 要 At 的 QQ 号 (可以使用数组传入多个) |

**返回值**

`array` 消息链

### 生成消息链文本成员

```php
getMessageChain_PlainText($PlainText)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| PlainText | string | false | 消息文本 |

**返回值**

`array` 消息链成员

### 生成消息链图片成员

```php
getMessageChain_Image($ImageUrl = null, $ImageBase64 = null)
```

参数二选一即可。

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| ImageUrl | string | true | 图片链接 |
| ImageBase64 | string | true | 图片 Base64 |

**返回值**

`array` 消息链成员

### 生成消息链 At 成员

```php
getMessageChain_At($target)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | false | 要 At 的目标 |

**返回值**

`array` 消息链成员

## 群相关

### 判断指定群是否存在指定成员

```php
isInGroup($groupID = true, $target = true)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| groupID | int | true | 群号(传入 true 则指定当前收到的消息所在群号) |
| target | int | true | 指定 QQ 号 (留空表示当前收到消息的 bot, 传入 true 则表示当前收到的消息的发送者) |

**返回值**

`bool` 该群是否存在该成员

### 判断消息中是否 At 某人

```php
isAtSb(int $target = null, array $messageChain = null): ?bool
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | true | 要判断的目标成员 (留空则为 bot) |
| messageChain | array| true | 要判断的消息链 (留空则为当前消息) |

**返回值**

`bool` 是否 At 该成员

### 获取 BOT 在群中的权限

```php
getGroupPermission($groupID = true, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| groupID | int | true | 目标群 (留空则为当前上报的群) |

**返回值**

- <Badge type="tip" text="成功" vertical="middle" /> `string` BOT 在群中的权限 (MEMBER / ADMINISTRATOR / OWNER)
- <Badge type="warning" text="失败" vertical="middle" /> `bool` Bot 不在该群中返回 false
- <Badge type="danger" text="失败" vertical="middle" /> `null` 获取当前群失败
