import { jsxs, jsx } from 'react/jsx-runtime';
import { Box, Typography, Toolbar, Drawer, AppBar as AppBar$1 } from '@mui/material';
import { createTheme, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';

const Page = ({ title, children }) => {
    return (jsxs(Box, { sx: { p: 2 }, children: [title && (jsx(Box, { sx: { mb: 2 }, children: jsx(Typography, { variant: "h2", children: title }) })), jsx(Box, { component: "main", children: children })] }));
};

function Layout({ sidebar, appbar, children, sidebarWidth = 220, }) {
    return (jsxs(Box, { sx: { display: "flex" }, children: [sidebar && sidebar, jsxs(Box, { children: [appbar && appbar, appbar && jsx(Toolbar, {}), jsx(Box, { component: "main", children: children })] })] }));
}

function Sidebar({ children, logo, width = 220 }) {
    return (jsx(Box, { sx: { display: "flex" }, children: jsxs(Drawer, { open: true, variant: "persistent", sx: {
                width: width,
                "& .MuiDrawer-paper": { width: width },
            }, children: [logo && jsx(Toolbar, { children: logo }), children] }) }));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const SIDEBAR_WIDTH = 220;

function AppBar(_a) {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (jsx(AppBar$1, Object.assign({ position: "fixed", elevation: 0, sx: {
            ml: `${SIDEBAR_WIDTH}px`,
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        } }, rest, { children: jsx(Toolbar, { sx: {
                justifyContent: "space-between",
                "& :only-child": { ml: "auto" },
            }, children: children }) })));
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
        h1: {
            fontSize: "2.25rem",
            fontWeight: 600,
            letterSpacing: "0",
            "@media (max-width:600px)": {
                fontSize: "1.875rem",
            },
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500,
            letterSpacing: "0",
            "@media (max-width:600px)": {
                fontSize: "1.75rem",
            },
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 500,
            letterSpacing: "-0.5px",
            "@media (max-width:600px)": {
                fontSize: "1.25rem",
            },
        },
        h4: {
            fontSize: "1.25rem",
            fontWeight: 500,
            letterSpacing: "-0.5px",
            "@media (max-width:600px)": {
                fontSize: "1rem",
            },
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "-0.5px",
            "@media (max-width:600px)": {
                fontSize: "0.875rem",
            },
        },
        h6: {
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "-0.25px",
            "@media (max-width:600px)": {
                fontSize: "0.75rem",
            },
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 400,
            letterSpacing: "0px",
            color: "rgba(51, 51, 51, 0.6)",
            "@media (max-width:600px)": {
                fontSize: "0.875rem",
            },
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0px",
            color: "rgba(51, 51, 51, 0.4)",
            "@media (max-width:600px)": {
                fontSize: "0.75rem",
            },
        },
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

export { AppBar, Layout, Page, Sidebar, ThemeProvider, themeConfig };
//# sourceMappingURL=index.js.map
