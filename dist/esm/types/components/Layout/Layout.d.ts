import React from "react";
type LayoutProps = {
    children?: React.ReactNode;
    sidebar?: React.ReactNode;
    sidebarWidth?: number;
};
export declare function Layout({ sidebar, children, sidebarWidth }: LayoutProps): import("react/jsx-runtime").JSX.Element;
export default Layout;
