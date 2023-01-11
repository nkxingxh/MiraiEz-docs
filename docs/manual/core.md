---
sidebarDepth: 2 # 2 其实是默认值
---

# 核心函数库

::: tip
本章节的函数内容大多与 mirai-api-http 的 API 相似或一致 (部分函数的参数顺序可能发生变动)，你可以参考 mirai-api-http 的文档了解每个参数的具体含义以及每个函数的返回内容。
:::

::: tip
有些 mirai-api-http 的 API 并未 (还未) 在 MiraiEz 中作为函数被定义，可以使用适当的[**适配器函数**](#适配器函数)调用这些命令。
:::

::: tip 关于 sessionKey
如未特别说明，则函数中的 sessionKey 参数可以留空，不需要考虑鉴权相关问题。因为本框架已经自动处理了，所以你只需要专注于命令与其内容即可。
:::

## 适配器函数

### 自动适配器

自动选择一个适配器发送命令。命令字中的 **下划线(_)** 与 **左斜杠(/)** 会自动转换。

> 例如命令字 resp_newFriendRequestEvent 与 resp/newFriendRequestEvent 使用自动适配器都可以。

```php
autoAdapter($command = '', $content = array())
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| command | string | false | 命令字 |
| content | array | true | 命令参数 |

**返回值**

<Badge type="tip" text="HTTP" vertical="middle" /> `array` JSON 解码后的数组
<Badge type="tip" text="WEBHOOK" vertical="middle" /> `array` 固定返回值为 `{"code": 0, "message": "success"}` (此处使用 JSON 便于表达，实际返回是解码为数组后的内容)

### HTTP 适配器

向 HTTP 适配器发送请求。

> 使用 HTTP 适配器时**不需要**在命令字前加 **左斜杠(_)**，例如处理用户入群申请为 resp/memberJoinRequestEvent

::: warning 注意
不同于自动适配器函数，HTTP 适配器函数不会自动将 **下划线(_)** 转换为 **左斜杠(/)**，因此在使用时要特别注意。
:::

```php
HttpAdapter($command, $content = array(), $post = null, $json = true)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| command | string | false | 命令字 |
| content | array | true | 命令参数 |
| post | bool | true | 是否使用 POST 方法 (留空自动判断) |
| json | bool | true | 是否使用 JSON 编码 (仅限 POST, 默认为 true) |

**返回值**

`array` JSON 解码后的数组


## 消息发送与撤回

### 发送好友消息

```php
sendFriendMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | false | 发送消息目标好友的 QQ 号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | int | true | 引用一条消息的 messageId 进行回复 |

### 发送群消息

```php
sendGroupMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | false | 发送消息目标群的群号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | int | true | 引用一条消息的 messageId 进行回复 |

### 发送临时会话消息

```php
sendTempMessage($qq, $group, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| qq | int | false | 临时会话对象 QQ 号 |
| group | int | false | 临时会话群号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | int | true | 引用一条消息的 messageId 进行回复 |

### 发送头像戳一戳消息

未定义

### 撤回消息

```php
recall($messageId = true, $target = true, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageId | int | true | 需要撤回的消息的 messageId (留空或传入 true 指定为当前上报消息) |
| target | int | true | 好友 id 或群 id (留空或传入 true 指定为当前上报消息) |

### 获取漫游消息

未定义


## 文件操作与上传

### 获取文件信息

```php
file_info($id = true, $path = null, $target = true, $group = null, $qq = null, $withDownloadInfo = false, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | true | 文件id, 空串为根目录 |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | int | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | int | true | 群号 |
| qq | int | true | 好友 QQ 号 |
| withDownloadInfo | bool | true | 是否携带下载信息，额外请求，无必要不要携带 |

### 创建文件夹

```php
file_mkdir($id, $directoryName, $path = null, $target = null, $group = null, $qq = null, $sessionKey = '')
```
| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 父目录id, 空串为根目录 |
| directoryName | string | false | 新建文件夹名 |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | int | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | int | true | 群号 |
| qq | int | true | 好友 QQ 号 |

### 删除文件

```php
file_delete($id = true, $path = null, $target = true, $group = null, $qq = null, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 删除文件id |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | int | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | int | true | 群号 |
| qq | int | true | 好友 QQ 号 |

### 移动文件

```php
function file_move($id = true, $moveTo = null, $path = null, $moveToPath = null, $target = true, $group = null, $qq = null, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 删除文件id |
| moveTo | string | true | 移动目标文件夹 id |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| moveToPath | string | true | 移动目标文件路径, 文件夹允许重名, 不保证准确, 准确定位使用 moveTo |
| target | int | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | int | true | 群号 |
| qq | int | true | 好友 QQ 号 |

### 重命名文件

```php
file_rename($id = true, $renameTo = null, $path = null, $target = true, $group = null, $qq = null, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 重命名文件 id |
| renameTo | string | false | 新文件名 |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | int | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | int | true | 群号 |
| qq | int | true | 好友 QQ 号 |

### 图片文件上传

未定义

### 语音文件上传

未定义

### 群文件上传

```php
file_upload($file, $path = '', $type = 'group', $target = true, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| file | CURLFile | false | cURL 文件对象 |
| path | string | true | 上传目录的 id, 空串为上传到根目录 |
| type | string | true | 当前仅支持 `group` (传入 true 指定为当前类型, 留空则为 group) |
| target | int | true | 上传目标群号 (传入 true 指定为当前群) |


## 账号信息与管理

### 获取好友列表

```php
friendList($sessionKey = '')
```

### 获取群列表

```php
groupList($sessionKey = '')
```

### 获取群成员列表

```php
memberList($target = true, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | true | 指定群的群号 (传入 true 指定为当前群) |

### 获取Bot资料

未定义

### 获取好友资料

未定义

### 获取群成员资料

未定义

### 获取QQ用户资料

未定义

### 删除好友

未定义


## 群管理与公告

### 禁言群成员

未定义

### 解除群成员禁言

未定义

### 移除群成员

未定义

### 退出群聊

未定义

### 全体禁言

未定义

### 解除全体禁言

未定义

### 设置群精华消息

未定义

### 获取/修改群设置

```php
groupConfig($target = true, $config = array(), $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | true | 指定群的群号 |
| config | array | true | 群设置 (留空则为获取群设置) |

### 获取/修改群员设置

```php
memberInfo($target = true, $memberId = true, $info = array(), $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | int | true | 指定群的群号 |
| memberId | int | true | 群员 QQ 号 |
| info | array | true | 群员资料 (留空则为获取群员设置) |

### 获取群公告

未定义

### 发布群公告

未定义

### 删除群公告

未定义

## 事件处理

### 添加好友申请

```php
resp_newFriendRequestEvent($operate, $eventId = true, $fromId = true, $groupId = true, $message = "", $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| operate | int | false | 响应的操作类型 |
| eventId | int | true | 响应申请事件的标识 (留空或传入 true 则为当前上报的事件标识) |
| fromId | int | true | 事件对应申请人 QQ 号 (留空或传入 true 则为当前上报的申请人) |
| groupId | int | true | 事件对应申请人的群号，可能为 0 (留空或传入 true 则为当前上报的群号) |
| message | string | true | 回复的信息 |

| operate | 说明 |
| ------- | ---- |
| 0 | 同意添加好友 |
| 1 | 拒绝添加好友 |
| 2 | 拒绝添加好友并添加黑名单，不再接收该用户的好友申请 |

### 用户入群申请

```php
resp_memberJoinRequestEvent($operate, $eventId = true, $fromId = true, $groupId = true, $message = "", $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| operate | int | false | 响应的操作类型 |
| eventId | int | true | 响应申请事件的标识 (留空或传入 true 则为当前上报的事件标识) |
| fromId | int | true | 事件对应申请人 QQ 号 (留空或传入 true 则为当前上报的申请人) |
| groupId | int | true | 事件对应申请人的群号 (留空或传入 true 则为当前上报的群号) |
| message | string | true | 回复的信息 |

| operate | 说明 |
| ------- | ---- |
| 0 | 同意入群 |
| 1 | 拒绝入群 |
| 2 | 忽略请求 |
| 3 | 拒绝入群并添加黑名单，不再接收该用户的入群申请 |
| 4 | 忽略入群并添加黑名单，不再接收该用户的入群申请 |

### Bot 被邀请入群申请

```php
resp_botInvitedJoinGroupRequestEvent($operate, $eventId = true, $fromId = true, $groupId = true, $message = "", $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| operate | int | false | 响应的操作类型 |
| eventId | int | true | 事件标识 (留空或传入 true 则为当前上报的事件标识) |
| fromId | int | true | 邀请人 (好友) 的QQ号 (留空或传入 true 则为当前上报的邀请人) |
| groupId | int | true | 被邀请进入群的群号 (留空或传入 true 则为当前上报的群号) |
| message | string | true | 回复的信息 |

| operate | 说明 |
| ------- | ---- |
| 0 | 同意邀请 |
| 1 | 拒绝邀请 |
