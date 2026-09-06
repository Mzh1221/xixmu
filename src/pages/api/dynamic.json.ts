import { getCollection } from "astro:content";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import {
	dynamicSearchText,
	dynamicSlug,
	sortDynamics,
} from "@/utils/dynamic-utils";

const markdownImagePattern = /!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)/g;

/**
 * 从动态文件名 id（如 "202609062057"）重建准确的 UTC 时刻时间戳（毫秒）。
 * 文件名格式 = YYYYMMDDHHmm，表示发布时的 UTC+8 墙钟时间，无歧义，
 * 不依赖构建服务器时区，也不受 Astro content loader 对 published 无时区
 * 字符串解析规则的干扰。
 */
function publishedTsFromId(id: string): number {
	const clean = id.replace(/\.(md|mdx)$/i, "");
	const m = clean.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/);
	if (!m) return 0; // 无法解析的文件名 → 调用方回退 published
	const [, y, mo, d, h, mi] = m.map(Number);
	// 文件名的日期时间视为 Asia/Shanghai (UTC+8) 墙钟，
	// 换算成 UTC 时间戳 = 去掉 8 小时。
	return Date.UTC(y, mo - 1, d, h - 8, mi, 0, 0);
}

export async function GET(): Promise<Response> {
	const processor = await createMarkdownProcessor({
		syntaxHighlight: "shiki",
		shikiConfig: { theme: "github-light" },
	});
	const dynamics = sortDynamics(await getCollection("dynamic"));
	const data = await Promise.all(
		dynamics.map(async (entry) => {
			const images: Array<{ alt: string; src: string; title?: string }> = [];
			const markdown = (entry.body || "").replace(
				markdownImagePattern,
				(_match, alt: string, src: string, title?: string) => {
					images.push({ alt, src, ...(title ? { title } : {}) });
					return "";
				},
			);
			const rendered = await processor.render(markdown);

			// 优先用文件名重建（无歧义 UTC 时间戳）；失败则退回 content loader 的
			// published（其基于构建期字符串解析，可能受时区影响）。
			const fromId = publishedTsFromId(entry.id);
			const published =
				fromId > 0 ? fromId : entry.data.published.getTime();

			return {
				id: dynamicSlug(entry.id),
				published,
				html: rendered.code,
				images,
				searchText: dynamicSearchText(entry),
				pinned: entry.data.pinned || false,
				location: entry.data.location.trim(),
			};
		}),
	);

	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
}
