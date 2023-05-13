"use client";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#40196D",
      light: '#53208d',
      dark: '#240e3d'
    },
    secondary: {
      main: "#3d3d3d",
      // light: "#FCFCFC",
      light: "#F3F4F6"
    }
    
  },
});
