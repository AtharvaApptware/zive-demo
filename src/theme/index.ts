import { createTheme } from "@mui/material/styles";


declare module '@mui/material/styles' {
  interface Palette {
    danger: Palette['primary'];
    ghost: Palette['primary'];
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    danger?: PaletteOptions['primary'];
    ghost?: PaletteOptions['primary'];
  }
}

const lightTheme = createTheme({
  shape: {
    borderRadius: 6,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#0A3C5F",
      contrastText: "#F7F7FA",
    },
    secondary: {
      main: "#FF5015",
    },
    error: {
      main: "#F02B3B",
    },
  },
  typography: {
    fontFamily: "OpenSans",
  },
  spacing: 8,
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: "#F9FAFB",
          ":hover": {
            ":before": {
              borderColor: "#0A3C5F",
            },
          },
        },
      },
    },
  },
});

export { lightTheme };
