---
slug: giscus-to-waline
tags:
  - 达成
title: 把评论从giscus改成waline
published: 2026-07-05
updated: 2026-07-05
category: 动态
author: 惜夕暮
---
又去 [Olinl Blog - 分享、实践、学习](https://blog.olinl.com/)的网站逛了逛，发现他的网站能显示浏览量。

原来 firefly 前端已经写好接口了，但是评论要用 kwikoo/waline/artalk 才有文章访问量统计功能。

于是我跟着文档和视频搞了搞 waline，发现 vercel 给我的网址进不去，好像要绑域名，差点给我劝退。

进一步了解了一下，发现可以用直接我主站的子域名，不需要额外买域名。

那就好办了，我主站的域名已经配过 CDN 优选了，跟着走很快配好成功了。

而且 waline 可以不用登陆直接评论，甚至什么都不用填可以匿名评论，那真的是大大降低了评论的阻力。