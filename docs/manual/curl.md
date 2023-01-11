# cURL 请求库

## 请求函数

### GET

```php
CurlGET($url, $cookie = '', $referer = '', $header = array(), $setopt = array(), $UserAgent = 'MiraiEz')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| url | string | false | 要请求的 URL |
| cookie | string | true | 请求头的 cookie |
| referer | string | true | 请求头的 referer |
| header | array | true | 要添加的 header |
| setopt | array | true | 要使用 curl_setopt 设置的参数 |
| UserAgent | string | true | 用户代理字符串 |

**返回值**

`string` 响应体内容

### POST

```php
CurlPOST($payload, $url, $cookie = '', $referer = '', $header = array(), $setopt = array(), $UserAgent = 'MiraiEz')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| payload | string | false | 请求体内容 |
| url | string | false | 要请求的 URL |
| cookie | string | true | 请求头的 cookie |
| referer | string | true | 请求头的 referer |
| header | array | true | 要添加的 header |
| setopt | array | true | 要使用 curl_setopt 设置的参数 |
| UserAgent | string | true | 用户代理字符串 |

**返回值**

`string` 响应体内容

### PUT

```php
CurlPUT($payload, $url, $cookie = '', $referer = '', $header = array(), $setopt = array(), $UserAgent = 'MiraiEz')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| payload | string | false | 请求体内容 |
| url | string | false | 要请求的 URL |
| cookie | string | true | 请求头的 cookie |
| referer | string | true | 请求头的 referer |
| header | array | true | 要添加的 header |
| setopt | array | true | 要使用 curl_setopt 设置的参数 |
| UserAgent | string | true | 用户代理字符串 |

**返回值**

`string` 响应体内容

### PATCH

```php
CurlPATCH($payload, $url, $cookie = '', $referer = '', $header = array(), $setopt = array(), $UserAgent = 'MiraiEz')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| payload | string | false | 请求体内容 |
| url | string | false | 要请求的 URL |
| cookie | string | true | 请求头的 cookie |
| referer | string | true | 请求头的 referer |
| header | array | true | 要添加的 header |
| setopt | array | true | 要使用 curl_setopt 设置的参数 |
| UserAgent | string | true | 用户代理字符串 |

**返回值**

`string` 响应体内容

### DELETE

```php
CurlDELETE($payload, $url, $cookie = '', $referer = '', $header = array(), $setopt = array(), $UserAgent = 'MiraiEz')
```

| 参数 | 类型 | 可选 | 说明 |
| ---- | --- | ---- | --- |
| payload | string | false | 请求体内容 |
| url | string | false | 要请求的 URL |
| cookie | string | true | 请求头的 cookie |
| referer | string | true | 请求头的 referer |
| header | array | true | 要添加的 header |
| setopt | array | true | 要使用 curl_setopt 设置的参数 |
| UserAgent | string | true | 用户代理字符串 |

**返回值**

`string` 响应体内容

## 请求示例

### 发送一个 GET 请求

```php
$resp = CurlGET('https://example.com/');
```

### 自定义请求头

```php
$header = array('auth: abcdef123456');
$resp = CurlGET('https://example.com/', '', '', $header);
```

### 自定义 cURL 选项

```php
$opt = array([CURLOPT_TIMEOUT, 10]);
$resp = CurlGET('https://example.com/', '', '', array(), $opt);
```
