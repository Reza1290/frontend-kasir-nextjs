import type { Metadata } from 'next';
import { Dongle, Gabarito, Inter, Sen } from 'next/font/google';
import './globals.css';

const inter = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cipta Kode',
  description: 'Buat Aplikasi Website Kamu di Cipta Kode',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
