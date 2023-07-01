import { ThemeOptions } from "@mui/material/styles/createTheme";
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
}
export declare const themeConfig: ThemeOptions;
