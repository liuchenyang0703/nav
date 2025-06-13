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
    title: '代码托管平台',
    desc: '开发者代码开源社区、托管平台',
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
      },
      {
        title: '51CTO',
        icon: 'https://blog.51cto.com/favicon.ico',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://blog.51cto.com/index/index'
      },
      {
        title: '华为云开发者社区',
        icon: 'https://bbs.huaweicloud.com/favicon.ico',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://bbs.huaweicloud.com/blogs'
      },
      {
        title: '阿里云开发者社区',
        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://developer.aliyun.com/'
      },
    ]
  },
  {
    title: '运维服务官网',
    desc: 'Linux运维服务官网',
    items: [
      {
        title: 'Docker 官网',
        icon: 'https://www.docker.com/app/uploads/2024/02/cropped-docker-logo-favicon-32x32.png',
        desc: 'Docker 官网',
        link: 'https://www.docker.com/'
      },
      {
        title: 'Dockerhub 官网',
        icon: 'https://www.docker.com/app/uploads/2024/02/cropped-docker-logo-favicon-32x32.png',
        desc: 'Dockerhub 官网',
        link: 'https://hub.docker.com/'
      },
      {
        title: 'Kubernetes 官网',
        icon: 'https://kubernetes.io/icons/favicon-32.png',
        desc: 'Kubernetes 官网',
        link: 'https://kubernetes.io/'
      },
      {
        title: 'vmware 官网',
        icon: 'https://www.vmware.com/vm-favicon.png',
        desc: 'vmware 官网',
        link: 'https://www.vmware.com/'
      },
      {
        title: 'MariaDB 官网',
        icon: 'https://mariadb.com/favicon.ico',
        desc: 'MariaDB 官网',
        link: 'https://mariadb.com/'
      },
      {
        title: 'MySQL 官网',
        icon: 'https://labs.mysql.com/common/themes/sakila/favicon.ico',
        desc: 'MySQL 官网',
        link: 'https://www.mysql.com/'
      },
      {
        title: 'Redis 官网',
        icon: 'https://redis.io/favicon.ico',
        desc: 'Redis 官网',
        link: 'https://redis.io/'
      },
      {
        title: '达梦数据库 官网',
        icon: 'https://www.dameng.com/images/logo.ico',
        desc: '达梦数据库 官网',
        link: 'https://www.dameng.com/'
      },
      {
        title: 'Zabbix 官网',
        icon: 'https://assets.zabbix.com/img/favicon.ico',
        desc: 'Zabbix 官网',
        link: 'https://www.zabbix.com/'
      },
      {
        title: 'prometheus 官网',
        icon: 'https://prometheus.io/icon.svg',
        desc: 'prometheus 官网',
        link: 'https://prometheus.io/'
      },
      {
        title: 'Git 官网',
        icon: 'https://git-scm.com/favicon.ico',
        desc: 'Git 官网',
        link: 'https://git-scm.com/'
      },
      {
        title: 'SVN 官网',
        icon: 'https://subversion.apache.org/icon.png',
        desc: 'SVN 官网',
        link: 'https://subversion.apache.org/'
      },
      {
        title: 'Jenkins 官网',
        icon: 'https://www.jenkins.io/favicon.ico',
        desc: 'Jenkins 官网',
        link: 'https://www.jenkins.io/'
      },
      {
        title: 'Jumpserver 官网',
        icon: 'https://www.jumpserver.org/images/logo/favicon.ico',
        desc: 'Jumpserver 官网',
        link: 'https://www.jumpserver.org/'
      },
      {
        title: 'Nginx 官网',
        icon: 'https://nginx.org/favicon.ico',
        desc: 'Nginx 官网',
        link: 'https://nginx.org/'
      },
      {
        title: 'Tomcat 官网',
        icon: 'https://tomcat.apache.org/favicon.ico',
        desc: 'Tomcat 官网',
        link: 'https://tomcat.apache.org/'
      },
      {
        title: 'Apache 官网',
        icon: 'https://httpd.apache.org/favicon.ico',
        desc: 'Apache 官网',
        link: 'https://httpd.apache.org/'
      },
      {
        title: 'NVIDIA 官网',
        icon: 'https://www.nvidia.cn/favicon.ico',
        desc: 'NVIDIA 官网',
        link: 'https://www.nvidia.cn/drivers/lookup/'
      },
      {
        title: 'Openssh 官网',
        icon: 'https://openssl-library.org/favicon.ico',
        desc: 'Openssh 官网',
        link: 'https://www.openssh.com/'
      },
      {
        title: 'pip 官网',
        icon: 'https://pypi.org/static/images/favicon.35549fe8.ico',
        desc: 'pip 官网',
        link: 'https://pypi.org/project/pip/'
      },
      {
        title: 'PHP 官网',
        icon: 'https://www.php.net/favicon.ico',
        desc: 'PHP 官网',
        link: 'https://www.php.net/'
      },
      {
        title: 'Python 官网',
        icon: 'https://www.python.org/favicon.ico',
        desc: 'Python 官网',
        link: 'https://www.python.org/'
      },
      {
        title: 'JDK 官网',
        icon: 'https://www.oracle.com/asset/web/favicons/favicon-32.png',
        desc: 'JDK 官网',
        link: 'https://www.oracle.com/cn/java/technologies/downloads/archive/?source=:ow:o:s:nav::DevoGetStarted'
      },
      {
        title: 'Nodejs 官网',
        icon: 'https://nodejs.org/static/images/favicons/favicon.png',
        desc: 'Nodejs 官网',
        link: 'https://nodejs.org/zh-cn'
      },
    ]
  },
  {
    title: '运维服务安装包下载地址',
    desc: '',
    items: [
      {
        title: 'Redis 二进制包下载地址',
        icon: 'https://redis.io/favicon.ico',
        desc: '提供redis各版本下载地址。',
        link: 'https://download.redis.io/releases/'
      },
      {
        title: 'Nodejs 二进制包下载地址',
        icon: 'https://nodejs.org/favicon.ico',
        desc: '提供Nodejs各版本、各架构、各系统下载地址。',
        link: 'https://nodejs.org/download/release/'
      },
      {
        title: 'Docker离线安装包地址',
        icon: 'https://download.docker.com/favicon.ico',
        desc: 'Docker离线安装包地址，有很多版本及架构可以下载。',
        link: 'https://download.docker.com/linux/static/stable/'
      },
      {
        title: 'GCC 二进制包下载地址',
        icon: 'https://gcc.gnu.org/favicon.ico',
        desc: '提供GCC各版本、各系统下载地址。',
        link: 'https://ftp.gnu.org/gnu/gcc/'
      },
      {
        title: 'Apache 二进制包下载地址',
        icon: 'https://httpd.apache.org/favicon.ico',
        desc: '提供Apache各版本下载地址。',
        link: 'https://httpd.apache.org/'
      },
      {
        title: 'Tomcat 二进制包下载地址',
        icon: 'https://tomcat.apache.org/favicon.ico',
        desc: '提供Tomcat各版本下载地址。',
        link: 'https://tomcat.apache.org/'
      },
      {
        title: 'Nginx 二进制包下载地址',
        icon: 'https://nginx.org/favicon.ico',
        desc: '提供Nginx各版本下载地址。',
        link: 'https://nginx.org/en/download.html'
      },
      {
        title: 'Openssl 二进制包下载地址',
        icon: 'https://openssl-library.org/favicon.ico',
        desc: '提供Openssl各版本下载地址。',
        link: 'https://openssl-library.org/source/old/index.html'
      },
      {
        title: 'Openssh 二进制包下载地址',
        icon: 'https://www.openssh.com/favicon.ico',
        desc: '提供Openssh各版本下载地址。',
        link: 'https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/'
      },
      {
        title: 'Mysql 安装包下载地址',
        icon: 'https://labs.mysql.com/common/themes/sakila/favicon.ico',
        desc: '提供Mysql各版本、各系统下载地址。',
        link: 'https://downloads.mysql.com/archives/community/'
      },
      {
        title: 'JDK 二进制包下载地址',
        icon: 'https://www.oracle.com/asset/web/favicons/favicon-32.png',
        desc: '提供JDK各版本、各系统下载地址。',
        link: 'https://www.oracle.com/cn/java/technologies/downloads/'
      },
      {
        title: 'Python 离线包下载地址',
        icon: 'https://www.python.org/favicon.ico',
        desc: '提供Python各版本、各系统下载地址。',
        link: 'https://www.python.org/ftp/python/'
      },
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
    title: '开源镜像站',
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
    title: '软件官网',
    desc: '提供各类软件的官方网站链接',
    items: [
      {
        title: 'MAS',
        icon: 'https://massgrave.dev/img/favicon.ico',
        desc: '提供Mac应用商店的替代方案',
        link: 'https://massgrave.dev/'
      },
      {
        title: '7-Zip',
        icon: 'https://logo.clearbit.com/www.7-zip.org',
        desc: '免费开源的文件压缩工具',
        link: 'https://www.7-zip.org/'
      },
      {
        title: 'Fliqlo',
        icon: 'https://logo.clearbit.com/fliqlo.com',
        desc: '提供动态壁纸和屏幕保护程序',
        link: 'https://fliqlo.com/'
      },
      {
        title: 'PicGo',
        icon: 'https://logo.clearbit.com/molunerfinn.com',
        desc: '图片上传工具，支持多种图床',
        link: 'https://molunerfinn.com/PicGo/'
      },
      {
        title: 'PuTTY',
        icon: 'https://www.leixue.com/uploads/2019/07/PuTTY.png',
        desc: '免费的SSH和Telnet客户端',
        link: 'https://www.putty.org/'
      },
      {
        title: 'Motrix',
        icon: 'https://logo.clearbit.com/motrix.app',
        desc: '多功能下载管理器',
        link: 'https://motrix.app/'
      },
      {
        title: 'Ventoy',
        icon: 'https://logo.clearbit.com/www.ventoy.net',
        desc: '多系统启动U盘制作工具',
        link: 'https://www.ventoy.net/cn/index.html'
      },
      {
        title: 'WinRAR',
        icon: 'https://www.rarlab.com/favicon.ico',
        desc: '流行的文件压缩工具',
        link: 'https://www.rarlab.com/'
      },
      {
        title: 'UniGetUI',
        icon: 'https://www.marticliment.com/favicon.ico',
        desc: 'Windows软件包管理器界面',
        link: 'https://www.marticliment.com/wingetui/'
      },
      {
        title: 'FinalShell',
        icon: 'https://inews.gtimg.com/newsapp_bt/0/13582661137/1000',
        desc: '高效的服务器管理工具',
        link: 'https://www.finalshell.cn/'
      },
      {
        title: 'xManager',
        icon: 'https://static.wixstatic.com/ficons/01dd63_70fe9f869d9d4763b3578a50dd4e1f6c%7Emv2.ico',
        desc: 'X Window系统管理工具',
        link: 'https://www.xmanagerapp.com/'
      },
      {
        title: '微PE工具箱',
        icon: 'https://www.wepe.com.cn/favicon.ico',
        desc: 'Windows PE启动工具箱',
        link: 'http://www.wepe.com.cn/'
      },
      {
        title: 'DiskGenius',
        icon: 'https://www.diskgenius.cn/favicon.ico',
        desc: '强大的磁盘分区和数据恢复工具',
        link: 'https://www.diskgenius.cn/'
      },
      {
        title: 'angusj.com',
        icon: 'https://www.angusj.com/favicon.ico',
        desc: '提供多种编程工具和资源',
        link: 'https://www.angusj.com/'
      },
      {
        title: 'CR TubeGet',
        icon: 'https://www.cr-soft.net/favicon.ico',
        desc: '视频下载工具',
        link: 'http://www.cr-soft.net/crtubeget.html'
      },
      {
        title: '晨钟网络科技',
        icon: 'https://jamcz.com/favicon.ico',
        desc: '提供多种网络工具和软件',
        link: 'https://jamcz.com/'
      },
      {
        title: 'DNS Jumper',
        icon: 'https://dnsjumper.net/wp-content/uploads/2024/02/DNS-Jumper.png',
        desc: '快速切换DNS服务器的工具',
        link: 'https://dnsjumper.net/'
      },
      {
        title: 'Office Tool Plus',
        icon: 'https://otp.landian.vip/favicon.ico',
        desc: 'Office工具和激活解决方案',
        link: 'https://otp.landian.vip/zh-cn/'
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
      },
      {
        title: '可画',
        icon: 'https://static.canva.cn/static/images/favicon-1.ico',
        desc: '可画',
        link: 'https://www.canva.cn/'
      },
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
        title: 'VuePress Theme Hope',
        icon: 'https://theme-hope.vuejs.press/favicon.ico',
        desc: 'VuePress Theme Hope 个人网站主题',
        link: 'https://theme-hope.vuejs.press/zh/'
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
  {
    title: '文档编辑',
    desc: '',
    items: [
      {
        title: '语雀',
        icon: 'https://logo.clearbit.com/www.yuque.com',
        desc: '知识管理和团队协作平台',
        link: 'https://www.yuque.com/login'
      },
      {
        title: '抠图',
        icon: 'https://logo.clearbit.com/www.remove.bg',
        desc: '在线智能抠图工具',
        link: 'https://www.remove.bg/'
      },
      {
        title: 'Notion',
        icon: 'https://logo.clearbit.com/www.notion.so',
        desc: '多功能协作工具，支持文档、项目管理等',
        link: 'https://www.notion.so/'
      },
      {
        title: 'Draw.io',
        icon: 'https://logo.clearbit.com/app.diagrams.net',
        desc: '免费在线绘图工具，支持多种图表类型',
        link: 'https://app.diagrams.net/'
      },
      {
        title: 'GitBook',
        icon: 'https://logo.clearbit.com/www.gitbook.com',
        desc: '产品文档协作平台',
        link: 'https://www.gitbook.com/'
      },
      {
        title: 'TinyPNG',
        icon: 'https://logo.clearbit.com/tinypng.com',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com/'
      },
      {
        title: '金山文档',
        icon: 'https://logo.clearbit.com/www.kdocs.cn',
        desc: '在线文档协作工具',
        link: 'https://www.kdocs.cn/'
      },
      {
        title: '腾讯文档',
        icon: 'https://docs.gtimg.com/desktop/favicon2.ico',
        desc: '腾讯推出的在线文档工具',
        link: 'https://docs.qq.com/desktop'
      },
      {
        title: '老鱼简历',
        icon: 'https://www.laoyujianli.com/favicon.ico',
        desc: '在线简历制作平台',
        link: 'https://www.laoyujianli.com/'
      },
      {
        title: '在线表格转换',
        icon: 'https://logo.clearbit.com/tableconvert.com',
        desc: '在线表格格式转换工具',
        link: 'https://tableconvert.com/'
      },
      {
        title: 'Coolors调色板',
        icon: 'https://logo.clearbit.com/coolors.co',
        desc: '在线调色工具',
        link: 'https://coolors.co/'
      },
      {
        title: 'MD在线编辑器',
        icon: 'https://logo.clearbit.com/markdown.devtool.tech',
        desc: 'Markdown在线编辑器',
        link: 'https://markdown.devtool.tech/app'
      },
      {
        title: 'html转md工具',
        icon: 'https://logo.clearbit.com/www.helloworld.net',
        desc: 'HTML转Markdown工具',
        link: 'https://www.helloworld.net/html2md'
      },
      {
        title: '在线图片转文字',
        icon: 'https://logo.clearbit.com/pearocr.com',
        desc: '在线图片文字识别工具',
        link: 'https://pearocr.com/#/'
      },
      {
        title: '在线代码编辑器',
        icon: 'https://logo.clearbit.com/codepen.io',
        desc: '在线代码编辑器',
        link: 'https://codepen.io/'
      },
      {
        title: '草料二维码生成器',
        icon: 'https://logo.clearbit.com/cli.im',
        desc: '在线二维码生成工具',
        link: 'https://cli.im/'
      }
    ]
  },
  {
    title: '快传',
    desc: '',
    items: [
      {
        title: '空投',
        icon: 'https://logo.clearbit.com/airportal.cn',
        desc: '快速文件传输工具，支持大文件传输',
        link: 'https://airportal.cn/'
      },
      {
        title: 'Gofile',
        icon: 'https://logo.clearbit.com/gofile.io',
        desc: '全球免费文件传输服务',
        link: 'https://gofile.io/'
      },
      {
        title: '蓝奏云',
        icon: 'https://logo.clearbit.com/pc.woozooo.com',
        desc: '高效云存储服务，文件分享永久有效',
        link: 'https://pc.woozooo.com/'
      },
      {
        title: '奶牛快传',
        icon: 'https://logo.clearbit.com/cowtransfer.com',
        desc: '免费大文件传输工具，上传下载不限速',
        link: 'https://cowtransfer.com/'
      },
      {
        title: '文叔叔',
        icon: 'https://www.wenshushu.cn/favicon.ico',
        desc: '免费大文件传输工具，上传下载不限速，不用登录',
        link: 'https://www.wenshushu.cn/'
      }
    ]
  },
  {
    title: '存储',
    desc: '',
    items: [
      {
        title: '曲奇云',
        icon: 'https://logo.clearbit.com/quqi.com',
        desc: '安全可靠的云存储服务',
        link: 'https://quqi.com/'
      },
      {
        title: 'PikPak',
        icon: 'https://logo.clearbit.com/mypikpak.com',
        desc: '智能云存储服务，支持多设备同步',
        link: 'https://mypikpak.com/'
      },
      {
        title: '夸克网盘',
        icon: 'https://logo.clearbit.com/pan.quark.cn',
        desc: '高效便捷的云存储服务',
        link: 'https://pan.quark.cn/'
      },
      {
        title: '迅雷云盘',
        icon: 'https://logo.clearbit.com/pan.xunlei.com',
        desc: '高速云存储服务，支持大文件下载',
        link: 'https://pan.xunlei.com/'
      },
      {
        title: '天翼云盘',
        icon: 'https://logo.clearbit.com/cloud.189.cn',
        desc: '电信官方云存储服务，安全可靠',
        link: 'https://cloud.189.cn/'
      },
      {
        title: '阿里云盘',
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico',
        desc: '阿里官方云存储服务，支持多种设备',
        link: 'https://www.aliyundrive.com/'
      },
      {
        title: '百度网盘',
        icon: 'https://nd-static.bdstatic.com/m-static/wp-brand/favicon.ico',
        desc: '国内知名云存储服务，资源丰富',
        link: 'https://pan.baidu.com/'
      },
      {
        title: 'OneDrive',
        icon: 'https://logo.clearbit.com/onedrive.live.com',
        desc: '微软官方云存储服务，支持Office协同',
        link: 'https://onedrive.live.com/'
      },
      {
        title: 'Teambition',
        icon: 'https://logo.clearbit.com/www.teambition.com',
        desc: '团队协作与项目管理平台，支持云存储',
        link: 'https://www.teambition.com/'
      }
    ]
  },
  {
    title: 'CDN',
    desc: '内容分发网络服务',
    items: [
      {
        title: 'Gcore',
        icon: 'https://logo.clearbit.com/auth.gcore.com',
        desc: '全球内容分发网络服务，提供高性能的CDN解决方案',
        link: 'https://auth.gcore.com/login/signin'
      },
      {
        title: 'Cloudflare',
        icon: 'https://logo.clearbit.com/dash.cloudflare.com',
        desc: '领先的CDN和网络安全服务提供商，支持免费和付费计划',
        link: 'https://dash.cloudflare.com/'
      }
    ]
  },
  {
    title: 'SSL证书',
    desc: 'SSL证书申请与管理服务',
    items: [
      {
        title: 'FreeSSL',
        icon: 'https://freessl.cn/favicon.ico',
        desc: '提供免费HTTPS证书申请，支持多种证书类型和自动化部署',
        link: 'https://freessl.cn/'
      },
    ]
  },
  {
    title: '域名相关',
    desc: '域名信息查询工具、域名注册服务提供商',
    items: [
      {
        title: '狗狗查询',
        icon: 'https://www.ggcx.com/favicon.ico',
        desc: '提供域名查询和分析服务',
        link: 'https://www.ggcx.com/'
      },
      {
        title: 'US.KG',
        icon: 'https://logo.clearbit.com/nic.us.kg',
        desc: '提供.us.kg域名注册服务',
        link: 'https://nic.us.kg/'
      },
      {
        title: 'DNSPod',
        icon: 'https://logo.clearbit.com/console.dnspod.cn',
        desc: '腾讯云旗下的域名解析和注册服务',
        link: 'https://console.dnspod.cn/'
      },
      {
        title: 'Freenom',
        icon: 'https://logo.clearbit.com/www.freenom.com',
        desc: '提供免费域名注册服务，支持多种顶级域名',
        link: 'http://www.freenom.com/'
      },
      {
        title: 'GoDaddy',
        icon: 'https://logo.clearbit.com/www.godaddy.com',
        desc: '全球知名域名注册和托管服务提供商',
        link: 'https://www.godaddy.com/'
      },
      {
        title: 'Gandi.net',
        icon: 'https://logo.clearbit.com/www.gandi.net',
        desc: '提供域名注册和托管服务，支持多种域名类型',
        link: 'https://www.gandi.net/'
      },
      {
        title: 'NameSilo',
        icon: 'https://logo.clearbit.com/www.namesilo.com',
        desc: '提供域名注册服务，支持多种顶级域名',
        link: 'https://www.namesilo.com/account/'
      },
      {
        title: 'Name.com',
        icon: 'https://logo.clearbit.com/www.name.com',
        desc: '提供域名注册和管理服务',
        link: 'https://www.name.com/'
      },
      {
        title: 'Subreg.CZ',
        icon: 'https://logo.clearbit.com/subreg.cz',
        desc: '提供域名注册服务，支持多种域名类型',
        link: 'https://subreg.cz/en/'
      },
    ]
  },
  {
    title: '软件论坛',
    desc: '提供各种软件资源、教程和下载链接',
    items: [
      {
        title: '李跳跳',
        icon: 'https://www.litiaotiao.com/favicon.ico',
        desc: '分享开源免费软件和实用工具',
        link: 'https://www.litiaotiao.com/'
      },
      {
        title: 'Simplify',
        icon: 'https://logo.clearbit.com/www.sordum.org',
        desc: '提供简化计算机使用的工具和软件',
        link: 'https://www.sordum.org/'
      },
      {
        title: 'Smianao',
        icon: 'https://www.smianao.com/logo/favicon.png',
        desc: '分享和软件有关的教程和技巧',
        link: 'https://www.smianao.com/'
      },
      {
        title: '果核剥壳',
        icon: 'https://logo.clearbit.com/www.ghxi.com',
        desc: '提供软件资源和科技新闻',
        link: 'https://www.ghxi.com/'
      },
      {
        title: '小众软件',
        icon: 'https://logo.clearbit.com/www.appinn.com',
        desc: '分享小众但实用的软件资源',
        link: 'https://www.appinn.com/'
      },
      {
        title: 'LITEAPKS',
        icon: 'https://logo.clearbit.com/liteapks.com',
        desc: '提供轻量级APK文件下载',
        link: 'https://liteapks.com/'
      },
      {
        title: '423Down',
        icon: 'https://www.423down.com/wp-content/themes/D7/img/favicon.ico',
        desc: '提供软件下载资源',
        link: 'https://www.423down.com/'
      },
      {
        title: 'Mobilism',
        icon: 'https://logo.clearbit.com/forum.mobilism.org',
        desc: '专注于移动设备软件的论坛',
        link: 'https://forum.mobilism.org/'
      },
      {
        title: 'FOSSHUB',
        icon: 'https://logo.clearbit.com/www.fosshub.com',
        desc: '提供开源软件资源',
        link: 'https://www.fosshub.com/'
      },
      {
        title: '数字人民币',
        icon: 'https://www.itrmb.com/view/img/favicon.ico',
        desc: '数字人民币相关资源和信息',
        link: 'https://www.itrmb.com/'
      },
      {
        title: 'APKMirror',
        icon: 'https://logo.clearbit.com/www.apkmirror.com',
        desc: '提供APK文件下载和应用信息',
        link: 'https://www.apkmirror.com/'
      },
      {
        title: 'Uptodown',
        icon: 'https://logo.clearbit.com/www.uptodown.com',
        desc: '提供软件和应用的下载服务',
        link: 'https://www.uptodown.com/'
      },
      {
        title: 'AlternativeTo',
        icon: 'https://logo.clearbit.com/alternativeto.net',
        desc: '提供软件的替代品推荐',
        link: 'https://alternativeto.net/'
      }
    ]
  },
  {
    title: '图像',
    desc: '提供各类图像资源的网站',
    items: [
      {
        title: 'pixiv',
        icon: 'https://logo.clearbit.com/www.pixiv.net',
        desc: '日本著名的插画和漫画分享网站',
        link: 'https://www.pixiv.net/'
      },
      {
        title: '免费图片',
        icon: 'https://logo.clearbit.com/pixabay.com',
        desc: '提供大量免费图片素材的网站',
        link: 'https://pixabay.com/'
      },
      {
        title: 'Pinterest',
        icon: 'https://logo.clearbit.com/www.pinterest.com',
        desc: '全球知名的图片分享和灵感发现平台',
        link: 'https://www.pinterest.com/'
      },
      {
        title: 'ArtStation',
        icon: 'https://logo.clearbit.com/www.artstation.com',
        desc: '艺术家和设计师的作品展示平台',
        link: 'https://www.artstation.com/'
      },
      {
        title: 'Wallhaven',
        icon: 'https://logo.clearbit.com/wallhaven.cc',
        desc: '提供高质量壁纸的网站',
        link: 'https://wallhaven.cc/'
      },
      {
        title: 'LOGO设计',
        icon: 'https://logo.clearbit.com/www.logosc.cn',
        desc: '提供LOGO设计资源和工具的网站',
        link: 'https://www.logosc.cn/'
      },
      {
        title: 'Free Icons',
        icon: 'https://logo.clearbit.com/icon-icons.com',
        desc: '提供免费图标资源的网站',
        link: 'https://icon-icons.com/'
      },
      {
        title: 'PNG素材网',
        icon: 'https://www.pngsucai.com/favicon.ico',
        desc: '提供PNG格式图片素材的网站',
        link: 'https://www.pngsucai.com/'
      },
      {
        title: '探索3D模型',
        icon: 'https://logo.clearbit.com/sketchfab.com',
        desc: '提供3D模型资源的网站',
        link: 'https://sketchfab.com/3d-models'
      },
      {
        title: '免费图片素材',
        icon: 'https://logo.clearbit.com/www.pexels.com',
        desc: '提供高质量免费图片素材的网站',
        link: 'https://www.pexels.com/zh-cn/'
      },
      {
        title: '矢量图标和贴纸',
        icon: 'https://logo.clearbit.com/www.flaticon.com',
        desc: '提供矢量图标和贴纸资源的网站',
        link: 'https://www.flaticon.com/'
      },
      {
        title: '混合搭配插图库',
        icon: 'https://logo.clearbit.com/www.humaaans.com',
        desc: '提供可自定义的插图资源的网站',
        link: 'https://www.humaaans.com/'
      },
      {
        title: 'PNGBAG素材网',
        icon: 'https://www.mksucai.com/favicon.ico',
        desc: '提供高质量PNG图片素材的网站',
        link: 'https://www.pngbag.com/'
      },
      {
        title: 'Vue Color Avatar',
        icon: 'https://logo.clearbit.com/vue-color-avatar.vercel.app',
        desc: '提供可自定义颜色的头像生成工具',
        link: 'https://vue-color-avatar.vercel.app/'
      },
      {
        title: '阿里巴巴矢量图标库',
        icon: 'https://logo.clearbit.com/www.iconfont.cn',
        desc: '阿里巴巴提供的矢量图标库',
        link: 'https://www.iconfont.cn/'
      },
      {
        title: 'Icons | Font Awesome',
        icon: 'https://logo.clearbit.com/fontawesome.com',
        desc: '提供高质量图标资源的网站',
        link: 'https://fontawesome.com/v5.15/icons'
      },
      {
        title: 'HTML5 和 JavaScript 地图',
        icon: 'https://logo.clearbit.com/simplemaps.com',
        desc: '提供HTML5和JavaScript地图资源的网站',
        link: 'https://simplemaps.com/'
      }
    ]
  },
  {
    title: '影音',
    desc: '提供免费音效、音乐和视频素材的网站',
    items: [
      {
        title: '免费音效',
        icon: 'https://logo.clearbit.com/www.zapsplat.com',
        desc: '提供超过150,000种音效和550多种免费音乐素材，适用于商业和非商业用途',
        link: 'https://www.zapsplat.com/'
      },
      {
        title: '音乐素材',
        icon: 'https://logo.clearbit.com/cloud.smartsound.com',
        desc: '为内容创作者提供革命性的免版税音乐和音效，支持自定义音乐长度和混合',
        link: 'https://cloud.smartsound.com/'
      },
      {
        title: '免费视频素材',
        icon: 'https://logo.clearbit.com/www.videvo.net',
        desc: '提供高清和4K免费视频素材，适用于各种视频制作需求',
        link: 'https://www.videvo.net/'
      },
      {
        title: '免版税音乐和音效',
        icon: 'https://logo.clearbit.com/artlist.io',
        desc: '提供高质量的免版税音乐和音效，适用于视频编辑和其他内容创作',
        link: 'https://artlist.io/'
      }
    ]
  },
  {
    title: '办公',
    desc: '提供办公相关资源和模板的网站',
    items: [
      {
        title: '第一PPT',
        icon: 'https://www.1ppt.com/favicon.ico',
        desc: '提供免费PPT模板和演示文稿资源',
        link: 'http://www.1ppt.com/'
      },
      {
        title: '合集网',
        icon: 'https://233heji.com/favicon.ico',
        desc: '提供多种信息资源和工具的合集网站',
        link: 'https://233heji.com/'
      },
      {
        title: '找字体',
        icon: 'https://zfont.cn/favicon.ico',
        desc: '提供免费字体下载和在线查找字体的网站',
        link: 'https://zfont.cn/'
      },
      {
        title: '字体大全',
        icon: 'https://www.diyiziti.com/favicon.ico',
        desc: '提供多种书法艺术字体和中文字体下载的网站',
        link: 'http://www.diyiziti.com/List'
      },
      {
        title: '颜色表大全',
        icon: 'https://www.5tu.cn/favicon.ico',
        desc: '提供颜色代码和设计配色表的网站',
        link: 'https://www.5tu.cn/colors/yansebiao.html'
      },
      {
        title: 'emoji表情大全',
        icon: 'https://emoji6.com/emojiall/favicon.ico',
        desc: '提供emoji表情符号大全的网站',
        link: 'https://emoji6.com/emojiall/'
      },
    ]
  },
  {
    title: '论坛',
    desc: '各类技术、科技和兴趣爱好相关的论坛',
    items: [
      {
        title: 'V2EX',
        icon: 'https://logo.clearbit.com/www.v2ex.com',
        desc: '技术爱好者社区，讨论技术、产品和生活',
        link: 'https://www.v2ex.com/'
      },
      {
        title: 'Reddit',
        icon: 'https://logo.clearbit.com/www.reddit.com',
        desc: '全球知名的社交新闻聚合、讨论和内容评级网站',
        link: 'https://www.reddit.com/'
      },
      {
        title: 'MT论坛',
        icon: 'https://bbs.binmt.cc/favicon.ico',
        desc: '专注于移动技术讨论的论坛',
        link: 'https://bbs.binmt.cc/'
      },
      {
        title: '吾爱破解',
        icon: 'https://www.52pojie.cn/favicon.ico',
        desc: '技术爱好者分享和讨论软件破解的论坛',
        link: 'https://www.52pojie.cn/'
      },
      {
        title: '恩山论坛',
        icon: 'https://www.right.com.cn/favicon.ico',
        desc: '专注于无线技术和设备的论坛',
        link: 'https://www.right.com.cn/forum/'
      },
      {
        title: '科技玩家',
        icon: 'https://www.kejiwanjia.net/wp-content/uploads/2021/10/cropped-%E7%A7%91%E6%8A%80%E7%8E%A9%E5%AE%B6_logo-32x32.png',
        desc: '科技爱好者分享和讨论的社区',
        link: 'https://www.kejiwanjia.com/'
      },
      {
        title: '法海之路',
        icon: 'https://fahai.org/favicon.ico',
        desc: '专注于技术和法律讨论的论坛',
        link: 'https://fahai.org/'
      },
      {
        title: 'LINUX DO',
        icon: 'https://logo.clearbit.com/linux.do',
        desc: 'Linux爱好者和开发者的社区',
        link: 'https://linux.do/'
      },
      {
        title: 'Stack Overflow',
        icon: 'https://logo.clearbit.com/stackoverflow.com',
        desc: '全球最大的编程问答社区',
        link: 'https://stackoverflow.com/'
      }
    ]
  },
  {
    title: '文档',
    desc: '各类技术文档和使用指南',
    items: [
      {
        title: 'Keep',
        icon: 'https://logo.clearbit.com/keep-docs.xpoet.cn',
        desc: 'Hexo主题Keep的官方文档，提供主题使用和配置指南',
        link: 'https://keep-docs.xpoet.cn/'
      },
      {
        title: 'Hexo',
        icon: 'https://logo.clearbit.com/hexo.io',
        desc: 'Hexo官方文档，介绍安装、配置和使用方法',
        link: 'https://hexo.io/zh-cn/docs/'
      },
      {
        title: 'PicGo',
        icon: 'https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/New%20LOGO-150.png',
        desc: 'PicGo官方文档，介绍图片上传和管理功能',
        link: 'https://picgo.github.io/PicGo-Doc/'
      },
      {
        title: 'v2rayA',
        icon: 'https://logo.clearbit.com/v2raya.org',
        desc: 'v2rayA官方文档，介绍透明代理和路由功能',
        link: 'https://v2raya.org/'
      },
      {
        title: '哪吒监控',
        icon: 'https://nezha.wiki/logo.png',
        desc: '哪吒监控系统文档，介绍监控功能和配置',
        link: 'https://nezha.wiki/'
      },
      {
        title: '悟空百科',
        icon: 'https://logo.clearbit.com/didiboy0702.gitbook.io',
        desc: '悟空百科知识库，提供各种技术知识和教程',
        link: 'https://didiboy0702.gitbook.io/wukongdaily/'
      },
      {
        title: 'LX Music',
        icon: 'https://lxmusic.toside.cn/img/favicon.ico',
        desc: 'LX Music文档，介绍音乐播放器的使用',
        link: 'https://lxmusic.toside.cn/'
      },
      {
        title: 'AList文档',
        icon: 'https://logo.clearbit.com/alist.nn.ci',
        desc: 'AList官方文档，介绍文件列表和管理功能',
        link: 'https://alist.nn.ci/zh/'
      },
      {
        title: 'IPTVindex',
        icon: 'https://iptvindex.com/favicon.ico',
        desc: 'IPTVindex官方文档，介绍电视节目索引功能',
        link: 'https://iptvindex.com/'
      },
      {
        title: 'CS自学指南',
        icon: 'https://csdiy.wiki/images/favicon.ico',
        desc: 'CS自学指南，提供计算机科学学习资源',
        link: 'https://csdiy.wiki/'
      },
      {
        title: 'LinuxMirrors',
        icon: 'https://linuxmirrors.cn/assets/favicon.ico',
        desc: 'LinuxMirrors官方文档，介绍Linux镜像源',
        link: 'https://linuxmirrors.cn/'
      },
      {
        title: '软体考古学家',
        icon: 'https://blog.brachiosoft.com/favicon.ico',
        desc: '软体考古学家博客，分享软件考古知识',
        link: 'https://blog.brachiosoft.com/'
      },
      {
        title: '大数据知识体系',
        icon: 'https://www.sqlboy.tech/img/panda-waving.png',
        desc: '大数据知识体系文档，介绍大数据相关知识',
        link: 'https://www.sqlboy.tech/'
      },
      {
        title: '程序员做饭指南',
        icon: 'https://cook.aiursoft.cn/assets/images/favicon.png',
        desc: '程序员做饭指南，提供烹饪技巧和食谱',
        link: 'https://cook.aiursoft.cn/'
      },
      {
        title: 'PagerMaid-Pyro',
        icon: 'https://logo.clearbit.com/xtaolabs.com',
        desc: 'PagerMaid-Pyro官方文档，介绍Telegram机器人功能',
        link: 'https://xtaolabs.com/'
      },
      {
        title: 'Halo Documents',
        icon: 'https://logo.clearbit.com/docs.halo.run',
        desc: 'Halo官方文档，介绍博客系统使用和配置',
        link: 'https://docs.halo.run/'
      },
      {
        title: 'Free for Developers',
        icon: 'https://logo.clearbit.com/free-for.dev',
        desc: 'Free for Developers文档，提供开发者免费资源列表',
        link: 'https://free-for.dev/'
      },
      {
        title: 'vuepress-theme-vdoing',
        icon: 'https://doc.xugaoyi.com/img/favicon.ico',
        desc: 'vuepress-theme-vdoing文档，介绍VuePress主题使用',
        link: 'https://doc.xugaoyi.com/'
      },
      {
        title: '计算机教育中缺失的一课',
        icon: 'https://missing-semester-cn.github.io/favicon-32x32.png',
        desc: '计算机教育中缺失的一课，提供计算机科学补充教程',
        link: 'https://missing-semester-cn.github.io/'
      },
      {
        title: 'VitePress | 快速上手中文教程',
        icon: 'https://vitepress.yiov.top/logo.png',
        desc: 'VitePress快速上手中文教程，介绍静态站点生成器使用',
        link: 'https://vitepress.yiov.top/'
      }
    ]
  },
  {
    title: '其他',
    desc: '其他实用工具和资源',
    items: [
      {
        title: '微信文件传输',
        icon: 'https://filehelper.weixin.qq.com/public/favicon/app-icon5-192x192.png',
        desc: '微信文件传输助手网页版，支持手机与电脑之间的文件互传',
        link: 'https://filehelper.weixin.qq.com/'
      },
    ]
  },
];