---
sidebarDepth: 2 # 2 其实是默认值
---

# 核心函数库

## 消息发送与撤回

### 发送好友消息

```php
sendFriendMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | -------- | --- |
| target | integer | false | 发送消息目标好友的 QQ 号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 引用一条消息的 messageId 进行回复 |
| sessionKey | string | true | 已经激活的 Session |

### 发送群消息

```php
sendGroupMessage($target, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | -------- | --- |
| target | integer | false | 发送消息目标群的群号 |
| messageChain | array, string | false | 要发送的消息链或文本 |
| quote | integer | true | 引用一条消息的 messageId 进行回复 |
| sessionKey | string | true | 已经激活的 Session |

### 发送临时会话消息

```php
sendTempMessage($qq, $group, $messageChain, $quote = 0, $sessionKey = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | -------- | --- |
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
| ---- | --- | -------- | --- |
| messageId | integer | true | 需要撤回的消息的 messageId (留空或传入 true 指定为当前上报消息) |
| target | integer | true | 好友 id 或群 id (留空或传入 true 指定为当前上报消息) |
| sessionKey | string | true | 已经激活的 Session |

### 获取漫游消息

未定义


## 文件操作


## 账号管理


## 群管理


## 群公告


## 事件处理
