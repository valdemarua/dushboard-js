import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";

type LayoutProps = {
  children?: React.ReactNode;
  sidebar?: JSX.Element;
  sidebarWidth?: number;
};

export function Layout({ sidebar, children, sidebarWidth = 220 }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      {sidebar && sidebar}
      <Box>
        <AppBar
          position="fixed"
          elevation={0}
          style={{ marginLeft: sidebarWidth }}
        >
          <Toolbar disableGutters sx={{ pl: 2 }}>
            <Box>asdf@asedf.com</Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ paddingTop: "64px" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
