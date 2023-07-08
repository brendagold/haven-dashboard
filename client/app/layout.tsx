"use client";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "./theme/themes";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
} from "react-pro-sidebar";
import { Metadata } from "next";
import { AppHeader, SideNav } from "@/components";
import ProvidersWrapper from "./ProvidersWrapper";
import { useSession, signIn, signOut } from "next-auth/react";
import { LayoutContent } from "./layoutContent";
// export const metadata: Metadata = {
//   title: 'Haven Real Estate',
//   description: 'Welcome to Haven, developed by Mary ',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <ProSidebarProvider>
          <CssBaseline />
          <body id="__next">
            <ProvidersWrapper>
              <LayoutContent>{children}</LayoutContent>
              <ToastContainer />
              {/* <Login /> */}
            </ProvidersWrapper>
          </body>
        </ProSidebarProvider>
      </ThemeProvider>
    </html>
  );
}
