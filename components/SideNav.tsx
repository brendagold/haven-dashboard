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

const SideNav = () => {
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Sidebar
      style={{ height: "100%", top: "auto" }}
      breakPoint="md"
      backgroundColor="#fff"
    >
      

      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            return {
              backgroundColor: active ? "#fcfcfc" : undefined,
            };
          },
        }}
      >
        <MenuItem icon={<Dashboard />}>
          <Typography variant="body2">Dashboard</Typography>{" "}
        </MenuItem>
        <MenuItem icon={<VillaOutlined />}>
          <Typography variant="body2">Property </Typography>
        </MenuItem>
        <MenuItem icon={<PeopleAltOutlined />}>
          <Typography variant="body2">Agent </Typography>
        </MenuItem>
        <MenuItem icon={<StarOutlineRounded />}>
          <Typography variant="body2">Reviews </Typography>
        </MenuItem>
        <MenuItem icon={<ChatBubbleOutline />}>
          <Typography variant="body2">Message </Typography>
        </MenuItem>
        <MenuItem icon={<AccountCircleOutlined />}>
          <Typography variant="body2">My Profile </Typography>
        </MenuItem>
      </Menu>
      <Button
            sx={{
              background: '#475BE8',
              color: 'primary.contrastText',
              textAlign: 'center',
              borderRadius: 0,
              borderTop: '1px solid #ffffff1a',
              '&:hover': {
                background: '#1e36e8',
              },
            }}
            fullWidth
            size="large"
            onClick={() => broken ? toggleSidebar() : collapseSidebar()}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
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
