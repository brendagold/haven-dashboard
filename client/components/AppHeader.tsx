import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box
} from "@mui/material";
import { haven, logo } from "../assets/index";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import { useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import CustomButton from "./common/CustomButton";

const AppHeader = () => {
  const {data: session} = useSession()
  const user = session?.user
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
console.log(user)
  //     const { data: user } = useGetIdentity();
  //   const showUserInfo = user && (user.name || user.avatar);
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: "#fff" }}
    >
      <Toolbar>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
        <IconButton
          component={Link}
          href="/"
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, "&:hover": { backgroundColor: "inherit" } }}
        >
          {collapsed ? (
            <Image src={logo} alt="Haven" width={28} />
          ) : (
            <Image src={haven} alt="Haven" width={140} />
          )}
        </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => broken ? toggleSidebar() : collapseSidebar()}
              
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
           
          </Box>

        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* <IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton> */}

          <Stack
            direction="row"
            gap="12px"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton title="Notifications">
              <Badge
                variant="dot"
                overlap="circular"
                badgeContent=" "
                color="error"
              >
                <NotificationsOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Avatar src={user?.image} alt={user?.name} />

            <Stack direction="column" sx={{ display: { xs: 'none', md: 'flex' }}}>
              <Typography
                sx={{ fontSize: 14, fontWeight: 600, color: "#11142D" }}
              >
                {user?.name}
              </Typography>
              <Typography sx={{ fontSize: 12, color: "#808191" }}>
                {user?.email}
              </Typography>
            </Stack>
            <CustomButton
          title='Sign Out'
          backgroundColor="#53208D"
          color="#FCFCFC"
          handleClick={() => signOut()}
        />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
