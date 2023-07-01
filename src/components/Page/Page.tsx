import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const Page = ({title, children}: PageProps) => {
  return <div><Typography variant="h2">{title}</Typography><div><Box>test</Box>{children}</div></div>
}

export default Page;
