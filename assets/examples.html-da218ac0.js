import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="常用示例" tabindex="-1"><a class="header-anchor" href="#常用示例" aria-hidden="true">#</a> 常用示例</h1><h2 id="前置插件" tabindex="-1"><a class="header-anchor" href="#前置插件" aria-hidden="true">#</a> 前置插件</h2><h3 id="前置插件示例" tabindex="-1"><a class="header-anchor" href="#前置插件示例" aria-hidden="true">#</a> 前置插件示例</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">pluginRegister</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">pluginParent</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">_pluginName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;frontPlugin&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">_pluginAuthor</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;NKXingXh&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">_pluginDescription</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;这是一个前置插件&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">_pluginPackage</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;top.nkxingxh.frontPluginExample&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">_pluginVersion</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;1.0.0&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">_pluginFrontLib</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token variable">$appid</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$appid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$key</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">appid</span> <span class="token operator">=</span> <span class="token variable">$appid</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">appid</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态调用前置插件" tabindex="-1"><a class="header-anchor" href="#静态调用前置插件" aria-hidden="true">#</a> 静态调用前置插件</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$pluginClass</span> <span class="token operator">=</span> <span class="token function">plugin_getFrontClass</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;top.nkxingxh.frontPluginExample&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$pluginClass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;前置插件获取失败&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//静态调用</span>
<span class="token variable">$frontVer</span> <span class="token operator">=</span> <span class="token variable">$pluginClass</span><span class="token operator">::</span><span class="token constant">_pluginVersion</span><span class="token punctuation">;</span>

<span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;前置插件版本为 <span class="token interpolation"><span class="token variable">$frontVer</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化前置插件" tabindex="-1"><a class="header-anchor" href="#实例化前置插件" aria-hidden="true">#</a> 实例化前置插件</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$pluginObject</span> <span class="token operator">=</span> <span class="token function">plugin_loadFrontObject</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;top.nkxingxh.frontPluginExample&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ABC123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$pluginObject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;前置插件加载失败&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//动态调用</span>
<span class="token variable">$appid</span> <span class="token operator">=</span> <span class="token variable">$pluginObject</span><span class="token operator">-&gt;</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;AppId 为 <span class="token interpolation"><span class="token variable">$appid</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在前置插件中获取调用插件的包名" tabindex="-1"><a class="header-anchor" href="#在前置插件中获取调用插件的包名" aria-hidden="true">#</a> 在前置插件中获取调用插件的包名</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$package</span> <span class="token operator">=</span> <span class="token function">plugin_whoami</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;当前正在被包名为 <span class="token interpolation"><span class="token variable">$package</span></span> 的插件调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function i(l,c){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","examples.html.vue"]]);export{r as default};