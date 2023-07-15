import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children?: React.ReactNode;
  sidebarElement?: React.ReactNode;
};

export function Layout({ sidebarElement, children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      {sidebarElement}
      <Box>
        <AppBar position="fixed" elevation={0}>
          <Toolbar disableGutters sx={{ pl: 2 }}>
            <Box>asdf@asedf.com</Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Box component="main" sx={{ paddingTop: "64px" }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
