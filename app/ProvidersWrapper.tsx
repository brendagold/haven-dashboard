"use client";

import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "./api/auth/[...nextauth]";
import { Session } from "next-auth";
import { headers } from "next/headers";
import { ReactElement } from "react";

// export const metadata: Metadata = {
//   title: 'Haven Real Estate',
//   description: 'Welcome to Haven, developed by Mary ',
// };

export default function ProvidersWrapper({
  children
}: {
  children: React.ReactNode;

}) {
  //const session = await getServerSession(authOptions);
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  );
}

