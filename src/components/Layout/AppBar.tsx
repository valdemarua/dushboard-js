import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
} from "@mui/material";
import React from "react";
import { SIDEBAR_WIDTH } from "../../constants";

interface AppBarProps extends MuiAppBarProps {}

export function AppBar({ children, ...rest }: AppBarProps) {
  return (
    <MuiAppBar
      position="fixed"
      elevation={0}
      sx={{
        ml: `${SIDEBAR_WIDTH}px`,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      }}
      {...rest}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          "& :only-child": { ml: "auto" },
        }}
      >
        {children}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
