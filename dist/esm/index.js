import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';

const Page = ({ title, children }) => {
    return jsxs(Fragment, { children: [jsx(Typography, { variant: "h2", children: title }), jsx("div", { children: children })] });
};

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
            textTransform: 'capitalize',
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "contained"
            }
        }
    }
};

const theme = createTheme(themeConfig);
function ThemeProvider({ children }) {
    return (jsx(ThemeProvider$1, { theme: theme, children: children }));
}

export { Page, ThemeProvider, themeConfig };
//# sourceMappingURL=index.js.map
