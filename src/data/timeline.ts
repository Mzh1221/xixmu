import type { TimelineItem } from "../components/features/timeline/types";

// ============================================================
// 时间线数据（教育/工作/项目/成就）
// 修改这里即可增删条目，页面 /timeline/ 会自动更新
// type 取值：education | work | project | achievement
// ============================================================
export const timelineData: TimelineItem[] = [
	{
		id: "university",
		title: "大学在读",
		description:
			"目前就读中，学习嵌入式开发与 Web 开发，持续沉淀技术栈。",
		type: "education",
		startDate: "2024-09-01",
		location: "浙江",
		organization: "大学",
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
			"定制学习时间线与动态系统",
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
		title: "STM32 嵌入式学习",
		description:
			"跟随江协科技课程学习 STM32，覆盖 GPIO、定时器、中断、PWM、串口等外设。",
		type: "achievement",
		startDate: "2026-07-12",
		organization: "江协科技",
		skills: ["C", "STM32", "Keil", "GPIO", "TIM", "USART"],
		achievements: [
			"完成 50 课课程体系中的 40+ 课",
			"动手实现 LED 流水灯、呼吸灯、OLED 等实验",
		],
		icon: "material-symbols:trophy",
		color: "#2563EB",
	},
	{
		id: "pcb-design",
		title: "PCB 设计学习",
		description:
			"学习电路原理与 PCB 设计流程，使用立创 EDA 绘制元件符号与封装。",
		type: "achievement",
		startDate: "2026-07-31",
		organization: "Expert 电子实验室",
		skills: ["立创EDA", "原理图", "PCB Layout", "元件封装"],
		achievements: [
			"掌握电路定理与原理图阅读",
			"学习元件符号绘制与 PCB 叠层设计",
		],
		icon: "material-symbols:verified",
		color: "#EA580C",
	},
];
