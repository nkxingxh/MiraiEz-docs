# 便捷功能库

## 消息相关

### 快速回复

```php
replyMessage($messageChain, $quote = 0, $at = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 要引用的消息 ID (0 为不引用, true 为引用当前上报的消息, 其他整数值则为消息ID) |
| at | integer | true | 要 @ 的人 (0 为不 @, true 为自动 @, 其他整数值则为 qq 号或频道 tiny_id) |

**返回值**

请参考对应的[消息发送函数](./core.md#消息发送与撤回)

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
- <Badge type="danger" text="失败" vertical="middle" /> `boolean` 无文件返回 false

### 生成消息链

```php
getMessageChain($PlainText = '', $ImageUrl = '', $AtTarget = 0)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| PlainText | string | true | 消息文本 |
| ImageUrl | array, string | true | 图片链接 (可以使用数组传入多张) |
| AtTarget | array, integer | true | 要 At 的 QQ 号 (可以使用数组传入多个) |

**返回值**

`array` 消息链

### 判断上报类型是否为消息

```php
isMessage($type = true)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| type | string | true | 要判断的上报类型 (留空则为当前上报的消息类型) |

**返回值**

`boolean` 上报类型是否为消息 (群聊消息、好友消息、临时消息、频道消息)

## 群相关

### 判断指定群是否存在指定成员

```php
isInGroup($groupID = true, $target = true)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| groupID | integer | true | 群号(传入 true 则指定当前收到的消息所在群号) |
| target | integer | true | 指定 QQ 号 (留空表示当前收到消息的 bot, 传入 true 则表示当前收到的消息的发送者) |

**返回值**

`boolean` 该群是否存在该成员

### 获取 BOT 在群中的权限

```php
getGroupPermission($groupID = true, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| groupID | integer | true | 目标群 (留空则为当前上报的群) |

**返回值**

- <Badge type="tip" text="成功" vertical="middle" /> `string` BOT 在群中的权限 (MEMBER / ADMINISTRATOR / OWNER)
- <Badge type="warning" text="失败" vertical="middle" /> `boolean` Bot 不在该群中返回 false
- <Badge type="danger" text="失败" vertical="middle" /> `null` 获取当前群失败
