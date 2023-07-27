import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  return (
    <Box sx={{ p: 2 }}>
      {title && <Typography variant="h2">{title}</Typography>}
      <div>{children}</div>
    </Box>
  );
};

export default Page;
