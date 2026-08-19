import type { TimelineItem } from "../components/features/timeline/types";

// ============================================================
// 时间线数据（教育/工作/项目/成就）
// 修改这里即可增删条目，页面 /timeline/ 会自动更新
// type 取值：education | work | project | achievement
// ============================================================
export const timelineData: TimelineItem[] = [
	{
		id: "university",
		title: "大学本科在读",
		description:
			"目前就读中，电子信息。",
		type: "education",
		startDate: "2025-09-22",
		location: "浙江",
		organization: "浙江农林大学",
		skills: ["C", "Python", "嵌入式", "Web"],
		achievements: [
			"学习 STM32 嵌入式开发",
			"学习 PCB 设计与电子电路",
			"搭建个人博客 xixmu",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "xixmu-blog",
		title: "Xixmu 个人博客",
		description:
			"基于 Astro 与 Firefly 主题搭建的个人博客，记录学习笔记、课程追踪与生活动态。",
		type: "project",
		startDate: "2026-07-01",
		skills: ["Astro", "TypeScript", "Firefly", "EdgeOne"],
		achievements: [
			"接入 Umami / 不蒜子访问统计",
			"定制学习时间线",
			"完成 ICP 备案与国内部署",
		],
		links: [
			{
				name: "博客首页",
				url: "https://xixmu.top",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "stm32-learning",
		title: "STM32 嵌入式初步学习",
		description:
			"跟随江协科技课程学习 STM32，覆盖 GPIO、定时器、中断、PWM、串口等外设。",
		type: "achievement",
		startDate: "2026-07-12",
		endDate: "2026-8-13",
		organization: "江协科技",
		skills: ["C", "STM32", "Keil", "GPIO", "TIM", "USART"],
		achievements: [
			"完成 50 课课程体系中的 40+ 课",
			"动手实现 LED 呼吸灯、OLED、电机调节 等实验",
		],
		icon: "material-symbols:emoji-events",
		color: "#2563EB",
	},
	{
		id: "pcb-design",
		title: "PCB 设计初步学习",
		description:
			"学习电路原理与 PCB 设计流程，使用立创 EDA 绘制元件符号与封装。",
		type: "achievement",
		startDate: "2026-07-31",
		organization: "Expert 电子实验室",
		skills: ["立创EDA", "原理图", "PCB Layout", "元件封装"],
		achievements: [
			"掌握电路定理与原理图阅读",
			"学习元件符号绘制与 PCB 设计",
		],
		icon: "material-symbols:verified",
		color: "#EA580C",
	},
	// {//?为可选，无则必填
	// 	id: string;//唯一标识
	// 	title: string;//大标题
	// 	description: string;//正文描述
	// 	type: "education" | "work" | "project" | "achievement";//类型四选一
	// 	startDate: string;//开始时间
	// 	endDate?: string;//结束时间
	// 	location?: string;//地点
	// 	organization?: string;//所属
	// 	position?: string;//职位
	// 	skills?: string[];//技能
	// 	achievements?: string[];//达成
	// 	links?: TimelineLink[];//链接
	// 	icon?: string;//图标
	// 	color?: string;//颜色
	// 	featured?: boolean;//加星标记
	// },
];
