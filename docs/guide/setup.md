# 配置

::: tip
假设 Web 服务器端口为 8081, mirai-api-http 的 HTTP 适配器监听 8082 端口
:::

## mirai-api-http 配置

1. 启用验证并设置一个随机的 `verifyKey`
1. 确保 `singleMode` 值为 false

```yml
enableVerify: true            # 启用验证
verifyKey: qZ95l4R4TGQPrrf    # 随机生成一个, 和等下设置的 MIRAIEZ_HTTP_KEY 要一致
singleMode: false             # 设置为 false
```

**适配器配置**

随机生成一个 `Authorization` 用于鉴权 webhook 上报

```yml
adapterSettings:
  http:
    host: 0.0.0.0
    port: 8001      # 不能和 Web 服务器的端口一样
    cors: [*]
    
  webhook:
    # 配置 webhook.php 的 URL
    destinations: 
    - 'http://localhost:8000/webhook.php'

    # 和等下设置的 MIRAIEZ_WEBHOOK_AUTH 要一致
    extraHeaders:
      Authorization: 'hZaomcUiaulaslD'
```

## MiraiEz 配置

### 适配器配置

**修改 config/adapter.php**

1. 修改 mirai-api-http 的 HTTP 适配器访问地址
1. 修改 verifyKey
1. 修改用于鉴权 webhook 上报的 Authorization

```php
define("MIRAIEZ_HTTP_API", "http://localhost:8001");  // mirai-api-http 的 HTTP 适配器地址
define("MIRAIEZ_HTTP_KEY", "qZ95l4R4TGQPrrf");        // mirai-api-http 的 verifyKey
define("MIRAIEZ_WEBHOOK_AUTH", "hZaomcUiaulaslD");    // 需要和 webhook 适配器的 Authorization 一致
```

### 调试配置

::: tip
调试群组和好友并非框架作用域!
当消息或事件发生在启用调试的群组与好友时，如果出现未捕获的异常或者错误，MiraiEz 将会直接以消息的形式发送到当前对话中。
:::

**修改 config/debug.php**

1. 设置管理员 QQ
2. 配置启用调试的好友与群组

```php
define('MIRAIEZ_ADMIN_QQ', 1234567890);     // 填写管理员 QQ

$MIRAIEZ_DEBUG_GROUPS = [123456789];        // 启用调试的群组
$MIRAIEZ_DEBUG_FRIENDS = [1234567890];      // 启用调试的好友
```
