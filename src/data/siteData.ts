import {
  Boxes,
  Crown,
  FileText,
  Grid2X2,
  Layers3,
  MonitorPlay,
  PackageSearch,
  Route,
  Settings,
  Tag,
  UsersRound,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CompanyInfo = {
  nameCn: string;
  nameEn: string;
  logo: string;
  taxId: string;
  phone: string;
  email: string;
  addressCn: string;
  addressEn: string;
  icp: string;
};

export type NavItem = {
  label: string;
  href: string;
  type: "anchor" | "route";
};

export type HeroContent = {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
  highlights: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
};

export type BusinessItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  note?: string;
};

export type PlatformItem = {
  name: string;
};

export type AdvantageItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EarbudsEntry = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  sellingPoints: string[];
  action: {
    label: string;
    href: string;
  };
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SiteData = {
  company: CompanyInfo;
  nav: NavItem[];
  home: {
    hero: HeroContent;
    about: AboutContent;
    business: BusinessItem[];
    platforms: PlatformItem[];
    advantages: AdvantageItem[];
    earbudsEntry: EarbudsEntry;
  };
  footer: {
    links: FooterLink[];
  };
};

export const siteData: SiteData = {
  company: {
    nameCn: "深圳市皓承智能设备有限公司",
    nameEn: "Shenzhen Haocheng Intelligent Equipment Company Limited",
    logo: "/images/logo.png",
    taxId: "91440300MA5HH9834X",
    phone: "13534052763",
    email: "info@haochengholdings.com",
    addressCn:
      "深圳市龙华区大浪街道龙平社区腾龙路淘金地电子商务孵化基地展滔商业广场B座516",
    addressEn:
      "516 B ZHANTAO COMMERCIAL PLAZA TENGLONG ROAD DALANG STREET LONGHUA DISTRICT SHENZHEN CHN",
    icp: "ICP备案号占位",
  },
  nav: [
    { label: "首页", href: "#home", type: "anchor" },
    { label: "关于我们", href: "#about", type: "anchor" },
    { label: "核心业务", href: "#business", type: "anchor" },
    { label: "平台矩阵", href: "#platform", type: "anchor" },
    { label: "蓝牙耳机", href: "/earbuds", type: "route" },
    { label: "联系我们", href: "#contact", type: "anchor" },
  ],
  home: {
    hero: {
      title: "专注 3C 数码与内容电商增长",
      subtitle: "品牌代理 × 直播电商运营 × 主播孵化 × 多平台渠道运营",
      description:
        "我们整合优质品牌、内容创作与多平台流量资源，以专业的电商运营能力与精细化执行，助力品牌实现内容营销与电商销售的高效增长。",
      image: {
        src: "/images/hero-earbuds.jpg",
        alt: "宾利伯爵耳机首屏视觉图",
      },
      primaryAction: {
        label: "了解业务",
        href: "#business",
      },
      secondaryAction: {
        label: "查看蓝牙耳机",
        href: "/earbuds",
      },
    },
    about: {
      title: "关于皓承智能设备",
      paragraphs: [
        "深圳市皓承智能设备有限公司是一家专注于 3C 数码与内容电商领域的综合服务商，核心聚焦品牌代理、直播电商运营、主播孵化与多平台渠道运营，为品牌在内容电商生态中实现持续增长提供系统化解决方案。",
        "公司以消费者需求与内容趋势为导向，围绕“选品—内容—流量—转化—复盘”的完整链路，整合品牌资源、平台渠道与直播运营能力，帮助品牌提升曝光、转化与长期经营效率。",
        "公司秉承以长期价值为目标，持续深耕高潜力赛道与品牌源，以专业团队与精细化运营能力，为品牌合作伙伴创造可持续的生意增长。",
      ],
      highlights: [
        {
          title: "3C 数码深耕",
          description: "聚焦 3C 数码品类资源，持续沉淀选品与内容运营能力。",
          icon: Boxes,
        },
        {
          title: "直播电商运营",
          description: "围绕直播间搭建、流量承接、运营策略与复盘优化展开。",
          icon: MonitorPlay,
        },
        {
          title: "多平台渠道布局",
          description: "覆盖主流内容与电商平台，放大品牌影响力与销量承接能力。",
          icon: Route,
        },
        {
          title: "内容转化与复盘",
          description: "内容创作与结果复盘结合，持续提升转化效率。",
          icon: FileText,
        },
      ],
    },
    business: [
      {
        title: "3C 品牌代理",
        description:
          "与多家 3C 数码及音频品牌深度合作，提供品牌代理、渠道拓展与市场增长服务。",
        icon: Tag,
        note: "以宾利伯爵耳机、魔声耳机为核心产品，耳机月销量稳定在 5 万台以上。",
      },
      {
        title: "直播电商运营",
        description:
          "提供直播间策划、脚本设计、主播排班、场控执行、数据复盘等运营服务，打造高效转化的直播场景。",
        icon: Video,
      },
      {
        title: "主播孵化陪跑",
        description:
          "从选拔、培训到实战陪跑，帮助主播提升表达能力、产品理解力与直播转化能力。",
        icon: UsersRound,
      },
      {
        title: "多平台渠道运营",
        description:
          "覆盖抖音、淘宝、天猫、京东、拼多多、小红书、快手、视频号等平台，构建多平台协同增长体系。",
        icon: Grid2X2,
      },
    ],
    platforms: [
      { name: "抖音" },
      { name: "淘宝" },
      { name: "天猫" },
      { name: "京东" },
      { name: "拼多多" },
      { name: "小红书" },
      { name: "快手" },
      { name: "视频号" },
    ],
    advantages: [
      {
        title: "内容与渠道协同",
        description: "内容创作与渠道运营紧密联动，放大品牌增长效率。",
        icon: Layers3,
      },
      {
        title: "从选品到转化的一体化服务",
        description: "覆盖选品、内容、投放、直播及售后一体化服务体系。",
        icon: Crown,
      },
      {
        title: "更聚焦 3C 数码品类",
        description: "深耕 3C 数码，具备专业选品与运营能力，提升产品竞争力。",
        icon: PackageSearch,
      },
      {
        title: "长期运营能力",
        description: "精细化数据驱动与运营优化，实现可持续增长。",
        icon: Settings,
      },
    ],
    earbudsEntry: {
      name: "宾利伯爵耳机",
      description: "低延迟 · 清晰通话 · 舒适佩戴 · 稳定连接",
      image: {
        src: "/images/product-banner.png",
        alt: "宾利伯爵耳机产品横幅",
      },
      sellingPoints: ["低延迟", "清晰通话", "舒适佩戴", "稳定连接"],
      action: {
        label: "查看产品详情",
        href: "/earbuds",
      },
    },
  },
  footer: {
    links: [
      { label: "隐私政策", href: "#" },
      { label: "用户协议", href: "#" },
      { label: "下载说明", href: "#" },
      { label: "账号注销说明", href: "#" },
    ],
  },
};
