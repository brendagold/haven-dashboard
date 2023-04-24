import React from 'react'
import {
    AppBar,
    Avatar,
    Stack,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Button
  } from '@mui/material';
import {yariga, logo} from '../assets/index'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Image from 'next/image'
import {useProSidebar } from "react-pro-sidebar";
import Link from 'next/link';

const AppHeader = () => {
//     const { data: user } = useGetIdentity();
//   const showUserInfo = user && (user.name || user.avatar);
const { collapsed } = useProSidebar();
  return (
    <AppBar color="default" position="sticky" elevation={0} sx={{ background: '#FCFCFC' }}>
      <Toolbar> 
      <IconButton
      component={Link} href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, "&:hover": { backgroundColor: "inherit" } }}
          >
           {collapsed ? (
          <Image src={logo} alt="Haven" width={28} />
        ) : (
          <Image src={yariga} alt="Haven" width={140} />
        )}
          </IconButton>
          {/* <Button fullWidth variant="text" disableRipple sx={{ mr: 2, "&:hover": { backgroundColor: "inherit" } }}>
      <Link href="/">
        {collapsed ? (
          <Image src={logo} alt="Yariga" width={28} />
        ) : (
          <Image src={yariga} alt="Yariga" width={140} />
        )}
      </Link>
    </Button> */}
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
         
            <Stack direction="row" gap="12px" alignItems="center" justifyContent="center">
            <IconButton title="Notifications">
                <Badge variant='dot' overlap="circular" badgeContent=" " color="error">
                    <NotificationsOutlinedIcon fontSize="large" />
                </Badge>
            </IconButton>
              <Avatar src='/static/images/avatar/2.jpg' alt='brenda' />

                <Stack direction="column">
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#11142D' }}>Brenda</Typography>
                  <Typography sx={{ fontSize: 12, color: '#808191' }}>brenda@gmail.com</Typography>
                </Stack>
             
            </Stack>
       
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader