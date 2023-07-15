import { Drawer, Toolbar, Box } from "@mui/material";
import React from "react";

type SidebarProps = {
  children?: React.ReactNode;
  width?: number;
  logo?: JSX.Element;
};

export function Sidebar({ children, logo, width = 220 }: SidebarProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        open={true}
        variant="persistent"
        sx={{
          width: width,
          "& .MuiDrawer-paper": { width: width },
        }}
      >
        {logo && <Toolbar>{logo}</Toolbar>}
        {children}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
