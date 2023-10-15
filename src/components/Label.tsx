import { Box, lighten } from "@mui/material";

type LabelProps = {
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "error"
    | "grey";
};

const Label = ({ label, color = "grey" }: LabelProps) => {
  const textColor = () => {
    return color === "grey"
      ? (theme: any) => theme.palette.grey
      : (theme: any) => theme.palette[color].main;
  };

  const bgColor = () => {
    return color === "grey"
      ? (theme: any) => theme.palette.grey[100]
      : (theme: any) => lighten(theme.palette[color].main, 0.9);
  };

  return (
    <Box
      component="span"
      sx={{
        textAlign: "center",
        px: 1,
        py: 0.5,
        borderRadius: 1,
        textTransform: "capitalize",
        color: textColor(),
        bgcolor: bgColor(),
      }}
    >
      {label}
    </Box>
  );
};

export default Label;
