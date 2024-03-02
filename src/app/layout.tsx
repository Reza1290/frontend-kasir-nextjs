import type { Metadata } from 'next';
import { Dongle, Gabarito, Inter, Sen } from 'next/font/google';
import './globals.css';
import SessionProvider from '@/providers/SessionProvider';
import { getServerSession } from 'next-auth';

const inter = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cipta Kode',
  description: 'Buat Aplikasi Website Kamu di Cipta Kode',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
