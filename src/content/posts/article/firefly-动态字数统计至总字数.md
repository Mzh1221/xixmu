---
slug: dynamic-to-total-word-count
description: 如何让Firefly主题的动态字数也统计到总字数中
tags:
  - 博客
category: 文章
title: Firefly 如何把动态的字数也统计到总字数里
published: 2026-07-17
updated: 2026-07-17
pinned: true
author: 惜夕暮
draft: false
---
# 前言

Firefly 最近（2026/7/15）更新了“动态”功能，我之前写动态是分类到动态，实质还是个小文章，要看得点进去看，其他 yaml 用 obsidian astro composter 自动填了，但还是要手动给写个英文 slug 和加 tag，不然网址中文显示都是数字百分号难看且无法显示实际意义。

而动态可以直接显示文字内容，对于每条少量文本的形式友好，不用点进去加载，而且写起来没负担，在文章里写总是带点庄重，写少了心里过不去，动态就轻了很多。

如果你是技术文章为主，可以不改，只统计文章总字数，看看你写技术文章写了多少字；如果你像我一样主要记录生活，可以把动态的字数也加入到总字数统计。

# 正文

Firefly 模块化耦合度低，结构清晰，要添加动态字数很方便，只要加类似的十几行就能实现统计动态的数字。

代码位置： src/components/widget/SiteStats.astro

其实只是把 36-51 行的代码复制，把其中的 posts 改为了 dynamics，加在该文件第 51 行后就能实现添加动态字数到总字数。

```
for (const dynamic of dynamics) {
	if (dynamic.body) {
		let text = dynamic.body
			.replace(/```[\s\S]*?```/g, "")
			.replace(/`[^`]*`/g, "")
			.replace(/\s+/g, " ")
			.trim();

		const chineseChars = text.match(/[\u4e00-\u9fa5]/g) || [];
		const englishChars = text.match(/[a-zA-Z]/g) || [];

		totalWords += chineseChars.length + englishChars.length;
	}
}
```

# 结语

动态功能的加入解决了我一句话说说的需求，无需配置 tag 和 slug 也很轻量方便，减少了记录的压力，直接展示在侧边栏和动态页也能很直观地快速浏览。

但其实动态功能的加入并不意味着我要放弃原来的文章动态的用法。文章动态显得更加正式，如果我想记录的事情比较复杂一两句讲不清，或是事情我很想专门记录，又或是带点议论或长篇记录，那就更适合文章动态的形式。而且文章动态可以使用 tag，虽然会增加少量写作阻力，但也更方便统计和长期整理保存。