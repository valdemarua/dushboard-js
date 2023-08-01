import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  return (
    <Box sx={{ p: 2 }}>
      {title && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h2">{title}</Typography>
        </Box>
      )}
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default Page;
