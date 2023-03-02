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

### 实例化前置插件对象

```php
function plugin_loadFrontLib(string $package, ...$init_args)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| package | string | false | 要实例化插件类的插件包名 |
| init_args | any | true | 这些参数将传给插件类的构造函数用于初始化 |

**返回值**

- <Badge type="tip" text="成功" vertical="middle" /> `object` 插件对象
- <Badge type="warning" text="失败" vertical="middle" /> `bool` 该插件不是一个前置插件返回 false
- <Badge type="danger" text="失败" vertical="middle" /> `null` 插件不存在

### 获取当前插件包名

::: tip 提示
这个函数一般是供本框架的函数判断当前插件所用，在插件开发中请直接使用 `self::_pluginPackage` 来获取当前插件包名。 
:::

```php
function plugin_whoami(bool $backtrace = MIRAIEZ_PLUGINS_WHOAMI_BACKTRACE)
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| backtrace | bool | true | 是否使用 debug_backtrace 获取堆栈以取得准确的插件包名 |

::: warning 注意
不使用 debug_backtrace 方法时，将无法准确取得**被其他插件调用的前置插件**的包名。
*例如在插件 A 中实例化插件 B，插件 B 的方法 F() 中使用了 plugin_whoami()，此时在插件 A 中调用插件 B 的 F() 方法，该方法中的 plugin_whoami() 获取到的将是插件 A 的包名*
:::

::: tip 性能
使用 debug_backtrace 的方法获取当前插件包名，可以避免上述情况，但是所需时间约为不使用 debug_backtrace 方法的 6 倍。
*在 E5-2698 V3 的机器上，运行 1000000 次所需时间分别为 3.0328s 与 0.4818s*
:::

**返回值**

- <Badge type="tip" text="成功" vertical="middle" /> `object` 插件对象
- <Badge type="warning" text="失败" vertical="middle" /> `bool` 该插件不是一个前置插件返回 false
- <Badge type="danger" text="失败" vertical="middle" /> `null` 插件不存在
