import {
  AppBar as MUIAppBar,
  AppBarProps as MUIAppBarProps,
  Toolbar,
} from "@mui/material";
import React from "react";

// type AppBarProps = {
//   children?: React.ReactNode;
// };

interface AppBarProps extends MUIAppBarProps {}

export function AppBar({ children, ...rest }: AppBarProps) {
  return (
    <MUIAppBar position="fixed" elevation={0} {...rest}>
      <Toolbar disableGutters sx={{ pl: 2 }}>
        {children}
      </Toolbar>
    </MUIAppBar>
  );
}

export default AppBar;
