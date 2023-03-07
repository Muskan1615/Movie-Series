import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import { Typography, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#39445A",
      contrastText: "white",
    },
  },
  typography: {
    h6: {
      fontFamily: "Merriweather, serif",
      fontWeight: 450,
      fontSize: 40,
      textAlign: "center",
      justifyContent: "center",
      textTransform: "uppercase",
      cursor: "pointer",
    },
  },
});

const MyHeader = styled("header")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
}));

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        maxWidth: "100%",
        whiteSpace: "nowrap",
      }}
    >
      <ThemeProvider theme={customTheme}>
        <MyHeader>
          <Typography variant="h6" onClick={() => {
            navigate('/');
            window.scroll(0, 0);
          }}>🎬 Entertainment Hub 🎥</Typography>
        </MyHeader>
      </ThemeProvider>
    </AppBar>
  );
}
