import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cmb-xiaotiancai-case.wwenyu06.chatgpt.site'),
  title: '招商银行 × 小天才｜新客礼遇小程序设计',
  description: '招商银行与中国电信联名新客活动小程序 UI/UX 设计案例。',
  openGraph: {
    title: '招商银行 × 小天才｜新客礼遇小程序设计',
    description: '从活动曝光、资格申领到订单履约，构建完整的新客转化体验。',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: '招商银行 × 小天才 新客礼遇小程序设计' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '招商银行 × 小天才｜新客礼遇小程序设计',
    description: '从活动曝光、资格申领到订单履约，构建完整的新客转化体验。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
