import type { Metadata } from 'next';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Tell FA not to inject CSS twice — we import the stylesheet manually above.
config.autoAddCss = false;

export const metadata: Metadata = {
  title: '游戏从策划到开发的全流程 · Workflow',
  description: '一款游戏是如何被策划、验证、开发并最终上线的 —— 分阶段拆解。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
