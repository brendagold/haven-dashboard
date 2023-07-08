import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppHeader, SideNav } from "@/components";
import { useSession} from "next-auth/react";

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <>
        <AppHeader />
        <Box sx={styles.container}>
          <SideNav />
          <Box component={"main"} sx={styles.mainSection}>
            {children}
          </Box>
          <ToastContainer />
        </Box>
      </>
    );
  } 
};

/**
 * @type {import('@mui/material').SxProps}
 */

const styles = {
  container: {
    display: "flex",
    bgcolor: "secondary.light",
    height: "calc(100% - 64px)",
    minheight: "100vh",
  },
  mainSection: {
    p: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

// {status === "authenticated" && (
//     <>
//       <AppHeader />
//       <Box sx={styles.container}>
//         <SideNav />
//         <Box component={"main"} sx={styles.mainSection}>
//           {children}
//         </Box>
//       </Box>
//     </>
//   )}
