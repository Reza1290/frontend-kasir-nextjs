// 'use client';

// import React from 'react';
// import { SessionProvider } from 'next-auth/react';
// import { getServerSession } from 'next-auth';

// type sessionProps = {
//   children: React.ReactNode;
// };
// async function NextAuthSessionProvider({ children }: sessionProps) {
//   const session = await getServerSession();
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// }

// export default NextAuthSessionProvider;

'use client';

import { SessionProvider } from 'next-auth/react'

export default SessionProvider
