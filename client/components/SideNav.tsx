"use client"
import React from "react";
import { Avatar, Box, Typography, Button, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import {
  ListOutlined,
  Logout,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  MenuRounded,
  Dashboard,
  AccountCircleOutlined,
  ChatBubbleOutline,
  PeopleAltOutlined,
  StarOutlineRounded,
  VillaOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const SideNav = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Sidebar
      style={{ height: "100%", top: "auto", border: "none" }}
      breakPoint="md"
      backgroundColor="#fff"
    >
      
<Box>
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            return {
              backgroundColor: active ? theme.palette.primary.main : undefined,
              color: active ? "#fff" : theme.palette.secondary.main,
              borderRadius: "10px",
              mx: 1,
              '&:hover': {
                background: active ? theme.palette.primary.light : '',
              }
            };
          },
        }}
      >
        <MenuItem active={pathname === "/"} component={<Link href="/" />} icon={<Dashboard />}>
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem active={pathname === "/properties"} component={<Link href="/properties" />} icon={<VillaOutlined />}>
          <Typography variant="body2">Property </Typography>
        </MenuItem>
        <MenuItem active={pathname === "/agents"} component={<Link href="/agents" />} icon={<PeopleAltOutlined />}>
          <Typography variant="body2">Agent </Typography>
        </MenuItem>
        <MenuItem active={pathname === "/reviews"} component={<Link href="/reviews" />} icon={<StarOutlineRounded />}>
          <Typography variant="body2">Reviews </Typography>
        </MenuItem>
        <MenuItem active={pathname === "/messages"} component={<Link href="/messages" />} icon={<ChatBubbleOutline />}>
          <Typography variant="body2">Message </Typography>
        </MenuItem>
        <MenuItem active={pathname === "/my-profile"} component={<Link href="/my-profile" />} icon={<AccountCircleOutlined />}>
          <Typography variant="body2">My Profile </Typography>
        </MenuItem>
      </Menu>
      <Button
            sx={{
              background: theme.palette.primary.main,
              color: 'primary.contrastText',
              textAlign: 'center',
              borderRadius: 0,
              borderTop: '1px solid #ffffff1a',
              '&:hover': {
                background: theme.palette.primary.light,
              },
            }}
            fullWidth
            size="large"
            onClick={() => broken ? toggleSidebar() : collapseSidebar()}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
          </Box>
    </Sidebar>
  );
};

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 1,
  },
};
