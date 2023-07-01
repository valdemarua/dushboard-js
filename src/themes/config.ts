import { blue, green } from "@mui/material/colors";
import { ThemeOptions } from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const themeConfig: ThemeOptions = {
  palette: {
    primary: blue,
    secondary: green,
  },
  // typography: {
  //   fontSize: 15,
  //   h3: {
  //     fontSize: "1.20rem",
  //     fontWeight: 500,
  //     marginTop: "1rem",
  //     marginBottom: "1rem",
  //   },
  // },
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          ":hover, :focus": {
            boxShadow: "none",
          },
        },
      },
    },
  },
};
