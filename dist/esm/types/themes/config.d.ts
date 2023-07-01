declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}
export declare const themeConfig: {
    palette: {
        primary: {
            50: "#e3f2fd";
            100: "#bbdefb";
            200: "#90caf9";
            300: "#64b5f6";
            400: "#42a5f5";
            500: "#2196f3";
            600: "#1e88e5";
            700: "#1976d2";
            800: "#1565c0";
            900: "#0d47a1";
            A100: "#82b1ff";
            A200: "#448aff";
            A400: "#2979ff";
            A700: "#2962ff";
        };
        secondary: {
            50: "#e8f5e9";
            100: "#c8e6c9";
            200: "#a5d6a7";
            300: "#81c784";
            400: "#66bb6a";
            500: "#4caf50";
            600: "#43a047";
            700: "#388e3c";
            800: "#2e7d32";
            900: "#1b5e20";
            A100: "#b9f6ca";
            A200: "#69f0ae";
            A400: "#00e676";
            A700: "#00c853";
        };
    };
    typography: {
        button: {
            textTransform: string;
        };
    };
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: boolean;
            };
        };
    };
};
