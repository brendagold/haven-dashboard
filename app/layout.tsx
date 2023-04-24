"use client";
import './globals.css'
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from './theme/themes';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
      <ProSidebarProvider>
        <CssBaseline />
      <body id="__next">{children}</body>
      </ProSidebarProvider>
      </ThemeProvider>
    </html>
  )
}
