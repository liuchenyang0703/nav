type NavData = {
  title: string;
  desc: string;
  items: NavLink[];
};

type NavLink = {
  icon: string;
  title: string;
  desc?: string;
  link: string;
};

export const NAV_DATA: NavData[] = [
  {
    title: 'AI 导航',
    desc: '让人工智能帮助你完成枯燥的工作',
    items: [
      {
        title: 'Gamma (PPT)',
        icon: 'https://assets.website-files.com/60de2701a7b28f308f619d3d/62f5b1528499d8e6b3d02447_Gamma_V1_Icon_only_4.gif',
        desc: '公测免费使用',
        link: 'https://gamma.app/'
      },
      {
        title: 'Midjourney（绘画）',
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        desc: '',
        link: 'https://www.midjourney.com'
      },
      {
        title: 'mindmaster',
        icon: 'https://neveragain.allstatics.com/2019/assets/icon/logo/edraw-mindmaster-square.svg',
        desc: '亿图思维(流程图)，需付费(可以免费试用)',
        link: 'https://www.mindmaster.io/'
      },
      {
        title: 'AI工具集',
        icon: 'https://ai-bot.cn/wp-content/uploads/2023/07/ai-bot-favicon.png',
        desc: '国内外AI工具集合网站大全',
        link: 'https://ai-bot.cn/'
      },
      {
        title: 'ChatGPT（需要翻墙）',
        icon: 'https://logos-world.net/wp-content/uploads/2023/02/ChatGPT-Logo.png',
        desc: 'ChatGPT（需要翻墙）',
        link: 'https://chat.openai.com/chat'
      },
      {
        title: 'Kimi',
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        desc: 'Kimi',
        link: 'https://kimi.moonshot.cn/'
      },
      {
        title: 'MINMAX',
        icon: 'https://chat.minimax.io/assets/logo/favicon.png?v=3',
        desc: 'MINMAX',
        link: 'https://chat.minimax.io/'
      },
      {
        title: '豆包',
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
        desc: '豆包',
        link: 'https://www.doubao.com/'
      },
      {
        title: '腾讯元宝',
        icon: 'https://cdn-bot.hunyuan.tencent.com/logo.png',
        desc: '腾讯元宝',
        link: 'https://yuanbao.tencent.com/'
      },
      {
        title: 'DeepSeek',
        icon: 'https://chat.deepseek.com/favicon.svg',
        desc: 'DeepSeek',
        link: 'https://chat.deepseek.com/'
      },
      {
        title: '纳米AI',
        icon: 'https://img1.baidu.com/it/u=2086583428,3359033653&fm=253&fmt=auto&app=120&f=PNG?w=152&h=152',
        desc: '纳米AI',
        link: 'https://bot.n.cn/'
      },
      {
        title: '讯飞星火',
        icon: 'https://xinghuo.xfyun.cn/spark-icon.ico',
        desc: '讯飞星火',
        link: 'https://xinghuo.xfyun.cn/'
      },
    ]
  },
  {
    title: '开源社区',
    desc: '开发者代码开源社区',
    items: [
      {
        title: 'Github',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com/'
      },
      {
        title: 'Gitee',
        icon: 'https://gitee.com/favicon.ico',
        desc: '基于 Git 的代码托管和研发协作平台',
        link: 'https://gitee.com/'
      },
      {
        title: 'GitLab',
        icon: 'https://about.gitlab.com/nuxt-images/ico/favicon.ico?cache=20220414',
        desc: '一个DevOps平台，一个方便软件开发的强大完整应用。',
        link: 'https://about.gitlab.com/'
      },
    ]
  },
  {
    title: '开发者交流社区',
    desc: '开发者代码开源社区',
    items: [
      {
        title: 'Stack Overflow',
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        title: 'CSDN',
        icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://www.csdn.net/'
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      },
      {
        title: '博客园',
        icon: 'https://ts4.cn.mm.bing.net/th?id=ODLS.c8870dec-a17f-476f-ad66-f13612a6fe85&w=32&h=32&o=6&pid=13.1',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com'
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn'
      }
    ]
  },
  {
    title: 'Linux操作系统',
    desc: '',
    items: [
      {
        title: 'Centos 操作系统',
        icon: 'https://www.centos.org/assets/icons/favicon.svg',
        desc: 'Centos操作系统。',
        link: 'https://www.centos.org/'
      },
      {
        title: 'Ubuntu 操作系统官网',
        icon: 'https://assets.ubuntu.com/v1/be7e4cc6-COF-favicon-32x32.png',
        desc: 'Ubuntu操作系统官网，用户友好，适合新手和桌面用户，提供长期支持版本（LTS）。',
        link: 'https://ubuntu.com/download/server'
      },
      {
        title: 'Red Hat 操作系统官网',
        icon: 'https://www.redhat.com/favicon.ico',
        desc: 'Red Hat操作系统官网，商业发行版，专注于企业级服务器和数据中心。',
        link: 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux'
      },
      {
        title: 'Centos Stream 操作系统官网',
        icon: 'https://www.centos.org/assets/icons/favicon.svg',
        desc: 'Centos Stream操作系统官网。',
        link: 'https://mirror.stream.centos.org/'
      },
      {
        title: 'Rocky Linux 操作系统官网',
        icon: 'https://rockylinux.org/favicon.png',
        desc: 'Rocky Linux 操作系统官网，继承了原CentOS的开源特点。',
        link: 'https://rockylinux.org/zh-CN'
      },
      {
        title: 'Debian 操作系统官网',
        icon: 'https://www.debian.org/favicon.ico',
        desc: 'Debian操作系统，稳定性和安全性高，适合服务器和桌面使用。',
        link: 'https://www.debian.org/'
      },
      {
        title: 'SUSE 操作系统官网',
        icon: 'https://www.suse.com/favicon.ico',
        desc: 'Linux SUSE 操作系统官网。',
        link: 'https://www.suse.com/download/sles/'
      },
      {
        title: 'Fedora 操作系统官网',
        icon: 'https://fedoraproject.org/favicon.ico',
        desc: 'Fedora操作系统官网，由 Red Hat 赞助的社区发行版，注重最新技术和创新。',
        link: 'https://fedoraproject.org/'
      },
      {
        title: 'Kali Linux 操作系统',
        icon: 'https://www.kali.org/images/favicon.svg',
        desc: 'Kali Linux 操作系统，专为网络安全和渗透测试设计，预装了大量安全工具和漏洞扫描工具。',
        link: 'https://www.kali.org/'
      },
      {
        title: 'openEuler 操作系统官网',
        icon: 'https://www.openeuler.org/favicon.ico',
        desc: '华为欧拉操作系统官网，是一个面向数字基础设施的开源操作系统，支持服务器、云计算、边缘计算和嵌入式等多种场景。',
        link: 'https://repo.openeuler.org/'
      },
      {
        title: 'Kylin OS 操作系统官网',
        icon: 'https://www.kylinos.cn/favicon.ico',
        desc: '国产操作系统 - 麒麟操作系统（Kylin OS）。',
        link: 'https://www.kylinos.cn/'
      },
      {
        title: 'Anolis OS 操作系统官网',
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01oJnJZg1yK4RzI4Rx2_!!6000000006559-2-tps-118-118.png',
        desc: '国产操作系统 - 龙蜥操作系统（Anolis OS）。',
        link: 'https://openanolis.cn/download'
      },
      {
        title: 'UOS 操作系统官网',
        icon: 'https://home.uniontech.com/home/img/favicon.ico',
        desc: '国产操作系统 - 统信操作系统（UOS）。',
        link: 'https://uniontech.com/os-desktop.html'
      },
      {
        title: '中科方德 操作系统',
        icon: 'https://www.nfschina.com/data/upload/image/20210906/1630914044118736.png',
        desc: '国产操作系统 - 中科方德操作系统。',
        link: 'https://www.nfschina.com/'
      }
    ]
  },
  {
    title: '开源镜像',
    desc: '',
    items: [
      {
        title: '华为云开源镜像站',
        icon: 'https://devcloud-res.hc-cdn.com/MirrorPortal-CDN/2025.3.0/hws/favicon.ico',
        desc: '提供主流开发语言组件、操作系统、常用工具和库等镜像。',
        link: 'https://mirrors.huaweicloud.com/home'
      },
      {
        title: '阿里巴巴开源镜像站',
        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
        desc: '提供极速全面稳定的系统镜像服务。',
        link: 'https://developer.aliyun.com/mirror/'
      },
      {
        title: '网易开源镜像站',
        icon: 'https://mirrors.163.com/.media/favicon.ico',
        desc: '网易提供的镜像站。',
        link: 'https://mirrors.163.com/'
      },
      {
        title: '清华大学开源镜像站',
        icon: 'https://mirrors.tuna.tsinghua.edu.cn/static/img/favicon.png',
        desc: '致力于为国内和校内用户提供高质量的开源软件镜像、Linux 镜像源服务。',
        link: 'https://mirrors.tuna.tsinghua.edu.cn/'
      },
      {
        title: '中国科学技术大学开源镜像站',
        icon: 'https://tools.haiyong.site/wp-content/uploads/2022/04/kexuejishudaxue.jpg',
        desc: '提供各大主流 Linux 发行版的安装镜像。',
        link: 'https://mirrors.ustc.edu.cn/'
      },
      {
        title: '浙江大学开源软件镜像站',
        icon: 'https://tools.haiyong.site/wp-content/uploads/2022/04/zhejiangdaxue.jpg',
        desc: '浙江大学开源软件镜像站。',
        link: 'https://mirrors.zju.edu.cn/'
      },
      {
        title: '兰州大学开源软件镜像站',
        icon: 'https://tools.haiyong.site/wp-content/uploads/2022/04/lanzhoudaxue.jpg',
        desc: '提供主流 GNU/Linux 发行版以及开源、自由软件镜像。',
        link: 'https://mirror.lzu.edu.cn/'
      }
    ]
  },
  {
    title: '设计工具',
    desc: '收录的设计工具',
    items: [
      {
        title: '即时设计',
        icon: 'https://img.js.design/assets/webImg/favicon.ico',
        desc: '同时创造，即时设计',
        link: 'https://js.design/'
      }
    ]
  },
  {
    title: 'WEB网页设计',
    desc: '灵感酷站',
    items: [
      {
        title: 'Pinterest',
        icon: 'https://pngimg.com/uploads/pinterest/pinterest_PNG63.png',
        desc: 'Pintester 国外图片资源',
        link: 'https://www.pinterest.com/'
      },
      {
        title: 'Dribbble',
        icon: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.RLVRjameUVvXbSNFl5xXKwHaHa?pid=ImgDet&rs=1',
        desc: '设计师必备站点，国内顶尖的设计师都在上面',
        link: 'https://dribbble.com/'
      },
      {
        title: '大作',
        icon: 'https://xcx.bigbigwork.com/pimg/favicon.ico',
        desc: '国内图片资源',
        link: 'https://bigbigwork.com/'
      },
      {
        title: 'instructables',
        icon: 'https://www.instructables.com/assets/img/siteassets/apple-touch-icon-192x192.png',
        desc: '电子电气作品',
        link: 'https://www.instructables.com/'
      }
    ]
  },
  {
    title: '小工具',
    desc: '收录的小工具',
    items: [
      {
        title: '在线png压缩',
        icon: 'https://squoosh.app/c/icon-demo-logo-326ed9b6.png',
        desc: 'png图片压缩',
        link: 'https://squoosh.app/'
      },
      {
        title: 'CSS渐变',
        icon: 'https://uigradients.com/static/images/favicon-32x32.png',
        desc: '在线查看渐变颜色,并生成css代码一键复制',
        link: 'https://uigradients.com/#Mini'
      },
      {
        title: '在线转GIF',
        icon: 'https://ezgif.com/favicon.ico',
        desc: '多种格式在线转换为GIF',
        link: 'https://ezgif.com/'
      },
      {
        title: 'CSS渐变2',
        icon: 'https://color.oulu.me/favicon.ico',
        desc: '180种免费的线性渐变,不仅可以复制渐变的原生CSS颜色代码，还可以查看下载每个优质的渐变图片',
        link: 'https://color.oulu.me/'
      }
    ]
  },
  {
    title: 'npm',
    desc: '免费的前端开源项目 CDN 加速服务',
    items: [
      {
        title: 'cbd',
        icon: 'https://cdn.cbd.int/favicon.ico',
        desc: 'npm镜像',
        link: 'https://cdn.cbd.int/'
      },
      {
        title: '字节跳动静态资源公共库',
        icon: 'https://cdn.bytedance.com/src/res/favicon.png',
        desc: '字节跳动静态资源公共库',
        link: 'https://cdn.bytedance.com/'
      },
      {
        title: 'bootcdn',
        icon: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        link: 'https://www.bootcdn.cn/'
      },
      {
        title: 'jsDelivr',
        icon: 'https://www.jsdelivr.com/favicon.ico',
        desc: 'jsDelivr 是一个免费、快速且可靠的 npm 和 GitHub 开源 CDN。大多数 GitHub 链接可以轻松转换为 jsDelivr 链接。',
        link: 'https://www.jsdelivr.com/'
      }
    ]
  },
  {
    title: 'Node 相关',
    desc: '',
    items: [
      {
        title: 'Node.js',
        icon: 'https://nodejs.org/static/images/favicons/favicon.png',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn'
      },
      {
        title: 'Express',
        icon: 'https://expressjs.com/images/favicon.png',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com'
      },
      {
        title: 'Egg',
        icon: 'https://www.eggjs.org/favicon.png',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        title: 'Nest.js 中文文档',
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn'
      }
    ]
  },
  {
    title: 'React 生态',
    desc: '',
    items: [
      {
        title: 'React',
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        title: 'React Router',
        icon: 'https://reactrouter.com/favicon-light.png',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        title: 'Next.js',
        icon: 'https://nextjs.org/favicon.ico',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org'
      },
      {
        title: 'UmiJS',
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org'
      },
      {
        title: 'Ant Design',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design'
      },
      {
        title: 'Ant Design Mobile',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design'
      },
      {
        title: 'Zustand',
        icon: 'https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        title: 'Valtio',
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        title: 'Jotai',
        icon: 'https://jotai.org/favicon.svg',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org'
      },
      {
        title: 'Redux',
        icon: 'https://cn.redux.js.org/img/redux.svg',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org'
      },
    ]
  }, 
  {
    title: 'Vue 生态',
    desc: '一系列支持库和工具，可帮助开发者更快速、高效地构建现代化的Vue应用程序。',
    items: [
      {
        title: 'Vue 3',
        icon: 'https://cn.vuejs.org/logo.svg',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        title: 'Vue 2',
        icon: 'https://cn.vuejs.org/logo.svg',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        title: 'Vue Router',
        icon: 'https://cn.vuejs.org/logo.svg',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        title: 'Pinia',
        icon: 'https://pinia.vuejs.org/logo.svg',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        title: 'Nuxt.js',
        icon: 'https://nuxt.com/icon.png',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        title: 'VueUse',
        icon: 'https://vueuse.org/favicon.svg',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        title: 'Element Plus',
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        title: 'Ant Design Vue',
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com'
      },
      {
        title: 'Vant',
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        title: 'Cube UI',
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui'
      },
      {
        title: 'NutUI',
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com'
      }
    ]
  },
  {
    title: 'JavaScript 框架类库',
    desc: '',
    items: [
      {
        title: 'Svelte',
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev'
      }
    ]
  },
  {
    title: 'CSS 相关',
    desc: '',
    items: [
      {
        title: 'PostCSS',
        icon: 'https://postcss.org/assets/favicon-DbGqNhKa.ico',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        title: 'TailwindCSS 中文网',
        icon: 'https://www.tailwindcss.cn/favicons/favicon.ico?v=3',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '小程序相关',
    desc: '',
    items: [
      {
        title: '微信小程序文档',
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        title: 'uni-app',
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn'
      },
      {
        title: 'Mpx',
        icon: 'https://mpxjs.cn/favicon.ico',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: '可视化',
    desc: '',
    items: [
      {
        title: 'ECharts',
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        title: 'AntV',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/'
      },
      {
        title: 'D3.js',
        icon: 'https://d3js.org/logo.svg',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org'
      },
      {
        title: 'Chart.js',
        icon: 'https://www.chartjs.org/favicon.ico',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org'
      },
      {
        title: 'Three.js',
        icon: 'https://threejs.org/files/favicon.ico',
        desc: 'JavaScript 3D 库',
        link: 'https://threejs.org'
      }
    ]
  },
  {
    title: '编译&构建&打包',
    desc: '',
    items: [
      {
        title: 'Webpack 中文网',
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com'
      },
      {
        title: 'Vite 中文文档',
        icon: 'https://cn.vitejs.dev/logo.svg',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      {
        title: 'Rollup',
        icon: 'https://www.rollupjs.com/img/favicon.png',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com'
      },
      {
        title: 'Turbo',
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build'
      },
      {
        title: 'Babel',
        icon: 'https://www.babeljs.cn/img/favicon.png',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn'
      },
      {
        title: 'esbuild',
        icon: 'https://esbuild.github.io/favicon.svg',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io'
      },
      {
        title: 'SWC',
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs'
      }
    ]
  },
  {
    title: '站点生成器',
    desc: '',
    items: [
      {
        title: 'Astro',
        icon: 'https://astro.build/favicon.svg',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build'
      },
      {
        title: 'VitePress',
        icon: 'https://cn.vuejs.org/logo.svg',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev'
      },
      {
        title: 'VuePress',
        icon: 'https://cn.vuejs.org/logo.svg',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        title: 'dumi',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
      {
        title: 'Docusaurus',
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN'
      }
    ]
  },
  {
    title: '图标库',
    desc: '',
    items: [
      {
        title: 'iconfont',
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn'
      },
      {
        title: 'IconPark 图标库',
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题，具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official'
      },
      {
        title: 'Emoji searcher',
        icon: 'https://emoji.muan.co/appicon.png',
        desc: 'Emoji 表情大全',
        link: ''
      }
    ]
  },
  {
    title: '前端学习资料',
    desc: '',
    items: [
      {
        title: 'MDN | Web 开发者指南',
        icon: 'https://developer.mozilla.org/favicon-192x192.png',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料',
        link: 'https://developer.mozilla.org/zh-CN'
      },
      {
        title: '菜鸟教程',
        icon: 'https://static.jyshare.com/images/favicon.ico',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com'
      },
      {
        title: 'ES6 入门教程',
        icon: 'https://es6.ruanyifeng.com/favicon.ico',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com'
      }
    ]
  },
  {
   title: '学历证书',
   desc: '',
   items: [
      {
       title: '学信网',
       icon: 'https://t1.chei.com.cn/passport/favicon.ico',
       desc: '学信网提供学历查询、学籍查询、学历认证等服务',
       link: 'https://account.chsi.com.cn/'
      },
      {
       title: '全国征兵网',
       icon: 'https://t1.chei.com.cn/common/zbbm/favicon.ico',
       desc: '全国征兵网是官方征兵报名和信息查询平台',
       link: 'https://www.gfbzb.gov.cn/'
      },
      {
       title: '国家开发银行',
       icon: 'https://logo.clearbit.com/sls.cdb.com.cn',
       desc: '国家开发银行学生在线服务系统',
       link: 'https://sls.cdb.com.cn/#/'
      },
      {
       title: '中国教育考试网',
       icon: 'https://logo.clearbit.com/www.neea.edu.cn',
       desc: '提供各类教育考试信息和服务',
       link: 'https://www.neea.edu.cn/'
      },
      {
       title: '普通话在线报名',
       icon: 'https://logo.clearbit.com/bm.cltt.org',
       desc: '国家普通话水平测试在线报名系统',
       link: 'https://bm.cltt.org/'
      },
      {
       title: '中国计算机技术职业资格网',
       icon: 'https://www.ruankao.org.cn/home/asset/image/logo/logo.png?v=20250324',
       desc: '计算机技术职业资格考试信息网',
       link: 'https://www.ruankao.org.cn/'
      }
    ]
  },
  {
   title: '生成器',
   desc: '',
   items: [
      {
       title: '美国地址生成',
       icon: 'https://logo.clearbit.com/www.haoweichi.com',
       desc: '生成美国地址和虚构信息，支持世界各国虚拟身份信息、地址、信用卡生成',
       link: 'http://www.haoweichi.com/'
      },
      {
       title: '信用卡生成器',
       icon: 'https://logo.clearbit.com/ccardgenerator.com',
       desc: '生成有效的信用卡号码，用于数据测试和验证目的',
       link: 'https://ccardgenerator.com/'
      },
      {
       title: '伪名称生成器',
       icon: 'https://logo.clearbit.com/www.fakenamegenerator.com',
       desc: '生成假名、地址、社会安全号码、信用卡号码等，支持多种语言和国家',
       link: 'https://www.fakenamegenerator.com/'
      },
      {
       title: '美国身份证生成',
       icon: 'https://logo.clearbit.com/www.ssnzk.com',
       desc: '生成美国身份证、地址信息等，支持世界各国身份信息生成',
       link: 'https://www.ssnzk.com/'
      }
    ]
  },
];