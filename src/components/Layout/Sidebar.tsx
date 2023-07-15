import { Drawer, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type SidebarProps = {
  children?: React.ReactNode;
  width: number;
  logoElement?: JSX.Element;
};

export function Sidebar({ children, logoElement, width }: SidebarProps) {
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
        <Toolbar>{logoElement}</Toolbar>
        <hr />
        {children}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
