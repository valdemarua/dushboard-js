import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Typography, Box, AppBar, Toolbar, Drawer } from '@mui/material';
import { createTheme, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';

const Page = ({ title, children }) => {
    return (jsxs(Fragment, { children: [jsx(Typography, { variant: "h2", children: title }), jsx("div", { children: children })] }));
};

function Layout({ sidebar, children, sidebarWidth = 220 }) {
    return (jsxs(Box, { sx: { display: "flex" }, children: [sidebar && sidebar, jsxs(Box, { children: [jsx(AppBar, { position: "fixed", elevation: 0, style: { left: sidebarWidth }, children: jsx(Toolbar, { disableGutters: true, sx: { pl: 2 }, children: jsx(Box, { children: "asdf@asedf.com" }) }) }), jsx(Toolbar, {}), jsx(Box, { component: "main", children: children })] })] }));
}

function Sidebar({ children, logo, width = 220 }) {
    return (jsx(Box, { sx: { display: "flex" }, children: jsxs(Drawer, { open: true, variant: "persistent", sx: {
                width: width,
                "& .MuiDrawer-paper": { width: width },
            }, children: [logo && jsx(Toolbar, { children: logo }), children] }) }));
}

const themeConfig = {
    palette: {
        primary: blue,
        secondary: green,
    },
    // typography: {
    //   fontSize: 15,
    //   h3: {
    //     fontSize: "1.20rem",
    //     fontWeight: 500,
    //     marginTop: "1rem",
    //     marginBottom: "1rem",
    //   },
    // },
    typography: {
        button: {
            textTransform: "capitalize",
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    ":hover, :focus": {
                        boxShadow: "none",
                    },
                },
            },
        },
    },
};

const theme = createTheme(themeConfig);
function ThemeProvider({ children }) {
    return jsx(ThemeProvider$1, { theme: theme, children: children });
}

export { Layout, Page, Sidebar, ThemeProvider, themeConfig };
//# sourceMappingURL=index.js.map
