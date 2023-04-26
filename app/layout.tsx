"use client";
import './globals.css'
import {Box, ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from './theme/themes';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import Head from 'next/head'
import {AppHeader, SideNav} from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Haven Real Estate</title>
        <meta name="description" content="Developed by Chukwuma Mary" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ThemeProvider theme={darkTheme}>
      <ProSidebarProvider>
        <CssBaseline />
      <body id="__next">
      <AppHeader />
      <Box sx={styles.container}>
        <SideNav />
      <Box component={'main'} sx={styles.mainSection}>
        {children}
      </Box>
      </Box>
        
        </body>
      </ProSidebarProvider>
      </ThemeProvider>
    </html>
  )
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'secondary.light',
    height: 'calc(100% - 64px)',
    minheight: '100vh'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  
}
