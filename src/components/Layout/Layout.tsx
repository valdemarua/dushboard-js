import {
  AppBar,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Sidebar } from "./Sidebar";

const drawerWidth = 220;

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `{drawerWidth}px` }}
        >
          <Toolbar disableGutters sx={{ pl: 2 }}>
            <Box>asdf@asedf.com</Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
