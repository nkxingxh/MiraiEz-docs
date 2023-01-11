---
sidebarDepth: 2 # 2 其实是默认值
---

# 核心函数库

::: tip
本章节的函数内容大多与 mirai-api-http 的 API 相似或一致 (部分函数的参数顺序可能发生变动)，你可以参考 mirai-api-http 的文档了解每个参数的具体含义。
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
| sessionKey | string | true | 已经激活的 Session |

### 发送群消息

```php
sendGroupMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| target | integer | false | 发送消息目标群的群号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 引用一条消息的 messageId 进行回复 |
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |

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
| sessionKey | string | true | 已经激活的 Session |


## 账号信息与管理


## 群管理


## 群公告


## 事件处理
