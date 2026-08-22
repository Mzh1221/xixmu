import { siteConfig } from "../config";

export function formatDateToYYYYMMDD(date: Date): string {
	return date.toISOString().substring(0, 10);
}

// 国际化日期格式化函数
export function formatDateI18n(
	dateInput: Date | string,
	includeTime?: boolean,
): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const lang = siteConfig.lang || "en";

	// 根据语言设置不同的日期格式
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	if (includeTime) {
		options.hour = "2-digit";
		options.minute = "2-digit";
		options.second = "2-digit";
	}

	// 如果配置了时区，则将其用于格式化（IANA 时区字符串）
	if (siteConfig.timezone) {
		(options as Intl.DateTimeFormatOptions).timeZone = siteConfig.timezone;
	}

	// 语言代码映射
	const localeMap: Record<string, string> = {
		zh_CN: "zh-CN",
		zh_TW: "zh-TW",
		en: "en-US",
		ja: "ja-JP",
		ko: "ko-KR",
		es: "es-ES",
		th: "th-TH",
		vi: "vi-VN",
		tr: "tr-TR",
		id: "id-ID",
		fr: "fr-FR",
		de: "de-DE",
		ru: "ru-RU",
		ar: "ar-SA",
	};

	const locale = localeMap[lang] || "en-US";
	return includeTime
		? date.toLocaleString(locale, options)
		: date.toLocaleDateString(locale, options);
}

// 国际化日期时间格式化函数（带时分秒）
export function formatDateI18nWithTime(dateInput: Date | string): string {
	return formatDateI18n(dateInput, true);
}

export function formatDynamicDate(dateInput: Date | string): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const parts = new Intl.DateTimeFormat("en-CA", {
		timeZone: "UTC",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23",
	}).formatToParts(date);
	const get = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((part) => part.type === type)?.value || "";
	return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

/**
 * 相对时间：几秒前/几分钟前/几小时前/几天前/几个月前/几年前
 * 用于动态页面的时间显示
 */
export function formatRelativeTime(dateInput: Date | string): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffSec = Math.floor(diffMs / 1000);
	const diffMin = Math.floor(diffSec / 60);
	const diffHour = Math.floor(diffMin / 60);
	const diffDay = Math.floor(diffHour / 24);
	const diffMonth = Math.floor(diffDay / 30);
	const diffYear = Math.floor(diffDay / 365);

	if (diffSec < 60) return "刚刚";
	if (diffMin < 60) return `${diffMin} 分钟前`;
	if (diffHour < 24) return `${diffHour} 小时前`;
	if (diffDay < 30) return `${diffDay} 天前`;
	if (diffMonth < 12) return `${diffMonth} 个月前`;
	return `${diffYear} 年前`;
}

export function formatTimezoneOffset(
	timezone: string,
	dateInput: Date | string,
): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const timezoneName = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		timeZoneName: "longOffset",
	})
		.formatToParts(date)
		.find((part) => part.type === "timeZoneName")?.value;

	if (!timezoneName || timezoneName === "GMT") return "UTC";

	return timezoneName
		.replace("GMT", "UTC")
		.replace(/([+-])0(\d)/, "$1$2")
		.replace(":00", "");
}

// 统一格式为 YYYY-MM-DD HH:mm，支持站点时区
export function formatDateTimeToYYYYMMDDHHmm(dateInput: Date | string): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	if (siteConfig.timezone) {
		options.timeZone = siteConfig.timezone;
	}

	const parts = new Intl.DateTimeFormat("en-CA", options).formatToParts(date);
	const get = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((p) => p.type === type)?.value || "";

	return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}`;
}
