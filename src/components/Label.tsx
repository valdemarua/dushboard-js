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
  size?: "small" | "medium" | "large";
};

const Label = ({ label, color = "grey", size = "medium" }: LabelProps) => {
  const styles: { px: number; fontSize?: number; height?: number } = {
    px: 1.25,
    height: 24,
  };

  if (size === "small") {
    styles.px = 1;
    styles.fontSize = 12;
  }

  if (size === "large") {
    styles.px = 1.5;
    styles.height = 32;
  }

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
        ...styles,
        display: "inline-flex",
        alignItems: "center",
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
