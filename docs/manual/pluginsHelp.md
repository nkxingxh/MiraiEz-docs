# 插件增强库

### 写入日志

```php
writeLog($content, $module = '', $logfilename = '', $level = 2)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| content | string | false | 日志内容 |
| module | string | true | 模块名称 |
| logfilename | string | true | 日志文件名 (留空为当前插件包名, 不需要加 .log) |
| level | int | true | 日志级别 (1 DEBUG, 2 INFO, 3 WARN, 4 ERROR, 5 FATAL) |

**无返回值**

### 读取配置文件

```php
getConfig($configFile = '')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| configFile | string | true | 配置文件名 (留空为当前插件包名, 不需要加拓展名) |

**返回值**

`array` JSON 解码后的配置文件内容，如果配置文件为空或不存在则返回空数组。

### 写入配置文件

```php
saveConfig($configFile = '', $config, $jsonEncodeFlags = JSON_UNESCAPED_UNICODE)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| configFile | string | true | 配置文件名 (留空为当前插件包名, 不需要加拓展名) |
| config | array | false | 配置内容 (要求能被 JSON 编码) |
| jsonEncodeFlags | int | true | json_encode flags |

**返回值**

`bool` 成功为 true, 失败为 false