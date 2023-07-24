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
    appbar?: JSX.Element;
    sidebarWidth?: number;
};
declare function Layout({ sidebar, appbar, children, sidebarWidth, }: LayoutProps): react_jsx_runtime.JSX.Element;

type SidebarProps = {
    children?: React.ReactNode;
    width?: number;
    logo?: JSX.Element;
};
declare function Sidebar({ children, logo, width }: SidebarProps): react_jsx_runtime.JSX.Element;

type AppBarProps = {
    children?: React.ReactNode;
};
declare function AppBar({ children, ...rest }: AppBarProps): react_jsx_runtime.JSX.Element;

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

export { AppBar, Layout, Page, Sidebar, ThemeProvider, themeConfig };
