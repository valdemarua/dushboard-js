import React from "react";
type LayoutProps = {
    children?: React.ReactNode;
    sidebar?: JSX.Element;
    appbar?: JSX.Element;
    sidebarWidth?: number;
};
export declare function Layout({ sidebar, appbar, children, sidebarWidth, }: LayoutProps): import("react/jsx-runtime").JSX.Element;
export default Layout;
