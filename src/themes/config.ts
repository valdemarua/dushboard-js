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
  typography: {
    fontSize: 13,
    h1: {
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "0",
      "@media (max-width:600px)": {
        fontSize: "1.875rem",
      },
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 600,
      letterSpacing: "0",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "-0.5px",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "-0.5px",
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "-0.25px",
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0px",
      color: "rgba(51, 51, 51, 0.6)",
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0px",
      color: "rgba(51, 51, 51, 0.4)",
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    button: {
      textTransform: "capitalize",
    },
  },
  shape: {
    borderRadius: 5,
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
    MuiInputBase: {
      defaultProps: {
        size: "small",
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },
  },
};
