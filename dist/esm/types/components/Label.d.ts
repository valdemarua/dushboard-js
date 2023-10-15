type LabelProps = {
    label: string;
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";
    size?: "small" | "medium" | "large";
};
declare const Label: ({ label, color, size }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
