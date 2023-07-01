import React, { ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { themeConfig } from "./config";

interface ThemeProps {
  children?: ReactNode;
}

const theme = createTheme(themeConfig);

export default function ThemeProvider({ children }: ThemeProps) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
