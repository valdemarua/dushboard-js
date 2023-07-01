import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { ThemeOptions } from '@mui/material/styles/createTheme';

interface PageProps {
    title?: string;
    children?: ReactNode;
}
declare const Page: ({ title, children }: PageProps) => react_jsx_runtime.JSX.Element;

interface ThemeProps {
    children?: ReactNode;
}
declare function ThemeProvider({ children }: ThemeProps): react_jsx_runtime.JSX.Element;

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
}
declare const themeConfig: ThemeOptions;

export { Page, ThemeProvider, themeConfig };
