---
sidebarDepth: 2 # 2 其实是默认值
---

# 核心函数库

::: tip
本章节的函数内容大多与 mirai-api-http 的 API 相似或一致 (部分函数的参数顺序可能发生变动)，你可以参考 mirai-api-http 的文档了解每个参数的具体含义以及每个函数的返回内容。
:::

::: tip 关于 sessionKey
如未特别说明，则函数中的 sessionKey 参数可以留空，不需要考虑鉴权相关问题。因为本框架已经自动处理了，所以你只需要专注于命令与其内容即可。
:::

## 消息发送与撤回

### 发送好友消息

```php
sendFriendMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | integer | false | 发送消息目标好友的 QQ 号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 引用一条消息的 messageId 进行回复 |

### 发送群消息

```php
sendGroupMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | integer | false | 发送消息目标群的群号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 引用一条消息的 messageId 进行回复 |

### 发送临时会话消息

```php
sendTempMessage($qq, $group, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| qq | integer | false | 临时会话对象 QQ 号 |
| group | integer | false | 临时会话群号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 引用一条消息的 messageId 进行回复 |

### 发送头像戳一戳消息

未定义

### 撤回消息

```php
recall($messageId = true, $target = true, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| messageId | integer | true | 需要撤回的消息的 messageId (留空或传入 true 指定为当前上报消息) |
| target | integer | true | 好友 id 或群 id (留空或传入 true 指定为当前上报消息) |

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
| target | integer | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | integer | true | 群号 |
| qq | integer | true | 好友 QQ 号 |
| withDownloadInfo | boolean | true | 是否携带下载信息，额外请求，无必要不要携带 |

### 创建文件夹

```php
file_mkdir($id, $directoryName, $path = null, $target = null, $group = null, $qq = null, $sessionKey = '')
```
| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 父目录id, 空串为根目录 |
| directoryName | string | false | 新建文件夹名 |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | integer | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | integer | true | 群号 |
| qq | integer | true | 好友 QQ 号 |

### 删除文件

```php
file_delete($id = true, $path = null, $target = true, $group = null, $qq = null, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 删除文件id |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | integer | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | integer | true | 群号 |
| qq | integer | true | 好友 QQ 号 |

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
| target | integer | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | integer | true | 群号 |
| qq | integer | true | 好友 QQ 号 |

### 重命名文件

```php
file_rename($id = true, $renameTo = null, $path = null, $target = true, $group = null, $qq = null, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| id | string | false | 重命名文件 id |
| renameTo | string | false | 新文件名 |
| path | string | true | 文件夹路径, 文件夹允许重名, 不保证准确, 准确定位使用 id |
| target | integer | true | 群号或好友 QQ 号 (留空或传入 true 指定为当前群或好友) |
| group | integer | true | 群号 |
| qq | integer | true | 好友 QQ 号 |

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
| target | integer | true | 上传目标群号 (传入 true 指定为当前群) |


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
| target | integer | true | 指定群的群号 (传入 true 指定为当前群) |

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
| target | integer | true | 指定群的群号 |
| config | array | true | 群设置 (留空则为获取群设置) |

### 获取/修改群员设置

```php
memberInfo($target = true, $memberId = true, $info = array(), $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | integer | true | 指定群的群号 |
| memberId | integer | true | 群员 QQ 号 |
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
| operate | integer | false | 响应的操作类型 |
| eventId | integer | true | 响应申请事件的标识 (留空或传入 true 则为当前上报的事件标识) |
| fromId | integer | true | 事件对应申请人 QQ 号 (留空或传入 true 则为当前上报的申请人) |
| groupId | integer | true | 事件对应申请人的群号，可能为 0 (留空或传入 true 则为当前上报的群号) |
| message | string | true | 回复的信息 |

### 用户入群申请

```php
resp_memberJoinRequestEvent($operate, $eventId = true, $fromId = true, $groupId = true, $message = "", $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| operate | integer | false | 响应的操作类型 |
| eventId | integer | true | 响应申请事件的标识 (留空或传入 true 则为当前上报的事件标识) |
| fromId | integer | true | 事件对应申请人 QQ 号 (留空或传入 true 则为当前上报的申请人) |
| groupId | integer | true | 事件对应申请人的群号 (留空或传入 true 则为当前上报的群号) |
| message | string | true | 回复的信息 |

### Bot 被邀请入群申请

```php
resp_botInvitedJoinGroupRequestEvent($operate, $eventId = true, $fromId = true, $groupId = true, $message = "", $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| operate | integer | false | 响应的操作类型 |
| eventId | integer | true | 事件标识 (留空或传入 true 则为当前上报的事件标识) |
| fromId | integer | true | 邀请人 (好友) 的QQ号 (留空或传入 true 则为当前上报的邀请人) |
| groupId | integer | true | 被邀请进入群的群号 (留空或传入 true 则为当前上报的群号) |
| message | string | true | 回复的信息 |