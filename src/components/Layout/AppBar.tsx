import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
} from "@mui/material";
import React from "react";
import { SIDEBAR_WIDTH } from "../../constants";

// type AppBarProps = {
//   children?: React.ReactNode;
// };

interface AppBarProps extends MuiAppBarProps {}

export function AppBar({ children, ...rest }: AppBarProps) {
  return (
    <MuiAppBar
      position="fixed"
      elevation={0}
      sx={{
        ml: SIDEBAR_WIDTH,
        width: `calc(100% - ${SIDEBAR_WIDTH})`,
      }}
      {...rest}
    >
      <Toolbar disableGutters sx={{ pl: 2 }}>
        {children}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
