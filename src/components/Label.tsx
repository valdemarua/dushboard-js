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
  const styles: { py: number; fontSize?: number } = { py: 0.25 };

  if (size === "small") {
    styles.py = 0.25;
    styles.fontSize = 12;
  }

  if (size === "large") {
    styles.py = 0.5;
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
        textAlign: "center",
        px: 1,
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
