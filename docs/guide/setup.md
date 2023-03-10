# 配置

::: tip
假设 Web 服务器端口为 8081, mirai-api-http 的 HTTP 适配器监听 8082 端口
:::

## mirai-api-http 配置

1. 启用验证并设置一个随机的 `verifyKey`
1. 确保 `singleMode` 值为 false

```yml
enableVerify: true
verifyKey: qZ95l4R4TGQPrrf
singleMode: false
```

**适配器配置**

随机生成一个 `Authorization` 用于鉴权 webhook 上报

```yml
adapterSettings:
  http:
    host: 0.0.0.0
    port: 8082
    cors: [*]
    
  webhook:
    destinations: 
    - 'http://localhost:8081/webhook.php'

    extraHeaders:
      Authorization: 'hZaomcUiaulaslD'
```

## MiraiEz 配置

**修改 config/adapter.php**

1. 修改 mirai-api-http 的 HTTP 适配器访问地址
1. 修改 verifyKey
1. 修改用于鉴权 webhook 上报的 Authorization

```php
define("MIRAIEZ_HTTP_API", "http://localhost:8082");
define("MIRAIEZ_HTTP_KEY", "qZ95l4R4TGQPrrf");      //verifyKey
define("MIRAIEZ_WEBHOOK_AUTH", "hZaomcUiaulaslD");  //Authorization
```

**修改 config/debug.php**

1. 设置管理员 QQ
1. 配置启用调试的好友与群组

```php
define('MIRAIEZ_ADMIN_QQ', 1234567890);     //填写管理员 QQ

$MIRAIEZ_DEBUG_GROUPS = [123456789];        //启用调试的群组
$MIRAIEZ_DEBUG_FRIENDS = [1234567890];      //启用调试的好友
```
