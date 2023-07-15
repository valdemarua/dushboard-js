import React from "react";
type LayoutProps = {
    children?: React.ReactNode;
    sidebar?: JSX.Element;
    sidebarWidth?: number;
};
export declare function Layout({ sidebar, children, sidebarWidth }: LayoutProps): import("react/jsx-runtime").JSX.Element;
export default Layout;
