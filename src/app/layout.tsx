import type { Metadata } from 'next';
import { Dongle, Gabarito, Inter, Sen } from 'next/font/google';
import './globals.css';
import SessionProvider from '../providers/SessionProvider';
import { getServerSession } from 'next-auth';
import MainLayout from './layouts/MainLayout';
import Login from './components/Login';

const inter = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NASI GORENG GILA 19',
  description: 'DASHBOARD POS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <body
        className={`${inter.className} light bg-sky-100 dark:bg-slate-900  relative`}
      >
        <SessionProvider session={session}>
          {session ? (
            <MainLayout session={session}>{children}</MainLayout>
          ) : (
            <Login></Login>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
