export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string
	title_en?: string
	description?: string
	date?: string		//发布日期
	detail?: string //详细页路径
  	url?: string  //上线链接
	tags?: string[]
	cover?: string[]
}

// 这样设置为空数组 []，首页就会完全清空
export const projectItems: ProjectItem[] = [
	/* 💡 以后想添加内容时，取消下面的注释（删除 /* 和 */ ）即可。
	   你也可以复制这个大括号 {} 块来增加更多项目。

	{
		title: "人体工学机械键盘设计",
		title_en: "Ergonomic Mechanical Keyboard Design",
		description: "An ergonomic wireless mechanical keyboard design, optimizing user workflow and comfort.",
		date: "2026-03-18",
		detail: "/detail/keyboard",
		url: "",
		cover: ['cover/Keyboard Design-cover.jpg'],
		tags: ['Industrial Design', 'Strategy', 'CMF']
	}, 
	*/
];
