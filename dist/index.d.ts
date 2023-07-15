import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';
import { ThemeOptions } from '@mui/material/styles/createTheme';

interface PageProps {
    title?: string;
    children?: ReactNode;
}
declare const Page: ({ title, children }: PageProps) => react_jsx_runtime.JSX.Element;

type LayoutProps = {
    children?: React.ReactNode;
    sidebar?: JSX.Element;
    sidebarWidth?: number;
};
declare function Layout({ sidebar, children, sidebarWidth }: LayoutProps): react_jsx_runtime.JSX.Element;

type SidebarProps = {
    children?: React.ReactNode;
    width: number;
    logoElement?: JSX.Element;
};
declare function Sidebar({ children, logoElement, width }: SidebarProps): react_jsx_runtime.JSX.Element;

interface ThemeProps {
    children?: ReactNode;
}
declare function ThemeProvider({ children }: ThemeProps): react_jsx_runtime.JSX.Element;

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}
declare const themeConfig: ThemeOptions;

export { Layout, Page, Sidebar, ThemeProvider, themeConfig };
