import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const Page = ({title, children}: PageProps) => {
  return <><Typography variant="h2">{title}</Typography><Box>{children}</Box></>
}

export default Page;
