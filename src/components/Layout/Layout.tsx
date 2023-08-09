import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
  sidebar?: JSX.Element;
  appbar?: JSX.Element;
  sidebarWidth?: number;
};

export function Layout({
  sidebar,
  appbar,
  children,
  sidebarWidth = 220,
}: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      {sidebar && sidebar}
      <Box sx={{ flex: 1 }}>
        {appbar && appbar}
        {appbar && <Toolbar />}
        <Box component="main">{children}</Box>
      </Box>
    </Box>
  );
}

export default Layout;
