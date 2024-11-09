import{_ as o,M as d,p as i,q as l,R as a,t,N as n,V as c,a1 as s}from"./framework-96b046e1.js";const h={},u=s(`<h1 id="便捷功能库" tabindex="-1"><a class="header-anchor" href="#便捷功能库" aria-hidden="true">#</a> 便捷功能库</h1><h2 id="消息与事件" tabindex="-1"><a class="header-anchor" href="#消息与事件" aria-hidden="true">#</a> 消息与事件</h2><h3 id="快速回复" tabindex="-1"><a class="header-anchor" href="#快速回复" aria-hidden="true">#</a> 快速回复</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span><span class="token punctuation">,</span> <span class="token variable">$quote</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$at</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$sessionKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array, string</td><td>false</td><td>要发送的消息链或文本</td></tr><tr><td>quote</td><td>int</td><td>true</td><td>要引用的消息 ID (0 为不引用, true 为引用当前上报的消息, 其他整数值则为消息ID)</td></tr><tr><td>at</td><td>int</td><td>true</td><td>要 @ 的人 (0 为不 @, true 为自动 @, 其他整数值则为 qq 号或频道 tiny_id)</td></tr></tbody></table><p><strong>返回值</strong></p>`,6),g=s(`<h3 id="获取当前消息发送者" tabindex="-1"><a class="header-anchor" href="#获取当前消息发送者" aria-hidden="true">#</a> 获取当前消息发送者</h3><p>也可用于获取当前事件的触发者。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getCurrentSenderId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>返回值</strong></p><p>成功返回 <code>int</code> 值, 失败返回 <code>false</code></p><h3 id="获取当前消息所在群" tabindex="-1"><a class="header-anchor" href="#获取当前消息所在群" aria-hidden="true">#</a> 获取当前消息所在群</h3><p>也可用于获取发生当前事件的群。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getCurrentGroupId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>返回值</strong></p><p>成功返回 <code>int</code> 值, 失败返回 <code>false</code></p><h3 id="获取当前-target" tabindex="-1"><a class="header-anchor" href="#获取当前-target" aria-hidden="true">#</a> 获取当前 Target</h3><p>这个函数会优先尝试<a href="#%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E6%B6%88%E6%81%AF%E6%89%80%E5%9C%A8%E7%BE%A4">获取当前消息所在群</a>，如果失败则尝试<a href="#%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E8%80%85">获取当前消息发送者</a>。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getCurrentTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>返回值</strong></p><p>成功返回 <code>int</code> 值, 失败返回 <code>false</code></p><h3 id="判断上报类型是否为消息" tabindex="-1"><a class="header-anchor" href="#判断上报类型是否为消息" aria-hidden="true">#</a> 判断上报类型是否为消息</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">isMessage</span><span class="token punctuation">(</span><span class="token variable">$type</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>true</td><td>要判断的上报类型 (留空则为当前上报的消息类型)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>bool</code> 上报类型是否为消息 (群聊消息、好友消息、临时消息、频道消息)</p><h2 id="消息链相关" tabindex="-1"><a class="header-anchor" href="#消息链相关" aria-hidden="true">#</a> 消息链相关</h2><h3 id="获取消息链中的文本" tabindex="-1"><a class="header-anchor" href="#获取消息链中的文本" aria-hidden="true">#</a> 获取消息链中的文本</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">messageChain2PlainText</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array</td><td>true</td><td>要从其获取文本的消息链 (留空则为当前上报的消息链)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>string</code> 文本消息内容</p><h3 id="获取消息链中的图片地址" tabindex="-1"><a class="header-anchor" href="#获取消息链中的图片地址" aria-hidden="true">#</a> 获取消息链中的图片地址</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">messageChain2ImageUrl</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array</td><td>true</td><td>要从其获取文本的消息链 (留空则为当前上报的消息链)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>array</code> 包含图片 URL 的数组</p><h3 id="获取消息链中的-at" tabindex="-1"><a class="header-anchor" href="#获取消息链中的-at" aria-hidden="true">#</a> 获取消息链中的 At</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">messageChain2At</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array</td><td>true</td><td>要从其获取文本的消息链 (留空则为当前上报的消息链)</td></tr></tbody></table><p><strong>返回值</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果存在 <code>@全体成员</code>，将会使用 -1 作为其 QQ 号。</p></div><p><code>array</code> 包含被 @ 的 QQ 号的数组</p><h3 id="获取消息链中的语音地址" tabindex="-1"><a class="header-anchor" href="#获取消息链中的语音地址" aria-hidden="true">#</a> 获取消息链中的语音地址</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">messageChain2Voice</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array</td><td>true</td><td>要从其获取文本的消息链 (留空则为当前上报的消息链)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>array</code> 包含语音 URL 的数组</p><h3 id="获取消息链中的引用" tabindex="-1"><a class="header-anchor" href="#获取消息链中的引用" aria-hidden="true">#</a> 获取消息链中的引用</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">messageChain2Quote</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array</td><td>true</td><td>要从其获取文本的消息链 (留空则为当前上报的消息链)</td></tr></tbody></table><p><strong>返回值</strong></p>`,46),b=a("code",null,"array",-1),k={href:"https://github.com/project-mirai/mirai-api-http/blob/master/docs/api/MessageType.md#quote",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="获取消息链中的文件-id" tabindex="-1"><a class="header-anchor" href="#获取消息链中的文件-id" aria-hidden="true">#</a> 获取消息链中的文件 ID</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">messageChain2FileId</span><span class="token punctuation">(</span><span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>messageChain</td><td>array</td><td>true</td><td>要从其获取文本的消息链 (留空则为当前上报的消息链)</td></tr></tbody></table><p><strong>返回值</strong></p>`,4),m=a("code",null,"string",-1),y=a("code",null,"bool",-1),f=s(`<h3 id="生成消息链" tabindex="-1"><a class="header-anchor" href="#生成消息链" aria-hidden="true">#</a> 生成消息链</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getMessageChain</span><span class="token punctuation">(</span><span class="token variable">$PlainText</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$Images</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$AtTarget</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>PlainText</td><td>string</td><td>true</td><td>消息文本</td></tr><tr><td>Images</td><td>array, string</td><td>true</td><td>图片链接或 Base64 (可以使用数组传入多张)</td></tr><tr><td>AtTarget</td><td>array, int</td><td>true</td><td>要 At 的 QQ 号 (可以使用数组传入多个)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>array</code> 消息链</p><h3 id="生成消息链文本成员" tabindex="-1"><a class="header-anchor" href="#生成消息链文本成员" aria-hidden="true">#</a> 生成消息链文本成员</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getMessageChain_PlainText</span><span class="token punctuation">(</span><span class="token variable">$PlainText</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>PlainText</td><td>string</td><td>false</td><td>消息文本</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>array</code> 消息链成员</p><h3 id="生成消息链图片成员" tabindex="-1"><a class="header-anchor" href="#生成消息链图片成员" aria-hidden="true">#</a> 生成消息链图片成员</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getMessageChain_Image</span><span class="token punctuation">(</span><span class="token variable">$ImageUrl</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token variable">$ImageBase64</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数二选一即可。</p><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>ImageUrl</td><td>string</td><td>true</td><td>图片链接</td></tr><tr><td>ImageBase64</td><td>string</td><td>true</td><td>图片 Base64</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>array</code> 消息链成员</p><h3 id="生成消息链-at-成员" tabindex="-1"><a class="header-anchor" href="#生成消息链-at-成员" aria-hidden="true">#</a> 生成消息链 At 成员</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getMessageChain_At</span><span class="token punctuation">(</span><span class="token variable">$target</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>target</td><td>int</td><td>false</td><td>要 At 的目标</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>array</code> 消息链成员</p><h2 id="群相关" tabindex="-1"><a class="header-anchor" href="#群相关" aria-hidden="true">#</a> 群相关</h2><h3 id="判断指定群是否存在指定成员" tabindex="-1"><a class="header-anchor" href="#判断指定群是否存在指定成员" aria-hidden="true">#</a> 判断指定群是否存在指定成员</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">isInGroup</span><span class="token punctuation">(</span><span class="token variable">$groupID</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token variable">$target</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>groupID</td><td>int</td><td>true</td><td>群号(传入 true 则指定当前收到的消息所在群号)</td></tr><tr><td>target</td><td>int</td><td>true</td><td>指定 QQ 号 (留空表示当前收到消息的 bot, 传入 true 则表示当前收到的消息的发送者)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>bool</code> 该群是否存在该成员</p><h3 id="判断消息中是否-at-某人" tabindex="-1"><a class="header-anchor" href="#判断消息中是否-at-某人" aria-hidden="true">#</a> 判断消息中是否 At 某人</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">isAtSb</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$target</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$messageChain</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>target</td><td>int</td><td>true</td><td>要判断的目标成员 (留空则为 bot)</td></tr><tr><td>messageChain</td><td>array</td><td>true</td><td>要判断的消息链 (留空则为当前消息)</td></tr></tbody></table><p><strong>返回值</strong></p><p><code>bool</code> 是否 At 该成员</p><h3 id="获取-bot-在群中的权限" tabindex="-1"><a class="header-anchor" href="#获取-bot-在群中的权限" aria-hidden="true">#</a> 获取 BOT 在群中的权限</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">getGroupPermission</span><span class="token punctuation">(</span><span class="token variable">$groupID</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token variable">$sessionKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>groupID</td><td>int</td><td>true</td><td>目标群 (留空则为当前上报的群)</td></tr></tbody></table><p><strong>返回值</strong></p>`,36),x=a("code",null,"string",-1),_=a("code",null,"bool",-1),E=a("code",null,"null",-1);function C(I,$){const p=d("RouterLink"),r=d("ExternalLinkIcon"),e=d("Badge");return i(),l("div",null,[u,a("p",null,[t("请参考对应的"),n(p,{to:"/manual/core.html#%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E4%B8%8E%E6%92%A4%E5%9B%9E"},{default:c(()=>[t("消息发送函数")]),_:1})]),g,a("p",null,[b,t(),a("a",k,[t("Quote 消息"),n(r)])]),v,a("ul",null,[a("li",null,[n(e,{type:"tip",text:"成功",vertical:"middle"}),t(),m,t(" 文件 ID")]),a("li",null,[n(e,{type:"danger",text:"失败",vertical:"middle"}),t(),y,t(" 无文件返回 false")])]),f,a("ul",null,[a("li",null,[n(e,{type:"tip",text:"成功",vertical:"middle"}),t(),x,t(" BOT 在群中的权限 (MEMBER / ADMINISTRATOR / OWNER)")]),a("li",null,[n(e,{type:"warning",text:"失败",vertical:"middle"}),t(),_,t(" Bot 不在该群中返回 false")]),a("li",null,[n(e,{type:"danger",text:"失败",vertical:"middle"}),t(),E,t(" 获取当前群失败")])])])}const A=o(h,[["render",C],["__file","easyMirai.html.vue"]]);export{A as default};
