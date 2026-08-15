import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
// 站点名称：Xixmu
// 站点描述：在记忆干枯前描绘。
// 站点链接：https://xixmu.top
// 头像链接：https://xixmu.top/_astro/head_ima.rsW3s28l_1KtIxl.avif
export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Hyde Blog",
		imgurl:
			"https://seasir.top/assets/avatar.avif",
		desc: "人心中的成见是一座大山",
		siteurl: "https://seasir.top",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Xixmu",
		imgurl:
			"https://xixmu.top/_astro/head_ima.rsW3s28l_1KtIxl.avif",
		desc: "在记忆干枯前描绘。",
		siteurl: "https://xixmu.top",
		tags: ["Blog"],
		weight: 1, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "年华",
		imgurl:
			"https://q1.qlogo.cn/g?b=qq&nk=1323860289&s=640",
		desc: "分享生活和技术。",
		siteurl: "https://blog.amamo.top",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Olinl Blog",
		imgurl:
			"https://blog.olinl.com/assets/images/avatar.webp",
		desc: "分享、实践、学习",
		siteurl: "https://blog.olinl.com",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "萧小晓",
		imgurl:
			"https://blog.lxlovo.top/assets/friends/png.png",
		desc: "一个爱写文的菜鸡。",
		siteurl: "https://blog.lxlovo.top",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "倾听风雨",
		imgurl:
			"https://q1.qlogo.cn/g?b=qq&nk=3931968261&s=640",
		desc: "huh！",
		siteurl: "https://blog.qtfyu.top",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "潇绪空のBlog",
		imgurl:
			"https://reknal.com/assets/images/avatar.avif",
		desc: "共同见证奇迹诞生！",
		siteurl: "https://reknal.com",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "StackMeow",
		imgurl:
			"https://www.stackmeow.tech/assets/profile/avatar.jpeg",
		desc: "人生是层层堆叠的经历，而内心永远保有一只自在小猫。",
		siteurl: "https://www.stackmeow.tech",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Silvaire",
		imgurl:
			"https://wsrv.nl/?url=avatars.githubusercontent.com/u/184231508?s=400&u=0a370792ba6bbb95a04d309171b562bcd7283a0f&v=3",
		desc: "Per Aspera Ad Astra",
		siteurl: "https://silvaire.top/",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
