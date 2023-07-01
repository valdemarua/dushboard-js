import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const Page = ({title, children}: PageProps) => {
  return <><div>{title}</div><div>{children}</div></>
}

export default Page;
