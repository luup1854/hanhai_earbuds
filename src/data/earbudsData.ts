import {
  Bot,
  BrainCircuit,
  Headphones,
  Languages,
  Mic2,
  Search,
  ShieldCheck,
  Volume2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CarouselImage = {
  src: string;
  alt: string;
};

export type EarbudsHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductSection = {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  tags: string[];
  reverse?: boolean;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export const earbudsData = {
  name: "DOSS蓝牙耳机",
  carouselImages: [
    { src: "/images/earbuds/轮播图1.webp", alt: "DOSS蓝牙耳机轮播图 1" },
    { src: "/images/earbuds/轮播图2.webp", alt: "DOSS蓝牙耳机轮播图 2" },
    { src: "/images/earbuds/轮播图3.webp", alt: "DOSS蓝牙耳机轮播图 3" },
    { src: "/images/earbuds/轮播图4.webp", alt: "DOSS蓝牙耳机轮播图 4" },
    { src: "/images/earbuds/轮播图5.webp", alt: "DOSS蓝牙耳机轮播图 5" },
  ] satisfies CarouselImage[],
  highlights: [
    {
      title: "耳夹式设计",
      description: "创新开放式耳夹结构，轻盈贴合耳廓，长时间佩戴更舒适。",
      icon: Headphones,
    },
    {
      title: "云端 AI 升级",
      description:
        "内置智能语音能力，支持 AI 对话、AI 速记、AI 翻译、AI 搜索等场景。",
      icon: Bot,
    },
    {
      title: "影院级音效",
      description: "搭配高保真发声单元，呈现更清晰、更有层次的聆听体验。",
      icon: Volume2,
    },
    {
      title: "AI 实时翻译",
      description: "支持跨语言语音翻译场景，沟通交流更轻松，适合出行、学习与商务沟通。",
      icon: Languages,
    },
  ] satisfies EarbudsHighlight[],
  aiFeatures: [
    { label: "AI 对话", icon: BrainCircuit },
    { label: "AI 速记", icon: Mic2 },
    { label: "AI 翻译", icon: Languages },
    { label: "AI 搜索", icon: Search },
  ],
  productSections: [
    {
      eyebrow: "AI FUNCTION",
      title: "云端大模型，原声AI升级",
      description:
        "内置AI，实时语音助手与无缝跨语言沟通。是专属于您的听觉智能伙伴。",
      image: {
        src: "/images/earbuds/云端大模型原声AI升级.webp",
        alt: "云端大模型原声AI升级功能展示",
      },
      tags: ["AI 对话", "AI 速记", "AI 翻译", "AI 搜索"],
    },
    {
      eyebrow: "FASHION FIT",
      title: "时尚感轻松拿捏，是耳机，更是潮流耳饰",
      description:
        "创新耳夹式设计，以流光配色与轻盈材质融合，不只是蓝牙耳机，更是日常穿搭时尚配饰，升级您的出街 LOOK。",
      image: {
        src: "/images/earbuds/时尚感轻松拿捏.webp",
        alt: "时尚感轻松拿捏佩戴展示",
      },
      tags: ["轻盈佩戴", "耳夹结构", "出街穿搭", "日常通勤"],
      reverse: true,
    },
    {
      eyebrow: "ACOUSTIC QUALITY",
      title: "石墨烯喇叭，影院级音效",
      description: "高保真扬声器，多动圈全频解析，降低声波共振，音质更清晰。",
      image: {
        src: "/images/earbuds/石墨烯喇叭.webp",
        alt: "石墨烯喇叭影院级音效展示",
      },
      tags: ["高保真音质", "多频解析", "清晰人声", "沉浸聆听"],
    },
    {
      eyebrow: "BLUETOOTH V6.0",
      title: "蓝牙 V6.0，稳定连接强抗干扰",
      description:
        "搭载蓝牙V6.0技术，传输速度更快，抗干扰能力更强复杂场景下也能保持稳定连接。",
      image: {
        src: "/images/earbuds/蓝牙V6.0.webp",
        alt: "蓝牙 V6.0 稳定连接展示",
      },
      tags: ["快速配对", "低延迟", "长续航", "低功耗"],
      reverse: true,
    },
  ] satisfies ProductSection[],
  specs: [
    { label: "产品名称", value: "DOSS蓝牙耳机" },
    { label: "产品型号", value: "BentleyB60" },
    { label: "颜色", value: "沉稳黑、星光银、樱花粉、活力橙" },
    { label: "材质", value: "金属+皮革" },
    { label: "重量", value: "≈82g" },
    { label: "蓝牙版本", value: "V6.0" },
    { label: "通讯距离", value: "≈10m（无障碍空旷环境）" },
    { label: "适用", value: "具有蓝牙功能的播放设备" },
    { label: "耳机电池容量", value: "3.7V/40mAh" },
    { label: "充电仓电池容量", value: "3.7V/400mAh" },
    { label: "耳机充电时间", value: "约1.5小时" },
    { label: "充电接口", value: "Type-C" },
    { label: "频响范围", value: "20Hz-10kHz" },
    { label: "喇叭曲线灵敏度", value: "113 ±3dB（At 1KHz）" },
  ] satisfies ProductSpec[],
  specNote: "外观尺寸约 81mm × 30mm × 40mm；以上参数为手工测量，3-5mm 误差属正常现象。",
  appEntry: {
    title: "探索更多精彩，开启智能聆听新体验",
    description: "",
    image: {
      src: "/images/earbuds/底部.webp",
      alt: "DOSS蓝牙耳机底部产品展示",
    },
    actionLabel: "了解更多 / 点击下载",
    actionHref: "#",
  },
  quickPoints: [
    { label: "AI 翻译", icon: Languages },
    { label: "AI 速记", icon: Mic2 },
    { label: "高清音质", icon: Volume2 },
    { label: "稳定连接", icon: ShieldCheck },
  ],
} as const;
