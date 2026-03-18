export interface ProjectItem {
	id?: number;
	title: string
	title_en?: string
	description?: string
	date?: string
	detail?: string
  	url?: string
	tags?: string[]
	cover?: string[]
}

// 目前设置为空数组，首页将不显示项目
export const projectItems: ProjectItem[] = [];

// --- 备忘录：以后添加项目时，参考下面的格式填入上面的方括号中 ---
/*
{
    title: "人体工学机械键盘设计",
    title_en: "Ergonomic Mechanical Keyboard Design",
    description: "An ergonomic wireless mechanical keyboard design, optimizing user workflow and comfort.",
    date: "2026-03-18",
    detail: "/detail/keyboard",
    url: "",
    cover: ['cover/Keyboard Design-cover.jpg'],
    tags: ['Industrial Design', 'Strategy', 'CMF']
}
*/
