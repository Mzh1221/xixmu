---
slug: firefly-mobile-obsidian-dynamic
description: 在手机或电脑使用Obsidian实现随手写Firefly动态
tags:
  - 博客
  - 教程
category: 文章
title: Firefly 搭配 Obsidian 实现快速随手写动态
published: 2026-07-18
updated: 2026-07-18
pinned: true
author: 惜夕暮
draft: false
---
# 前言
Firefly 主题最近新加上了动态功能，动态就是要轻量快捷便携地记录此刻的想法和日常，夏叶已经将动态所需的 yaml 定为只要求 published 时间，用模板功能很容易自动化填充，但依然要右键新建写文件名，能否再简化？可以使用 Obsidian 的官方核心插件“时间戳笔记生成器”。

使用这套工作流首最适合本身就使用 Obsidian 来写博客的人，如果你原本不用 Obsidian 想要尝试，按照以下步骤快速开始。

# 正文
## 配置
首先要下载 [Obsidian](https://obsidian.md/download)，这是一个全平台的 Markdown 编辑器，文件在本地保存。

在 Obsidian 打开你 firefly 仓库下的 content 文件夹为仓库。

要实现 git 操作需要安装第三方插件，点击左下角设置，第三方插件，关闭安全模式，浏览社区插件市场，找到 git 插件（可以直连，但很慢，也可能失败，看你的网络情况，可以浏览器搜索 PKMer 找到它的市场下载），下载启用。

然后在设置里点击核心插件，找到时间戳笔记生成器启用，点击按钮左侧选项设置，新建笔记的存放位置填入 dynamic，接下来我们需要创建一个模板文件。

在左侧树状文件夹导航空白处右键新建文件，命名为模板，粘贴以下内容

```
---
published: {{date:YYYY-MM-DD HH:mm:ss}}
---

```

回到时间戳笔记生成器设置，在模板文件位置填入模板就设置好了。

## 使用
只需点击左侧快捷工具栏里的创建时间戳笔记就可以直接开始写动态了，不用手动写标题和 published，写完可以点击工具栏 Open Git source control 的 git 按钮，点击最左侧按钮Commit-and-sync 直接 add&commit&push 推送到远程仓库自动部署。

## 可选补充
git 插件点开后拖动到右边栏常驻，点击推送更方便。

若想要随时随地地在手机上写，可以配置坚果云同步，也很方便，可以看 [Obsidian + 坚果云 实现 PC 安卓文件同步_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV17dQjB6EM3/?spm_id_from=333.337.search-card.all.click&vd_source=856d0caf334b1f469ed1d70817b03c2c) 这个 UP 的视频教程，手机上写完就点同步，等回到电脑前在点 push，因为动态 published 含了时间了，不用担心过了段时间再推送动态更新时间就不准了。

# 结语
这个发博客工作流真是方便，只要手机上打开 Obsidian 右下角点开工具栏，点创建时间戳笔记就可以开始写了，手机语音转文字也方便，写完点个同步就完成了随时写动态。