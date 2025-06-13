import {defineConfig} from "vitepress";

export default defineConfig({

    base: '/nav/',

    title: "Mr.Liucy导航",
    lang: "zh-CN",
    description: "",
    lastUpdated: true,
    cleanUrls: true,
    /* markdown 配置 */
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', {rel: 'icon', href: 'logo.png'}]
    ],
    themeConfig: {
        logo: "logo.png",
        siteTitle: "Mr.Liucy导航",
        /* 右侧大纲配置 */
        outline: {
            level: "deep",
            label: "本页目录",
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/liuchenyang0703/nav/' },
          { icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="48" fill="#1296db"/><text x="50" y="50" font-family="Arial, sans-serif" font-size="56" fill="#ffffff" text-anchor="middle" alignment-baseline="central" font-weight="bold">L</text></svg>'
                  },
            link: 'https://liuchenyang.top',
          },
          {
			icon: {
			  svg: '<svg t="1728183147842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" data-darkreader-inline-fill="" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#1296db" p-id="2077" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#0e78af;"></path></svg>',
			},
			link: 'https://blog.csdn.net/liu_chen_yang?type=blog',
          },
          {
			icon: {
			  svg: '<svg t="1728183344877" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1673" data-darkreader-inline-fill="" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="1674" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#168ab3;"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="1675" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#168ab3;"></path></svg>',
			},
			link: 'https://space.bilibili.com/39814207',
		  },
        ],
        footer: {
            message: '',
            copyright: '版权所有 © 2023-present Mr.Liucy | <a href="http://beian.miit.gov.cn/" target="_blank">京ICP备2023037493号</a> | <a href="https://icp.gov.moe/?keyword=20250703" target="_blank">萌ICP备20250703号</a>'            
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    },
});
