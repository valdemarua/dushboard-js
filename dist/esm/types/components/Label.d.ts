type LabelProps = {
    label: string;
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";
};
declare const Label: ({ label, color }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
