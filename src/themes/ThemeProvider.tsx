import {ReactNode} from "react"
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import {themeConfig} from "./config"

interface ThemeProps {
  children?: ReactNode;
}

export default function ThemeProvider({children}: ThemeProps) {
  return (
      <MUIThemeProvider theme={themeConfig}>{children}</MUIThemeProvider>
      )
}
