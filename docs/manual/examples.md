# 常用示例

## 前置插件

### 前置插件示例

```php
pluginRegister(new class extends pluginParent
{
    const _pluginName = 'frontPlugin';
    const _pluginAuthor = 'NKXingXh';
    const _pluginDescription = '这是一个前置插件';
    const _pluginPackage = 'top.nkxingxh.frontPluginExample';
    const _pluginVersion = '1.0.0';
    const _pluginFrontLib = true;

    private $appid;

    public function __construct($appid = '', $key = '')
    {
        $this->appid = $appid;
    }

    public function getAppId()
    {
        return $this->appid;
    }
});
```

### 静态调用前置插件

```php
$pluginClass = plugin_getFrontClass('top.nkxingxh.frontPluginExample');
if(!$pluginClass) {
    replyMessage('前置插件获取失败', true);
    return 1;
}

//静态调用
$frontVer = $pluginClass::_pluginVersion;

replyMessage("前置插件版本为 $frontVer");
```

### 实例化前置插件

```php
$pluginObject = plugin_loadFrontObject('top.nkxingxh.frontPluginExample', 'ABC123');
if(!$pluginObject) {
    replyMessage('前置插件加载失败', true);
    return 1;
}

//动态调用
$appid = $pluginObject->getAppId();

replyMessage("AppId 为 $appid");
```

### 在前置插件中获取调用插件的包名

```php
$package = plugin_whoami(false);
replyMessage("当前正在被包名为 $package 的插件调用");
```
