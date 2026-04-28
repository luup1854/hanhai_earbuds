import {
  Bot,
  BrainCircuit,
  Clock3,
  Headphones,
  Languages,
  Mic2,
  Search,
  ShieldCheck,
  Sparkles,
  Volume2,
  Wifi,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type CarouselImage = {
  src: string
  alt: string
}

export type EarbudsHighlight = {
  title: string
  description: string
  icon: LucideIcon
}

export type ProductSection = {
  eyebrow: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  tags: string[]
  reverse?: boolean
}

export type ProductSpec = {
  label: string
  value: string
}

export const earbudsData = {
  name: '宾利伯爵耳机',
  carouselImages: [
    { src: '/images/earbuds/轮播图1.jpg', alt: '宾利伯爵耳机轮播图 1' },
    { src: '/images/earbuds/轮播图2.jpg', alt: '宾利伯爵耳机轮播图 2' },
    { src: '/images/earbuds/轮播图3.jpg', alt: '宾利伯爵耳机轮播图 3' },
    { src: '/images/earbuds/轮播图4.jpg', alt: '宾利伯爵耳机轮播图 4' },
    { src: '/images/earbuds/轮播图5.jpg', alt: '宾利伯爵耳机轮播图 5' },
  ] satisfies CarouselImage[],
  highlights: [
    {
      title: '耳夹式设计',
      description: '创新开放式耳夹结构，轻盈贴合耳廓，长时间佩戴更舒适。',
      icon: Headphones,
    },
    {
      title: '云端 AI 升级',
      description: '内置智能语音能力，支持 AI 对话、AI 速记、AI 翻译、AI 搜索等场景。',
      icon: Bot,
    },
    {
      title: '影院级音效',
      description: '搭配高保真发声单元，呈现更清晰、更有层次的聆听体验。',
      icon: Volume2,
    },
    {
      title: '稳定蓝牙连接',
      description: '蓝牙 V6.0 连接方案，提升连接稳定性与抗干扰能力。',
      icon: Wifi,
    },
  ] satisfies EarbudsHighlight[],
  aiFeatures: [
    { label: 'AI 对话', icon: BrainCircuit },
    { label: 'AI 速记', icon: Mic2 },
    { label: 'AI 翻译', icon: Languages },
    { label: 'AI 搜索', icon: Search },
  ],
  productSections: [
    {
      eyebrow: 'AI FUNCTION',
      title: '云端大模型原声AI升级',
      description: '内置AI，实时语音助手与无缝跨语言沟通。是专属于您的听觉智能伙伴。',
      image: {
        src: '/images/earbuds/云端大模型原声AI升级.png',
        alt: '云端大模型原声AI升级功能展示',
      },
      tags: ['AI 对话', 'AI 速记', 'AI 翻译', 'AI 搜索'],
    },
    {
      eyebrow: 'FASHION FIT',
      title: '时尚感轻松拿捏是耳机,更是潮流耳饰',
      description: '创新来式计以流光彩育机，更是日常穿搭时尚配饰，升级您的出街LOOK。',
      image: {
        src: '/images/earbuds/时尚感轻松拿捏.png',
        alt: '时尚感轻松拿捏佩戴展示',
      },
      tags: ['轻盈佩戴', '耳夹结构', '出街穿搭', '日常通勤'],
      reverse: true,
    },
    {
      eyebrow: 'ACOUSTIC QUALITY',
      title: '石墨烯喇叭影院级音效',
      description: '高保真扬声器,多动圈全频解析,降低声波共振,音质更清晰',
      image: {
        src: '/images/earbuds/石墨烯喇叭.png',
        alt: '石墨烯喇叭影院级音效展示',
      },
      tags: ['高保真音质', '多频解析', '清晰人声', '沉浸聆听'],
    },
    {
      eyebrow: 'BLUETOOTH V6.0',
      title: '蓝牙 V6.0，稳定连接强抗干扰',
      description: '搭载蓝牙V6.0技术，传输速度更快，抗干扰能力更强复杂场景下也能保持稳定连接。',
      image: {
        src: '/images/earbuds/蓝牙V6.0.png',
        alt: '蓝牙 V6.0 稳定连接展示',
      },
      tags: ['快速配对', '低延迟', '长续航', '低功耗'],
      reverse: true,
    },
  ] satisfies ProductSection[],
  specs: [
    { label: '产品类型', value: '蓝牙耳机' },
    { label: '佩戴方式', value: '耳夹式' },
    { label: '连接方式', value: '蓝牙连接' },
    { label: '蓝牙版本', value: 'V6.0' },
    { label: '功能特点', value: 'AI 交互 / 清晰通话 / 便携充电' },
    { label: '颜色', value: '黑色 / 银色' },
    { label: '续航时间', value: '待确认' },
    { label: '充电接口', value: '待确认' },
    { label: '防水等级', value: '待确认' },
    { label: '适用场景', value: '通勤、办公、运动、直播、学习' },
  ] satisfies ProductSpec[],
  appEntry: {
    title: '探索更多精彩，开启智能聆听新体验',
    description: '配套 APP 下载入口即将开放，更多 AI 功能与产品服务将持续更新。',
    image: {
      src: '/images/earbuds/底部.png',
      alt: '宾利伯爵耳机底部产品展示',
    },
    actionLabel: '了解更多 / 点击下载',
    actionHref: '#',
    icon: Sparkles,
  },
  quickPoints: [
    { label: '低延迟', icon: Clock3 },
    { label: '稳定连接', icon: ShieldCheck },
    { label: 'AI 交互', icon: BrainCircuit },
    { label: '便携充电', icon: Zap },
  ],
} as const
